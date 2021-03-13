import {getPosts} from './getPosts.js'

export const displayPosts = async () => {
  let posts = []
  const appHtml = document.querySelector('#app')
  
  try {
    posts = await getPosts()
    
    for (const post of posts) {
      appHtml.insertAdjacentHTML('beforeend', `
                                                <div>
                                                  <h2>${post.title}</h2>
                                                  <p>${post.body}</p>
                                                </div>
                                              `
                                )
    }
  } catch (error) {
    console.error(error.message)
  }
}
