<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin.js';

export default {
  components: {
    ListItem,
  },
  // mounted() {
  //   Bus.$emit('end:spinner');
  // }
  mixins: [ListMixin],
};
</script>
