// convert news item title into 5 words or less with '-' separator
export default {
  methods: {
    createShortTitle(newsItem) {
      const IGNORE_CHARS = /[^\w\s]/g; // any char that is NOT a space, Latin charset alphanumeric character, or underscore
      const MAX_WORDS = 5;
      const MAX_URL_KEYWORDS = 7;
      const hasUrlKeyword = newsItem?.urlKeywords || false;
      let shortTitle = '';
      // delete non-alphaNumeric characters and replace multiple spaces with single
      const title = hasUrlKeyword ? newsItem.urlKeywords : newsItem.title;
      const alphaNumericTitle = title.replaceAll(IGNORE_CHARS, '').replaceAll('  ', ' ');
      if (newsItem?.urlKeywords) {
        shortTitle = alphaNumericTitle.split(' ').slice(0, MAX_URL_KEYWORDS).join('-');
      } else {
        shortTitle = alphaNumericTitle.split(' ').slice(0, MAX_WORDS).join('-');
      }

      return shortTitle;
    },
    createItemUrlDetail(newsItem) {
      const [year, month, day] = newsItem.date.split('-');
      let detail = `${year}/${month}/${day}`;
      const shortTitle = this.createShortTitle(newsItem);
      detail += `/${shortTitle}`;
      return detail;
    },
  },
};
