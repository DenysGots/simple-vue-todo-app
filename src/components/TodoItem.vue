<template>
  <div class="app-todo-item">
    <v-list-item>
      <v-list-item-icon>
        <v-icon v-text="item.closed ? 'mdi-check' : 'mdi-clock-time-four-outline'"></v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title v-text="item.title"></v-list-item-title>
        <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action>
        <v-btn v-if="!item.closed" small color="primary" v-bind:icon="true" @click="onMarkItemAsDone">
          <v-icon v-text="'mdi-check'"></v-icon>
        </v-btn>

        <v-btn small color="primary" v-bind:icon="true" @click="onDeleteItem">
          <v-icon v-text="'mdi-minus'"></v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import { Item } from '@/public-api';

@Component
export default class TodoItem extends Vue {
  @Prop() private item!: Item;

  @Emit()
  onMarkItemAsDone() {
    return this.item.id;
  }

  @Emit()
  onDeleteItem() {
    return this.item.id;
  }
}
</script>

<style scoped lang="scss">
.v-list-item__icon {
  margin-right: 32px;
}

.v-list-item__content {
  text-align: left;
}
</style>
