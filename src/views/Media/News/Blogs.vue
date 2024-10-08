<template>
  <NewsModule :newsPageInfo="newsPageInfo" :cvenavs="cveNavs" />
</template>

<script>
import NewsModule from '@/components/NewsModule.vue';

export default {
  name: 'Blogs',
  components: {
    NewsModule,
  },
  created() {
  },
  data() {
    const submenuName = 'Blogs';
    return {
      newsPageInfo: {
        newsType: 'blog',
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
