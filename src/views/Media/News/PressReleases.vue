<template>
  <NewsModule :newsPageInfo="newsPageInfo" :cvenavs="cveNavs" />
</template>

<script>
import NewsModule from '@/components/NewsModule.vue';

export default {
  name: 'PressReleases',
  components: {
    NewsModule,
  },
  created() {
  },
  data() {
    const submenuName = 'Press Releases';
    return {
      newsPageInfo: {
        newsType: 'press-release',
        id: this.cvenavs.AllNews.submenu.Recent.submenu[submenuName].id,
        label: this.cvenavs.AllNews.submenu.Recent.submenu[submenuName].label,
        path: this.cvenavs.AllNews.submenu.Recent.submenu[submenuName].path,
      },
      cveNavs: this.cvenavs,
    };
  },
  props: {
    cvenavs: {
      type: Object,
      required: true,
    },
  },
};
</script>
