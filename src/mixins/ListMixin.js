import Bus from '../utils/bus';

export default {
  // 재사용할 컴포넌트 옵션
  mounted() {
    Bus.$emit('end:spinner');
  },
};
