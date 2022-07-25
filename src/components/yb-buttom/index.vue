<script>
export default { name: "ybButtom" };
</script>
<script setup>
import { computed, defineEmits, defineProps } from "vue";
/**
 * @props type:类型，默认primary 可选['info','success','warning','danger','text']
 * @props size:大小 默认 defalut 可选['mini','small','max']
 * @props loading 加载状态：默认 false 可选 true or false
 * @props disabled 禁用状态：默认 false 可选 true or false
 * @props round 按钮圆角 默认0px 可自定义
 */
const props = defineProps({
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
  loader: {
    type: String,
    default: "load3",
  },
});
// watch(
//   () => props.loading,
//   function (val) {
//     // if (val) {}
//   },
//   { deep: true, immediate: true }
// );
let buttonDisabled = computed({
  get() {
    if (props.disabled) return props.disabled;
    return props.loading;
  },
  set() {},
});

const onClick = (event) => {
  alert(1);
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
        'yb-buttom--loading': loading,
        'yb-buttom--disable': disabled,
      },
    ]"
    :disabled="buttonDisabled"
    @click="onClick"
  >
    <div v-if="loading" :class="['loading-container', loader]">
      <div class="loader"></div>
    </div>
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
/*正在加载*/
.yb-buttom--loading {
  opacity: 0.5;
  cursor: not-allowed !important;
}
.yb-buttom--disable {
  cursor: not-allowed !important;
}
.yb-button .loading-container {
  width: 16px;
  height: 16px;
  float: left;
  margin-right: 10px;
}
.load3 .loader {
  font-size: 10px;
  text-indent: -9999em;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #ffffff;
  background: -moz-linear-gradient(left, #fff 10%, rgba(255, 255, 255, 0) 42%);
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
.load3 .loader:before {
  width: 60%;
  height: 60%;
  background: #666;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
}
.load3 .loader:after {
  background: #fff;
  width: 80%;
  height: 80%;
  border-radius: 50%;
  content: "";
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
@keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
