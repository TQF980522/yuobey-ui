<script>
export default { name: "ybButtom" };
</script>
<script setup>
import { defineEmits, defineProps } from "vue";
/**
 * @props type:类型，默认primary 可选['info','success','warning','danger','text']
 * @props size:大小 默认 defalut 可选['mini','small','max']
 * @props loading 加载状态：默认 false 可选 true or false
 * @props disabled 禁用状态：默认 false 可选 true or false
 * @props radius 按钮圆角 默认0px 可自定义
 */
defineProps({
  type: {
    type: String,
    default: "default",
    validator(type) {
      return ["default", "primary", "info", "warning", "danger"].includes(type);
    },
  },
  size: {
    type: String,
    default: "medium",
    validator(size) {
      return ["medium", "small", "mini"].includes(size);
    },
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },

  round: {
    type: Boolean,
    default: false,
  },
});
const onClick = (event) => {
  emit("click", event);
};
// 声明事件
const emit = defineEmits(["click"]);
</script>

<template>
  <button
    :class="[
      'yb-button',
      'yb-button--' + type,
      'yb-button--' + size,
      {
        'yb-button--round': round,
      },
    ]"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<style>
.yb-button {
  display: inline-block;
  outline: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  user-select: none;
  cursor: pointer;
  line-height: 1;
  white-space: nowrap;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}

/*颜色*/
.yb-button--default {
}

.yb-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}

.yb-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}

.yb-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
}

.yb-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}

.yb-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}

/*大小*/
.yb-button--medium {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.yb-button--small {
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
}

.yb-button--mini {
  padding: 7px 15px;
  font-size: 12px;
  border-radius: 3px;
}

/*是否圆角*/
.yb-button--round {
  border-radius: 20px;
}
</style>
