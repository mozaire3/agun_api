import { allcomment,createcomment,updatecomment,removecomment, onecomment } from '@/api/CommentApi'
import {defineStore} from 'pinia'

export const useCommentStore = defineStore ('comment' ,{
    state: ()=>({
        comments:[],
        comment: []
    }),
    actions: {
        async getallcomment(){
            await allcomment().then((data)=>(this.comments=data))
        },
        async getonecomment(id){
            await onecomment(id).then((data)=>(this.comment=data))
        },
        async createcomments(content,post_id,username){
            await createcomment(content,post_id,username).then(async()=>await this.getallcomment())
        },
        async updatecomments(content,post_id,username,id){
            await updatecomment(content,post_id,username,id).then(async()=>await this.getallcomment())
        },
        async removecomments(id){
            await removecomment(id).then(async()=>await this.getallcomment())
        }    
    }
})