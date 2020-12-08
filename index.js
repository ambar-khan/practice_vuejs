var app = new Vue({
  el: '#app',
  data: {
    message: 'Holiday Recipe Ingredients!'
  },
  methods: {
    changeMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
