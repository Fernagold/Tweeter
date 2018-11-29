const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())



    const post = () => {
        tweeter.addPost($("#input").val())
        renderer.renderPosts(tweeter.getPosts()) 
    }
    
    $("#posts").on("click", ".delete", function(){
        tweeter.removePost(($(this).closest(".post").data().id))
        renderer.renderPosts(tweeter.getPosts())
    })
    $("#posts").on("click", ".commentButton", function(){
        let commentValue = $(this).siblings(".inputComment").val()
        let idValue = $(this).closest(".post").data().id
        tweeter.addComment(commentValue, idValue)
        renderer.renderPosts(tweeter.getPosts())
    })
    $("#posts").on("click", ".delete-comment", function(){
        let idValue = $(this).closest(".post").data().id
        let commentValue = $(this).closest(".comments").data("id")
        tweeter.removeComment(idValue, commentValue)
        renderer.renderPosts(tweeter.getPosts())
    })