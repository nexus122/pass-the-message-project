// Tu código aquí


Vue.createApp({
    data(){
        return{
            message: '',
            downMessage: '',
            alert: 'You must write a message'
        }
    },
    methods:{
        passTheMessage(){            
            this.downMessage = this.message.trim() != '' ? this.message : ''
            this.alert = this.message.trim() == '' ? 'A blank space is not a message...': 'You must write a message'
            this.message = ''
        }
    }
}).mount('#app');
