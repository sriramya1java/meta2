<template>
  <div class='main'>
    <div class='container' style="width: 100% ">
      <div class='treeSelf'>
        <vue-drag-tree :data='data' :allowDrag='allowDrag' ontoggle="true" :allowDrop='allowDrop' :fromWhere='left' :defaultText='"New Node"' @current-node-clicked='curNodeClicked' @drag="dragHandler" @drag-enter="dragEnterHandler" @drag-leave="dragLeaveHandler" @drag-over="dragOverHandler" @drag-end="dragEndHandler" @drop="dropHandler"></vue-drag-tree>
      </div>

      <div class='treeSelf'>
        <vue-drag-tree :data='data1' :allowDrag='allowDrag' ontoggle="true" :allowDrop='allowDropRight' :fromWhere='right' :defaultText='"New Node"' @current-node-clicked='curNodeClicked' @drag="dragHandler" @drag-enter="dragEnterHandler" @drag-leave="dragLeaveHandler" @drag-over="dragOverHandler" @drag-end="dragEndHandler" @drop="dropHandler"></vue-drag-tree>
      </div>

     <!-- <div class='showSec'>
        <pre>{{formatData1}}</pre>
      </div>
      <div class='showSec'>
        <pre>{{formatData}}</pre>
      </div>-->
        <!--<div class='showSec'>
            <pre>{{formatData1}}</pre>
        </div>-->
    </div>
  </div>
</template>

<script>
import VueDragTree from './VueDragTree.vue'
export default {
  name: 'Hello',
  components: {
    VueDragTree
  },
  data () {
    return {
      en: false,
      left: 'left',
      right: 'right',
      data: [
        {
          name: 'Node 0-0',
          id: 0,
          children: [
            {
              name: 'Node 1-1',
              id: 3,
              children: [
                {
                  name: 'Node 2-1',
                  id: 4,
                  children: []
                },
                {
                  name: 'Node 2-2',
                  id: 10,
                  children: []
                }
              ]
            },
            {
              name: 'Node 1-2',
              id: 13,
              children: []
            }
          ]
        },
        {
          name: 'Node 0-1',
          id: 14,
          children: []
        },
          {'name': 'USA', 'countryCode': 'IN', children: []}
      ],
      data1: [
            {'name': 'Categories', 'countryCode': '', children: []}
      ]
    }
  },
  computed: {
    formatData () {
      return JSON.stringify(this.data, null, 2)
    },
    formatData1 () {
      return JSON.stringify(this.data1, null, 2)
    }
  },
  methods: {
    allowDrag (model, component) {
      return true
    },
    allowDrop (model, component) {
      return false
    },
    allowDropRight (model, component) {
      return true
    },
    curNodeClicked (model, component) {
     // console.log('curNodeClicked', model, component)
    },
    dragHandler (model, component, e) {
      // console.log('dragHandler: ', model)
    },
    dragEnterHandler (model, component, e) {
      // console.log('dragEnterHandler: ', model, component, e)
    },
    dragLeaveHandler (model, component, e) {
      // console.log('dragLeaveHandler: ', model, component, e)
    },
    dragOverHandler (model, component, e) {
      // console.log('dragOverHandler: ', model, component, e)
    },
    dragEndHandler (model, component, e) {
      // console.log('dragEndHandler: ', model, component, e)
    },
    dropHandler (model, component, e) {
     // console.log('dropHandler: ', model, component, e)
      const list = model.children
        // change the id
      if (list && list !== undefined) {
        list.forEach(x => {
          x.key = Math.floor(Math.random() * 1000000000) + 1
        })
      }
    }
  }
}
</script>

<style scoped>
.main {
  display: flex;
  width: 100%;
  flex-direction: column;
  font-size: 35px;
  align-items: center;
}
.sentence {
  background: #d3dce6;
  margin-top: 2rem;
  width: 50%;
  padding: 1rem;
  font-size: 25px;
}
.senMain {
  background: white;
  padding: 1rem;
  color: #8492a6;
}
.lang {
  font-size: 20px;
  color: #8492a6;
  font-weight: bold;
}
ul {
  margin-left: 1rem;
}
.container {
  width: 60%;
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
  padding: 0 5rem;
}
.treeSelf {
  border: 3px solid #e5e9f2;
  color: white;
  width: 60%;
  text-align: left;
  padding: 1rem;
}
.showSec {
  border: 3px solid #e5e9f2;
  width: 60%;
  text-align: left;
  padding: 1rem;
  font-size: 15px;
}
.howtouse {
  text-align: center;
  width: 30%;
  background: #e5e9f2;
  margin-top: 1rem;
  padding: 1rem;
  font-size: 50px;
  font-weight: bold;
}
.howtouse > div {
  font-family: 'Tangerine';
  font-size: 5rem;
}
.getstart > div {
  background: #d3dce6;
  padding: 0.5rem 1rem;
}
.getstart > p {
  margin: 0.5rem 0;
}
a {
  color: black;
}
.tree-view-item-key {
  font-size: 20px;
  color: black;
}
.tree-view-item-value {
  font-size: 20px;
  font-weight: bold;
  color: white;
}
</style>

