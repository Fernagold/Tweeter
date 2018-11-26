const Tweeter = function () {
    let posts = [
    {
        text: "First post!",
        id: "p1",
        comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" }
        ]
    },
    {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
            { id: "c4", text: "Don't wory second poster, you'll be first one day." },
            { id: "c5", text: "Yeah, believe in yourself!" },
            { id: "c6", text: "Haha second place what a joke." }
        ]
    }
]
    const getPost = function() {
    return console.log(posts)
}
    const addPost = function(text) {
        let idInit = 1
        for(add in posts){
           add = idInit++
        }
           posts.push({text: text, id: "p" + idInit, comments: []})
           return addPost
       }
        
        
    
    const removePost = function(index){
        posts.splice(index, 1)
        return removePost
               
    }
    return {
        getPost: getPost,
        addPost: addPost,
        removePost: removePost,
    }
}
const result = Tweeter()
result.addPost("Tweet test")
result.getPost()
result.removePost(2)
result.getPost()