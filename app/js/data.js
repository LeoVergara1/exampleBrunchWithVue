


import Vue from 'vue'
export var data = {
  tareas:[
    {
      texto: "Aprender Vue js",
      terminada: false
    },
    {
      texto: "Aprender ANgular js",
      terminada: false
    },
    {
      texto: "Aprender Ionic 2",
      terminada: false
    }
  ],
  nuevaTarea: ""
};
Vue.component('titulo', {
  template: '<h2>{{titulo}}</h2>',
  data: function(){
    return { titulo: 'Lista de Tareas'}
  }
});

