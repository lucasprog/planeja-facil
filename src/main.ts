import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.$filters ={
  currencyBRL(value: Number) {
   return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL', minimumFractionDigits: 2});
  },
  dateFormat(dateString: any, dateStyle:any = 'short'){
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', {dateStyle}).format(date);
  }
}

app.mount('#app')