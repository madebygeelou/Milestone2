document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('addComment')
    const videoLinkInput = document.getElementById('video-link')
    const userNameInput = document.getElementById('user-name')
    const commentTextInput = document.getElementById('comment-text')
    const commentList = document.querySelector('comments')

    fetch('http://localhost:3000/controller/comments')
    .then(response => response.json())
    .then(comments => {
        addCommentToDOM(comment);
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newComment = {
        videoLink: videoLinkInput.value,
        userName: userNameInput.value,
        text: commentTextInput.value,
        timeStamp: new Date().toLocaleString(),
        likes: 0,
        dislikes: 0
    }

  fetch('http://localhost:3000/controller/comments', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newComment)
  })
  .then(response => response.json())
  .then(comment => {
    addCommentToDOM(comment);
    form.reset();
  })  
})