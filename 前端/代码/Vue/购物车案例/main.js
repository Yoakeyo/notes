const app = new Vue({
  el: "#app",
  data: {
    animes: [
      {
        id: 1,
        name: '电锯人',
        price: 100.00,
        count: 1,
      },
      {
        id: 2,
        name: '进击的巨人',
        price: 300.00,
        count: 1,
      },
      {
        id: 3,
        name: 'vivy',
        price: 200,
        count: 1,
      }
    ]
  },
  methods: {
    add(index) {
      this.animes[index].count++;
    },
    sub(index) {
      this.animes[index].count--;
    },
    removeThis(index) {
      this.animes.splice(index, 1)
    }
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      for (let i = 0; i < this.animes.length; i++) {
        totalPrice += this.animes[i].price * this.animes[i].count
      }
      return totalPrice
    }
  },
  filters: {
    showPrice(price) {
      return "￥" + price.toFixed(2)
    }
  }

})