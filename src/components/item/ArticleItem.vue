<template>
  <div class="article-item-wrap">
    <div class="article-item">
      <div class="book">
        <div class="link">
          BOOK
          <router-link :to="`/reader/${info.bookId}`">
            {{ info.book }}
          </router-link>
        </div>
        <div class="tag">
          <ul class="tag-list">
            <li class="item" v-for="item in info.tag" :key="item">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <h2 class="name">
        <router-link :to="`/article/${info._id}`">
          {{ info.title }}
        </router-link>
      </h2>
      <div class="desc">{{ info.desc }}</div>
      <div class="other">
        <div class="info">
          <div class="author">{{ info.author }}</div>
          <div class="time">{{ info.time }} · {{ timeUntilNow }}</div>
        </div>
        <div class="action">
          <span class="like">
            <i class="iconfont icon-like"></i>
            {{ info.like }}
          </span>
          <span class="comment">
            <i class="iconfont icon-comments"></i>
            {{ 3 }}
          </span>
        </div>
      </div>
    </div>
    <div class="article-cover hide-in-960" v-if="info.cover">
      <div class="cover" :style="`background-image: url(${info.cover})`"></div>
    </div>
    <div class="article-action" v-show="action">
      <i class="iconfont icon-write1 edit" @click="handleEdit"></i>
      <i class="iconfont icon-delete delete"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { IArticleItem } from "@/types/info";
import moment from "moment";

@Component
export default class ArticleItem extends Vue {
  @Prop({ default: {} }) info!: IArticleItem;
  @Prop({ default: false }) action!: boolean;

  get timeUntilNow(): string {
    let time: string = this.info.time;
    return moment(time).fromNow();
  }

  private handleEdit() {
    this.$router.push("/write");
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/styles/index.less";

.article-item-wrap {
  display: flex;
  justify-content: space-between;

  &:hover {
    .article-action {
      opacity: 1;
    }
  }

  .article-item {
    flex: 1;
    margin-right: @defMargin;

    .book {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      line-height: 20px;
      color: @lightText;

      .link {
        display: flex;
        font-size: 15px;

        a {
          .one-line();
          width: 200px;
          margin-left: 10px;
          font-style: italic;
          color: @lightText;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      .tag {
        .tag-list {
          .flex-center();

          .item {
            &:not(:last-child) {
              margin-right: 5px;
            }
          }
        }
      }
    }

    .name {
      margin-bottom: 2px;
      font-size: 20px;
      font-weight: 600;
      line-height: 28px;
      overflow: hidden;
      max-height: 84px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      color: #333;
      font-family: marat !important;
      cursor: pointer;

      &:hover a {
        text-decoration: underline;
      }
    }

    .desc {
      overflow: hidden;
      max-height: 84px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 16px;
      line-height: 20px;
      color: @lightText;
      margin-bottom: 12px;
    }

    .other {
      font-size: 15px;
      line-height: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .info {
        flex: 1;

        .time {
          color: @lightText;
        }
      }

      .action {
        .like {
          margin-right: 10px;
        }
      }
    }
  }

  .article-cover {
    width: 150px;

    .cover {
      background-repeat: no-repeat;
      background-position-y: center;
      height: 100%;
    }
  }

  .article-action {
    .flex-center();
    opacity: 0;
    flex-direction: column;
    width: 60px;
    transition: opacity 0.1s linear;

    i {
      .flex-center();
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 1px solid #333;
      transition: all 0.1s linear;
      cursor: pointer;

      &:not(:last-child) {
        margin-bottom: 10px;
      }

      &.delete {
        border-color: red;
        color: red;

        &:hover {
          background: red;
          color: #fff;
        }
      }

      &.edit {
        border-color: @mainColor;
        color: @mainColor;

        &:hover {
          background: @mainColor;
          color: #fff;
        }
      }
    }
  }
}

@media (max-width: 960px) {
  .hide-in-960 {
    display: none;
  }
}
</style>
