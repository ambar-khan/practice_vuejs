var app = new Vue({
  el: '#app',
  data: {
    message: 'Holiday Recipe Ingredients!'
  },
  methods: {
    changeMessage: function () {
      console.log('changing message...');
      this.message = "Good Job!";
    }
  }
})
