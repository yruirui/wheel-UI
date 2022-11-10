import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory ,createRouter} from 'vue-router'
import fu from './components/fu.vue'
import fu2 from './components/fu2.vue'

const history=createWebHashHistory()
const router=createRouter({
    history:history,
    routes:[
        {path:'/',component:fu },
        {path:'/2',component:fu2}
    ]
})
const app=createApp(App)
app.use(router)
app.mount('#app')
