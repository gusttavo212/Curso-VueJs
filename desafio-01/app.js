new Vue ({
    el: '#desafio',
    data: {
        Nome: 'Gustavo Alexandre',
        Idade: 18,
        linkImagem: 'https://i.pinimg.com/originals/06/13/bc/0613bc40dae66d4c5ea5e85ea5009e25.jpg'
    },
    methods: {
        idadeTres (IdadeRecebida) {
            const idadeMultiTres = IdadeRecebida*3
            return idadeMultiTres
        },

        numeroAleatorio() {
            const numero = Math.random()
            return numero;
        }
    }
})