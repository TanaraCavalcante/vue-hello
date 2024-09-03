const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'vue hello!'
      }
    }
  }).mount('#app')