const Renderer = function () {
    const renderPosts = function (posts){
        $('#posts').empty();
        for (let post of posts) {
            let addPost = `<div class=post data-id=${post.id}><p class=post-text>${post.text}</p>
            <input type="text" placeholder="Place a comment on this!" class="inputComment">
            </input><button class=commentButton>Add comment</button>`
            
            let comments = post.comments;
            for (let comment of comments) {
                let addComment = `<div class=comments data-id=${comment.id}>${comment.text} <button class=delete-comment> delete comment </button>`
                addComment += `</div>`
                addPost += addComment;
            }
            addPost += `<button class=delete> delete post </button></div>`
            
            $('#posts').append(addPost);
        }
 
    }
    
    return {
        renderPosts: renderPosts,
 
    }
 }