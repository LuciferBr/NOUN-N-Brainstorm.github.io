let postId = 1;

function submitPost() {
    const postText = document.getElementById('post-text').value;
    
    if (postText.trim() !== '') {
        const post = createPost(postText);
        const postsList = document.getElementById('posts-list');
        postsList.appendChild(post);
        document.getElementById('post-text').value = '';
    } else {
        alert('Please enter some text before posting.');
    }
}

function createPost(text) {
    const post = document.createElement('div');
    post.classList.add('post');
    post.innerHTML = `
        <p>${text}</p>
        <button onclick="deletePost(${postId})">Delete</button>
    `;
    postId++;
    return post;
}

function deletePost(id) {
    const post = document.getElementById(id);
    post.remove();
}
