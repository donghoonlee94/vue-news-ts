// store/types.ts
import { CommitOptions, Store } from 'vuex';
import { Mutations } from './mutations';
import { RootState } from './state';

type MyMutations = {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
};

// 이미 Store에 있는 commit을 제거하고, 새로운 Mutation을 인터섹션함으로써 스토어의 타입을 재 정의함.
export type MyStore = Omit<Store<RootState>, 'commit'> & MyMutations;
