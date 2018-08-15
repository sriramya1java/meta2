<template>
  <v-layout row text-center>
    <v-flex xs2>
      <v-subheader inset>Dimensions:</v-subheader>
    </v-flex>
    <v-flex xs4 sm4 offset-sm0>
      <v-card class="grow">
          <v-list>
            <draggable v-model="exampleList" :options="{group:'people'}" class="dragArea">
            <v-list-tile
              v-for="text in exampleList"
              :key="text">
              <v-list-tile-content>
                <v-list-tile-title v-text="text"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            </draggable>
          </v-list>
      </v-card>
    </v-flex>
    <v-spacer></v-spacer>
    <v-flex xs4 sm4 offset-sm0>
      <v-subheader>Horizontal Axis</v-subheader>
      <v-card class="grow">
        <v-list>
          <draggable v-model="exampleList1" :options="{group:'people'}" class="dragArea">
            <v-list-tile
              v-for="text in exampleList1"
              :key="text">
              <v-list-tile-content>
                <v-list-tile-title v-text="text"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </draggable>
        </v-list>
      </v-card>
      <v-divider></v-divider>
      <v-subheader>Vertical Axis</v-subheader>
      <v-card class="grow">
        <v-list>
          <draggable v-model="exampleList2" :options="{group:'people'}" class="dragArea">
            <v-list-tile
              v-for="text in exampleList2"
              :key="text">
              <v-list-tile-content>
                <v-list-tile-title v-text="text"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </draggable>
        </v-list>
      </v-card>
      <v-divider></v-divider>
      <v-subheader>GEO Axis</v-subheader>
      <v-card class="grow">
        <v-list>
          <draggable v-model="exampleList3" :options="{group:'people'}" class="dragArea">
            <v-list-tile
              v-for="text in exampleList3"
              :key="text">
              <v-list-tile-content>
                <v-list-tile-title v-text="text"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </draggable>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
  import draggable from 'vuedraggable'
  export default {
    name: 'Dimensions',
    components: {
      draggable
    },
    data () {
      return {
        exampleList: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4',
          'Item 5',
          'Item 6',
          'Item 7',
          'Item 8',
          'Item 9',
          'Item 10'
        ],
        exampleList1: [
        ],
        exampleList2: [],
        exampleList3: []
      }
    }
  }
</script>
<style scoped>
</style>
