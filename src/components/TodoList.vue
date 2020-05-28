<template>
  <div class="app-todo-list">
    <v-card class="mx-auto" min-width="500">
      <v-list v-bind:three-line="true">
        <v-list-item-group>
          <TodoItem
            v-for="item in items"
            v-bind:key="item.id"
            v-bind:item="item"
            v-on:on-mark-item-as-done="markItemsAsDone($event)"
            v-on:on-delete-item="deleteItem($event)"
          >
          </TodoItem>
        </v-list-item-group>
      </v-list>

      <NewItemForm v-on:on-add-item="addItem($event)"></NewItemForm>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Item, defaultItems } from '@/public-api';
import TodoItem from './TodoItem.vue';
import NewItemForm from './NewItemForm.vue';

@Component({
  components: {
    TodoItem,
    NewItemForm
  }
})
export default class TodoList extends Vue {
  mounted() {
    this.$store.dispatch('addItems', defaultItems);
  }

  get items(): Item[] {
    return this.$store.state.items;
  }

  addItem(item: Item) {
    this.$store.dispatch('addItem', {
      ...item,
      id: performance.now().toString(),
      closed: false
    });
  }

  markItemsAsDone(itemId: string) {
    this.$store.dispatch('markItemsAsDone', itemId);
  }

  deleteItem(itemId: string) {
    this.$store.dispatch('deleteItem', itemId);
  }
}
</script>

<style scoped lang="scss"></style>
