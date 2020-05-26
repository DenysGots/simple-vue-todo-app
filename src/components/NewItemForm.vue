<template>
  <div class="app-new-item-form">
    <v-form ref="form" :lazy-validation="true">
      <v-container>
        <v-row>
          <v-col cols="12" md="5">
            <v-text-field v-model="item.title" label="Title" required></v-text-field>
          </v-col>

          <v-col cols="12" md="5">
            <v-text-field v-model="item.subtitle" label="Subtitle" required></v-text-field>
          </v-col>

          <v-col class="d-flex align-center justify-center" cols="12" md="2">
            <v-btn small color="primary" v-bind:icon="true" @click="onAddItem">
              <v-icon v-text="'mdi-plus'"></v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';

@Component
export default class NewItemForm extends Vue {
  item: { title: string; subtitle: string } = {
    title: '',
    subtitle: ''
  };

  @Emit()
  onAddItem() {
    return this.item;
  }
}
</script>

<style scoped lang="scss"></style>
