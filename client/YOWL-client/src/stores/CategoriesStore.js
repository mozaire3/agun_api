
import { allcategories, createcategories, onecategories, removecategories, updatecategories } from '@/api/CategoryApi'
import {defineStore} from 'pinia'

export const useCategoriesStore = defineStore('categorie',{
    state: ()=>({
        categories:[],
        categorie: []
    }),
    actions: {
        async getallcategories(){
            await allcategories.then((data)=>(this.categories=data))
        },
        async getonecategories(id){
            await onecategories(id).then((data)=>(this.post=data))
        },
        async createcategorie(parent_id,name){
            await createcategories(parent_id,name).then(async()=>await this.getallcategories())
        },
        async updatecategorie(parent_id,name){
            await updatecategories(parent_id,name).then(async()=>await this.getallcategories())
        },
        async removecategorie(id){
            await removecategories(id).then(async()=>await this.getallcategories())
        }
    }

})
  