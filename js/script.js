const {createApp} = Vue;

const app = createApp({
    data() {
        return {
            greetings: 'Welcome back!',
            image: 'https://prod-printler-front-as.azurewebsites.net/media/photo/107201-1.jpg?mode=crop&width=727&height=1024&rnd=0.0.1' 
        }
    }
});

app.mount('#root');
