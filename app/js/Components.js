import {data} from './data'
import Vue from 'vue'

Vue.component('titulo', {
  template: '<h2>{{titulo}}</h2>',
  data: function(){
    return { titulo: 'Lista de Tareas'}
  }
});
console.log(data)
Vue.component('nueva-tarea',{
  template: `
  <div class="input-group">
  <input type="text" @keyup.enter="agregarTarea" placeholder="Escribe una nueva tarea" v-model="nuevaTarea" class="form-control">
  <span class="input-group-btn">
  <button type="button" v-on:click="agregarTarea" class="btn btn-primary">Agregar</button>
  </span>
  </div>
  `,
  data: function() {
   return data;
  },
  methods: {
   agregarTarea: function () {
     let texto = this.nuevaTarea.trim();
     if(texto){
       this.tareas.push({
         texto: texto,
         terminada: false
       })
     }
     this.nuevaTarea = ""
     }
  }
});

Vue.component('lista-de-tareas',{
  template: `
  <ul class="list-group">
  <li v-for="(tarea, indice) of tareas" class="list-group-item" :class="{terminada: tarea.terminada}">
      {{tarea.texto}}
  <span class="float-right">
  <button type="button" class="btn btn-success btn-xs glyphicon glyphicon-ok"
  v-on:click="tarea.terminada = !tarea.terminada"
  > </button>
  <button type="button" class="btn btn-danger btn-xs glyphicon glyphicon-remove"
  v-on:click="borrar(indice)"
  > </button>
  </span>
  </li>
</ul>
  `,
  data: function (){
     return data;
  },
  methods: {
   borrar: function(indice){
     this.tareas.splice(indice,1)
   }
  }
});