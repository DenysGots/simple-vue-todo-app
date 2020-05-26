<template>
  <v-app>
    <div class="app-main-container d-flex align-center justify-center">
      <TodoList></TodoList>
    </div>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoList from './components/TodoList.vue';

@Component({
  components: {
    TodoList
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import '../node_modules/vuetify/src/styles/main';

.app-main-container {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin-top: 60px;
  text-align: center;
}
</style>
