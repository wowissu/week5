import type { Plugin } from 'vue';
import axios from 'axios';

export default {
  install(app) {
    const apiInstance = axios.create({
      baseURL: 'api.1111.com.tw'
    });

    app.config.globalProperties.$api = apiInstance;
  }
} as Plugin;