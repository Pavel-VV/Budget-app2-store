<template>
  <!-- <div :style="{'color': styleColorTotal}" class="total-value">Balance: {{ total }}</div> -->
  <div class="total-value" :class="styleColorTotalObj">
    Balance: {{ totalBalance }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TotalBalance",
  // props: {
  //   total: {
  //     type: Number,
  //     default: 0,
  //   },
  // },
  computed: {
    // styleColorTotal(){
    //   return this.total > 0 ? 'green' : (this.total < 0) ? 'red' : 'black';
    // },
    ...mapGetters("listStore", ["totalBalance"]),
    styleColorTotalObj() {
      return {
        green: this.totalBalance > 0,
        red: this.totalBalance < 0,
        black: this.totalBalance === 0,
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
