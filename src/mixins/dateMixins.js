export default {
  methods: {
    formatDateRange(start, end) {
      const dateFormat = new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
      return dateFormat.formatRange(this.formatDate(start), this.formatDate(end));
    },
    formatDate(newsDate) {
      const [year, month, day] = newsDate.split('-');
      const formattedDate = new Date();
      formattedDate.setFullYear(parseInt(year, 10));
      formattedDate.setMonth(parseInt(month, 10) - 1, parseInt(day, 10));

      return formattedDate;
    },
  },
};
