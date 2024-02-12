new Vue ({
    el: '#app',
    data: {
        value: 1,
        title: "Hello World!",
        styleCSS: '',
        show: false,
        cars : [
            {model: "240sx", speed: 250.8},
            {model: "Skyline", speed: 320.21},
            {model: "E46", speed: 321.20},
            {model: "Impreza", speed: 280.5}
        ]
    },

    methods : {
        changeText () {
            this.title = 'Watch your cursor buddy'
        },

        changeShow () {
            this.show = !this.show
        },

        increment (value) {
            this.value = value
            if (value == 25)
            alert ("Easter egg")
        }
    },
    computed: {
        doubleValue () {
            return this.value * 2
        }
    }
});