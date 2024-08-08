export const allpost = async()=> {
    const options = {
        method: 'GET',
        headers: {
            'content-Type':'application/json',
            //'Authorization': 'Bearer 7|rTsweJ0hC1oY9UDLObxqQbHI1oOXgtF5e7RjVtgF86645437'
    }
}
    const result = await fetch('http://127.0.0.1:8000/api/posts',options)
    .then ((reponse)=> reponse.json())
    .then ((data)=> data)
    console.log(result);
    return result
}



export const onepost = async(id)=> {
    const options = {
        method: 'GET',
        headers: {
            'content-Type':'application/json',
            //'Authorization': 'Bearer 7|rTsweJ0hC1oY9UDLObxqQbHI1oOXgtF5e7RjVtgF86645437'
    }
}
    const result = await fetch('http://127.0.0.1:8000/api/posts/'+ id,options)
    .then ((reponse)=> reponse.json())
    .then ((data)=> data)
    return result
}



export const createpost = async(url,user_id,content,category_id,notation = null)=> {
    const options = {
        method: 'POST',
        headers: {
            'content-Type':'application/json',
           // 'Authorization': 'Bearer 7|rTsweJ0hC1oY9UDLObxqQbHI1oOXgtF5e7RjVtgF86645437'
    },
    body: JSON.stringify({
        url: url,
        user_id:user_id,
        content: content,
        category_id : category_id,
        notation: notation
    })
}
    const result = await fetch('http://127.0.0.1:8000/api/posts',options)
    .then ((reponse)=> reponse.json())
    .then ((data)=> data)
    return result
}





export const updatepost = async(url,user_id,content,category_id,id,notation)=> {
    const options = {
        method: 'PUT',
        headers: {
            'content-Type':'application/json',
           // 'Authorization': 'Bearer 7|rTsweJ0hC1oY9UDLObxqQbHI1oOXgtF5e7RjVtgF86645437'
    },
    body: JSON.stringify({
        url: url,
        user_id:user_id,
        content: content,
        category_id : category_id,
        notation: notation

    })
}
    const result = await fetch('http://127.0.0.1:8000/api/posts/'+id,options)
    .then ((reponse)=> reponse.json())
    .then ((data)=> data)
    return result
}




export const removepost = async(id)=> {
    const options = {
        method: 'DELETE',
        headers: {
            'content-Type':'application/json',
            //'Authorization': 'Bearer 6|uaiZVByJHRT7pfJBFGOOZbTWh4u7LZJZsQJMNDVL4cb8e8be'
    }
}
    const result = await fetch('http://127.0.0.1:8000/api/posts/'+id,options)
    .then ((reponse)=> reponse.json())
    .then ((data)=> data)
    return result
}
