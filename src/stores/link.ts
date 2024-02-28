import { defineStore } from 'pinia';

export const useLinkStore = defineStore('link', {
  actions: {
    isExactPath(onPageLink: string, pageLink: string) {
      if (onPageLink === pageLink) return true;
      return false;
    }
  }
});