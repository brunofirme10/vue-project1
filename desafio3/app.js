new Vue({
    el: '#desafio',
    data: {
        valor: 0,
    },
    watch: {
        valor(){
            setTimeout(() => {
                this.valor = 0
            }, 8000)
        }
    },

    computed: {
        resultado() {
            return this.valor == 37 ? 'Valor Igual' : 'Valor Diferente'
        }
    },
    methods: {
        
    },
});