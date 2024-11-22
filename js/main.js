// GET POST PUT DELETE

//GET

//fetch('https://api.kanye.rest')
//.then(res => res.json())
//.then(data => console.log(data))

// GET dummy post

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(res => res.json())
.then(data => console.log(data))


let lesHeaders = {
    'Content-Type': 'application/json'
}
let leBodyEnJavaScript= {
    title: "le titre de l'article",
    body: "bla bla bla bla patati patata",
    userId: 21
}


let leBodyEnJSON = JSON.stringify(leBodyEnJavaScript)

//POST
fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    headers: lesHeaders,
    body: leBodyEnJSON
})
    .then(res => res.json())
    .then(data => console.log(data))
