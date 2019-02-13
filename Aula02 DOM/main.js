new Vue({ //Construtor
    el: '#app', //Referenciando uma div
    data: { //Objeto com varios atributos não precisa de data. pra acessar pos o Vue faz isso
        titulo: 'Hello World VueJs!!!'
    },
    methods: { //Cria metodos
        saudacao() {
            return 'Boa Semana!!!'
        }
    }
})