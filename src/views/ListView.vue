<template>
  <div>
    <ListItem :items="newsItems"></ListItem>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import { fetchNewsList } from '@/api';

export default {
  components: {
    ListItem,
  },
  data() {
    return {
      newsItems: [],
    };
  },
  methods: {
    async fetchNewsItems() {
      const response = await fetchNewsList();
      this.newsItems = response.data;
    },
  },
  created() {
    this.fetchNewsItems();
  },
};
</script>

<style></style>
