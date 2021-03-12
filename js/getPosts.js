export const getPosts = async () => (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
