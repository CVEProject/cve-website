<template>
  <NewsModule :newsPageInfo="newsPageInfo" :cvenavs="cveNavs" />
</template>

<script>
import NewsModule from '@/components/NewsModule.vue';

export default {
  name: 'AllNews',
  components: {
    NewsModule,
  },
  data() {
    const submenuName = 'All';
    return {
      newsPageInfo: {
        newsType: 'all',
        id: this.cvenavs.AllNews.submenu[submenuName].id,
        label: this.cvenavs.AllNews.submenu[submenuName].label,
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
