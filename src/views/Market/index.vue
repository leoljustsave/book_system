<template>
  <div class="market-wrap">
    <div class="market">
      <LineList
        v-for="item in bookGroupInfo"
        :key="item.id"
        :listInfo="item"
        :nowSwiper="activeSwiper"
        @updateActiveSwiper="handleUpdateActiveSwiper"
      ></LineList>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { State, Action } from "vuex-class";
import { IListItem, ILineListItem } from "@/types/info";

// components
import LineList from "./components/LineList.vue";
import { ITag } from "../../types/info";

@Component({
  components: {
    LineList
  }
})
export default class Market extends Vue {
  public activeSwiper: number = -1;

  @State(state => state.book.bookGroupInfo)
  bookGroupInfo!: ILineListItem[];

  @Action("book/getBookGroupInfo") getBookGroupInfo!: Function;

  private mounted() {
    this.getBookGroupInfo();
  }

  handleUpdateActiveSwiper(id: number): void {
    this.activeSwiper = id;
  }
}
</script>

<style lang="less">
@import "../../assets/styles/index.less";

.market-wrap {
  .market {
  }
}
</style>
