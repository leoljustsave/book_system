<template>
  <div class="book-item-wrap">
    <div class="pic">
      <img :src="info.cover" alt="" />
    </div>
    <div class="info">
      <p class="name">
        <router-link :to="`/reader/${info._id}`">
          {{ info.name }}
        </router-link>
      </p>
      <p class="author">author: {{ info.author }}</p>
      <p class="progress">progress: {{ info.percent }} %</p>
      <p class="time">last time: {{ info.date }}</p>
    </div>
    <div class="operate">
      <i
        v-if="isCancel"
        class="iconfont icon-delete delete"
        @click="handleCancel(info._id)"
      ></i>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Action } from "vuex-class";
import { IUserCollect } from "@/types/user";

@Component
export default class BookItem extends Vue {
  @Prop({
    default: () => {
      return {};
    }
  })
  info!: IUserCollect[];
  @Prop({ default: false }) isCancel!: boolean;

  private handleCancel(id: string) {
    this.$emit("cancel", id);
  }
}
</script>

<style lang="less" scoped>
@import "../../../assets/styles/index.less";

.book-item-wrap {
  .flex-center();
  padding: @defMargin;
  box-sizing: border-box;
  align-items: unset;
  border-radius: 10px;
  position: relative;
  transition: all 0.3s linear;

  &:hover {
    box-shadow: 0 0 20px 0px #33333330;
  }

  .pic {
    flex: 0 0 70px;
    height: 100px;
    background-color: #ccc;
    margin-right: @defMargin;
    border-radius: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .info {
    flex: 1;
    // BUG: 去掉试试 ?
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      .one-line();

      a {
        .one-line();

        &:hover {
          text-decoration: underline;
        }
      }

      &:not(:last-child) {
        margin-bottom: 5px;
      }
    }

    .name {
      font-size: 26px;
    }

    .author {
      font-size: 16px;
    }

    .progress {
    }

    .time {
      font-family: SFNSRounded;
      font-size: 12px;
    }
  }

  .operate {
    position: absolute;
    bottom: @defMargin;
    right: @defMargin;

    i {
      display: inline-block;
      border-radius: 50%;
      padding: 5px;
      cursor: pointer;

      &:not(:last-child) {
        margin-right: 10px;
      }

      &.delete {
        color: red;

        &:hover {
          background: red;
          color: #fff;
        }
      }

      &.cancel-collect {
        color: red;

        &:hover {
          background: red;
          color: #fff;
        }
      }
    }
  }
}
</style>
