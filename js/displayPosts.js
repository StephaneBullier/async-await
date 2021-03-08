import {getPosts} from './getPosts.js'

export const displayPosts = async () => {
  let posts = []
  const appHtml = document.querySelector('#app')

  try {
    posts = await getPosts()
    for (let post of posts) {
      appHtml.innerHTML += `
        <div>
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        </div>
        `
    }
  } catch (error) {
    console.error(error)
  }
}
