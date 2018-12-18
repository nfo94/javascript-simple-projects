const posts = [
  { title: 'Post One', body: 'This is post one'},
  { title: 'Post Two', body: 'This is post two'},
];

function getPosts(){
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
  }, 1000); //1s
}

// function createPost(post, callback){
//   setTimeout(() => {
//     posts.push(post);
//     callback();
//   }, 2000); //2s
// }

// createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);

function createPost(post){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if(!error){
        resolve(); 
      }else{
        reject('Error: something went wrong')
      }
    }, 2000);  
  })
}

// createPost({ title: 'Post Three', body: 'This is post three' })
//   .then(getPosts)
//   .catch(err => console.log(err));

// async function init(){
//   await createPost({ title: 'Post three', body: 'This is post three' });
//   getPosts()
// }

// init();

//Async await fetch

async function fetchUsers(){
  const res = await fetch('https://jsonplaceholder.typicode.com/users'); 
  const data = await res.json();
  console.log(data);
}