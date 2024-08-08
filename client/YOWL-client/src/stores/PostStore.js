import { allpost, createpost, onepost, removepost, updatepost } from '@/api/PostApi'
import {defineStore} from 'pinia'

export const usePostStore = defineStore('store',{
    state: ()=>({
        posts:[],
        post: []
    }),
    actions: {
        async getallpost(){
            await allpost().then((data)=>(this.posts=data))
        },
        async getonepost(id){
            await onepost(id).then((data)=>(this.post=data))
        },
        async createposts(url,user_id,content,category_id,notation){
            await createpost(url,user_id,content,category_id,notation).then(async()=>await this.getallpost())
        },
        async updatespost(url,user_id,content,category_id,id,notation){
            await updatepost(url,user_id,content,category_id,id,notation).then(async()=>await this.getallpost())
        },
        async removepostes(id){
            await removepost(id).then(async()=>await this.getallpost())
        }
    }

})
  