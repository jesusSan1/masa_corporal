const app = Vue.createApp({
    data() {
        return {
            peso: '',
            altura: '',
            resultado: '',
            estado: ''
        }
    },
    methods: {
        calcular() {
            if (this.peso != '' && this.altura != '') {
                this.resultado = (this.peso / ((this.altura / 100) * (this.altura / 100))).toFixed(2)
                this.peso = ''
                this.altura = ''
                if (this.resultado < 18.5) {
                    this.estado = 'Peso inferior'
                }
                else if (this.resultado >= 18.5 && this.resultado <= 24.9) {
                    this.estado = 'Peso normal'
                }
                else if (this.resultado > 25 && this.resultado <= 29.9) {
                    this.estado = 'Peso superior a lo normal'
                }
                else if (this.resultado > 30) {
                    this.estado = 'Obesidad'
                }
            } else {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'error',
                    title: 'Ingresa los valores'
                })
            }
        }
    }
})
app.mount("#app")