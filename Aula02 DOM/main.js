new Vue({ //Construtor
    el: '#app', //Referenciando uma div
    data: { //Objeto com varios atributos não precisa de data. pra acessar pos o Vue faz isso
        titulo: 'Hello World VueJs!!!'
    },
    methods: { //Cria metodos
        saudacao() {
            return 'Boa Semana!!!'
            //Só pode ser retornado um valor que pode virar string pois o valor vai para o html 
            //e ele só aceita string se retornar um int ele vai pro html como string
        }
    }
})