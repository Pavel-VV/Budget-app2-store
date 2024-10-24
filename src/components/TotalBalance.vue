<template>
  <!-- <div :style="{'color': styleColorTotal}" class="total-value">Balance: {{ total }}</div> -->
  <div class="total-value" :class="styleColorTotalObj">
    Balance: {{ total }}
  </div>
</template>

<script>
export default {
  name: "TotalBalance",
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    // styleColorTotal(){
    //   return this.total > 0 ? 'green' : (this.total < 0) ? 'red' : 'black';
    // },
    styleColorTotalObj() {
      return {
        green: this.total > 0,
        red: this.total < 0,
        black: this.total === 0,
      };
    },
  },
};
</script>

<style scoped>
.total-value {
  font-size: 26px;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
}

.green {
  color: green;
}

.red {
  color: red;
}

.black {
  color: black;
}
</style>
