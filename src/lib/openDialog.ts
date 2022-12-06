import { createApp,h } from 'vue'
import Dialog from './Dialog.vue'

export const openDialog=(options)=>{
    const {title,content,ok,cancel}=options
    const div=document.createElement('div')
    //c创建一个div，先插入body在将dialog放进去
    document.body.appendChild(div)
    const app=createApp(
        {
            render(){
                return h(Dialog,{visible:true,'onUpdate:visible':(newvisible)=>{
                      if(newvisible==false){
                        app.unmount(div)
                        div.remove()
                      }
                      
                },ok,cancel},{title,content})
            }
        }
    )
    app.mount(div)
}