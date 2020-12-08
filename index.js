var app = new Vue({
  el: '#app',
  data: {
    message: 'Holiday Recipe Ingredients!',
    showInfo: true,
    fruits: ['raspberry', 'apple', 'banana', 'kiwi'],
    newFruit: ""
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
    },
    addFruit: function () {
      console.log('adding fruit...');
      console.log(this.newFruit);
      // how can i add newFruit to the array?
      this.fruits.push(this.newFruit);
      this.newFruit = "";
    }
  }
});