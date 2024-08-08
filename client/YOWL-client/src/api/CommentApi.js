export const allcomment = async()=> {
    const options =  {
        method: 'GET',
        headers:{
            'content-type': 'application/json',
            Authorization: 'Bearer 6|uaiZVByJHRT7pfJBFGOOZbTWh4u7LZJZsQJMNDVL4cb8e8be'
        }

    }
    const result = await fetch('http://127.0.0.1:8000/api/comments/',options)
    .then((response)=>response.json())
    .then((data)=>data)
    return result
}


export const onecomment = async(id)=> {
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer 7|rTsweJ0hC1oY9UDLObxqQbHI1oOXgtF5e7RjVtgF86645437'
        }  
    }
    const result= await fetch('http://127.0.0.1:8000/api/comments/' + id ,options)
    .then((response)=>response.json())
    .then((data)=>data)
    return result 
}


export const  createcomment =  async(content,post_id,username) => {
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization':'Bearer 7|rTsweJ0hC1oY9UDLObxqQbHI1oOXgtF5e7RjVtgF86645437'
        },
        body: JSON.stringify({
            content: content,
            post_id: post_id,
            username: username
        })
    }
    const result= await fetch('http://127.0.0.1:8000/api/comments/',options)
    .then((response)=>response.json())
    .then((data)=>data)
    return result
}

export const  updatecomment =  async(content,post_id,username,id) => {
    const options = {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'Authorization':'Bearer 7|rTsweJ0hC1oY9UDLObxqQbHI1oOXgtF5e7RjVtgF86645437'
        },
        body: JSON.stringify({
            content: content,
            post_id: post_id,
            username: username
        })
    }
    const result= await fetch('http://127.0.0.1:8000/api/comments/'+ id,options)
    .then((response)=>response.json())
    .then((data)=>data)
    return result
}


export const  removecomment =  async(id) => {
    const options = {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'Authorization':'Bearer 7|rTsweJ0hC1oY9UDLObxqQbHI1oOXgtF5e7RjVtgF86645437'
        }
    }
    const result= await fetch('http://127.0.0.1:8000/api/comments/' +id ,options)
    .then((response)=>response.json())
    .then((data)=>data)
    return result
}