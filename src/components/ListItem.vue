<template>
  <div>
    <ul class="news-list">
      <li v-for="item in items" :key="item.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <!-- 타이틀 영역 -->
          <p class="news-title">
            <template v-if="item.domain">
              <a :href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link :to="`/item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            {{ timeAgo(item) }}
            by
            <router-link v-if="item.user" :to="`/user/${item.user}`" class="link-text">
              {{ item.user }}
            </router-link>
            <a :href="item.url" v-else>
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { NewsItem } from '@/api';
import Vue, { PropType } from 'vue';
export default Vue.extend({
  props: {
    items: {
      type: Array as PropType<NewsItem[]>,
      required: true,
    },
  },
  methods: {
    timeAgo(news: NewsItem): string {
      return news.time_ago.concat('2021');
    },
  },
  computed: {
    // timeAgo(): string {
    //   return this.items[0].time_ago.concat();
    // },
  },
});
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ffffff;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.news-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>
