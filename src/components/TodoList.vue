<template>
  <div class="app-todo-list">
    <v-card class="mx-auto" min-width="500">
      <v-list v-bind:three-line="true">
        <v-list-item-group>
          <TodoItem
            v-for="(item, i) in items"
            :key="i"
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
import { find, flow, remove } from 'lodash/fp';
import { Component, Vue } from 'vue-property-decorator';

import TodoItem from './TodoItem.vue';
import NewItemForm from './NewItemForm.vue';

export interface Item {
  id: string;
  title: string;
  subtitle: string;
  closed: boolean;
}

@Component({
  components: {
    TodoItem,
    NewItemForm
  }
})
export default class TodoList extends Vue {
  items: Item[] = [
    {
      id: '1',
      title: 'Title 1',
      subtitle: 'Task 1',
      closed: true
    },
    {
      id: '2',
      title: 'Title 2',
      subtitle: 'Task 2',
      closed: false
    },
    {
      id: '3',
      title: 'Title 3',
      subtitle: 'Task 3',
      closed: false
    },
    {
      id: '4',
      title: 'Title 4',
      subtitle: 'Task 4',
      closed: false
    }
  ];

  addItem(item: Item) {
    this.items = [
      ...this.items,
      {
        ...item,
        id: performance.now().toString()
      }
    ];
  }

  markItemsAsDone(itemId: string) {
    const markAsDone = (item: Item) => (item.closed = true);
    // noinspection TypeScriptValidateTypes
    flow(find(['id', itemId]), markAsDone)(this.items);
  }

  deleteItem(itemId: string) {
    // noinspection TypeScriptValidateTypes
    this.items = remove((item: Item) => item.id === itemId, this.items);
  }
}
</script>

<style scoped lang="scss"></style>
