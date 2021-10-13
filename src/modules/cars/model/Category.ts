import {v4 as uuidV4} from 'uuid'
class Category {
    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }
    }
    name: string
    description: string
    createdAt: Date
    id?: string
}
export  {Category}