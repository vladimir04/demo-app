<template>
  <span>{{ currencyFormatted }} {{ currencySymbol }}</span>
</template>

<script>
import { defaultCurrency } from "@/configs/defaults.config.js";
export default {
  name: "VpCurrency",
  props: {
    amount: {
      type: Number,
      default: 0
    }
  },
  computed: {
    currencySymbol() {
      return defaultCurrency.symbol;
    },
    currencyFormatted() {
      return this.amount / 100;
    }
  }
};
</script>