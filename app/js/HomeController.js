
import {data} from './data'
import Vue from 'vue'

export const app = new Vue({
  el:"#app",
  data: data,
  methods: { 
    test: function() {
      console.log("dando click")
      this.tareas = []
    }

  }

})