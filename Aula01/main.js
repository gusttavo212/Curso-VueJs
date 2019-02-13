new Vue({//Construtor
    el: '#app',//Referenciando uma div
    data: {//Criando uma variavel
        titulo: 'Hello World VueJs!!!'
    },
    methods: {//Cria metodos
        alterarTitulo(event) {
            this.titulo = event.target.value
        }
    }
})