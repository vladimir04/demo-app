<template>
  <button :type="type" @click="$emit('click')">
    <div v-if="loading">
      <VpLoading />
    </div>
    <slot v-else />
  </button>
</template>

<script>
import VpLoading from "@/components/VpLoading";
export default {
  name: "VpButton",
  components: { VpLoading },
  props: {
    type: {
      type: String,
      default: "button",
      validator(val) {
        return ["button", "submit"].includes(val);
      }
    },
    loading: {
      type: Number,
      default: 0
    }
  }
};
</script>
<style lang="less" scoped>
button {
  appearance: none;
  display: inline-flex;
  justify-content: center;
  padding: 0;
  background: transparent;
  border: none;
  outline: none;
  word-wrap: break-word;
  hyphens: auto;
  transition-property: background-color, border-color, opacity;
  transition-duration: 0.3s;
  user-select: none;
  cursor: pointer;
}
</style>
