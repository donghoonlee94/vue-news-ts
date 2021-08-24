// High Order Component
import ListView from './ListView.vue';
import Bus from '../utils/bus';
import { CreateElement } from 'vue/types/umd';

export default function createListView(name: String) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    name,
    created() {
      Bus.$emit('start:spinner');
      this.$store
        .dispatch('FETCH_LIST', this.$route.name)
        .then(() => {
          console.log(name);
          Bus.$emit('end:spinner');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // ListView Component render
    render(createElement: CreateElement) {
      return createElement(ListView);
    },
  };
}
