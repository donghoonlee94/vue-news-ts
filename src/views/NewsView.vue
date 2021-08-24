<template>
  <div>
    <ListView></ListView>
  </div>
</template>

<script>
import ListView from './ListView.vue';
import ListMixin from '../mixins/ListMixin.js';

export default {
  components: {
    ListView,
  },
  mixins: [ListMixin],
};
</script>
