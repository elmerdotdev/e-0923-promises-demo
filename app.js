const todos = document.querySelector('.todos')
const posts = document.querySelector('.posts')
const products = document.querySelector('.products')

// TODOS

let listOfTodos = []
const fetchTodos = async () => {
  const res = await fetch('https://dummyjson.com/todos')
  const data = await res.json()
  listOfTodos = data.todos

  let divItems = ""
  for (let i = 0; i < listOfTodos.length; i++) {
    divItems += `<li>${listOfTodos[i].todo}</li>`
  }
  todos.innerHTML = divItems
}
fetchTodos()


// POSTS

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
      let listOfPosts = json
      console.log(listOfPosts)

      let divPosts = ""
      listOfPosts.forEach(post => {
        divPosts += `<li><strong>${post.title} - ${post.id}</strong><p>${post.body}</p></li>`
      })
      posts.innerHTML = divPosts
    })

// PRODUCTS

fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(json => {
      let listOfProducts = json.products
      console.log(listOfProducts)

      let divProducts = ""
      listOfProducts.forEach(product => {
        divProducts += `<li><strong>${product.title} - Category: ${product.category}</strong><div><img src="${product.thumbnail}" width="200" /></div></li>`
      })
      products.innerHTML = divProducts
    })