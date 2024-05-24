document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('addComment')
    const videoLinkInput = document.getElementById('video-link')
    const userNameInput = document.getElementById('user-name')
    const commentTextInput = document.getElementById('comment-text')
    const commentList = document.querySelector('comments')

    fetch('http://localhost:3000/controller/comments')
})