import { defineStore } from 'pinia';
import NotificationData from '@/assets/data/NotificationBanner.json';

export const useGlobalNotificationStore = defineStore('globalNotification', {
  state: () => { 
    return {
      isCollapsed: false
    }
  },
  actions: {
    setLocalNotificationStates() {
      if (localStorage.getItem('isCollapsed') === 'true') {
        localStorage.setItem('isCollapsed', 'false');
        this.isCollapsed = false;
        localStorage.setItem('publishCount', NotificationData.publishCount.toString());
      } else {
        localStorage.setItem('isCollapsed', 'true');
        this.isCollapsed = true;
        localStorage.setItem('publishCount', NotificationData.publishCount.toString());
      }
    }
  }
});
