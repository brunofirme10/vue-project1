new Vue({
    el: "#app",

    data: {
        pessoa: {
            name: 'bruno',
            idade: 30,
        },
        imagem: '',
    },

    methods: {
        idadeTres() {
            return this.pessoa.idade * 3
        },
    }
})

//10391083856