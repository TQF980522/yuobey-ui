<script lang="ts">
export default { name: "ybButtom" };
</script>
<script setup>
import { ref, onMounted, computed } from "vue";
/**
 * @props type:类型，默认primary 可选['info','success','warning','danger','text']
 * @props size:大小 默认 defalut 可选['mini','small','max']
 * @props loading 加载状态：默认 false 可选 true or false
 * @props disabled 禁用状态：默认 false 可选 true or false
 * @props radius 按钮圆角 默认0px 可自定义
 */
const props = defineProps({
  type: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "default",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  radius: {
    type: String,
    default: "0px",
  },
});
const typeStyle = {
  primary: {},
  info: {},
  success: {},
  warning: {},
  danger: {},
  text: {},
};
// 声明事件
const emit = defineEmits([""]);
</script>

<template>
  <button></button>
</template>

<style lang="scss" scoped>
</style>
