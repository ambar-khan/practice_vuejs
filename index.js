var app = new Vue({
  el: '#app',
  data: {
    message: 'Holiday Recipe Ingredients!',
    showInfo: true
  },
  methods: {
    changeMessage: function () {
      console.log('changing message...');
      this.message = "Good Job!";
    },
    toggleInfo: function () {
      console.log('toggling info...');
      if (this.showInfo === true) {
        this.showInfo = false;
      } else {
        this.showInfo = true;
      }
    }
  }
});