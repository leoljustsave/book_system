<template>
  <div class="loading-wrap">
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="24px"
      height="30px"
      viewBox="0 0 24 30"
      style="enable-background:new 0 0 50 50;"
      xml:space="preserve"
    >
      <rect x="0" y="0" width="4" height="10" fill="#333">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin="0"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="10" y="0" width="4" height="10" fill="#333">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin="0.2s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="20" y="0" width="4" height="10" fill="#333">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin="0.4s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
    <span class="txt">{{ txt }}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class Loading extends Vue {
  @Prop({ type: String, default: "" }) txt!: string;
}
</script>

<style lang="less" scoped>
.loading-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .txt {
    margin-top: 10px;
  }
}
</style>
