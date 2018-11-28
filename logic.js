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
    let idInit = 2
    let commentIdInit = 6
    const idPostIndex = function(indexString){
        for(let i in posts){
            if(posts[i].id == indexString){
                return i;
            }
        }
        return -1;
    }
    const idPostCommentIndex = function(CommentString, index){
        if(index == -1){
            return -1;
        }
        for(let i in posts[index].comments){
             if(posts[index].comments[i].id == CommentString){
                 return i
            }
         }
            return -1;
        }
        
    const getPost = function() {
    return console.log(posts)
}
    const addPost = function(text) {
        idInit ++   
        
        posts.push({text: text, id: "p" + idInit, comments: []})
        return addPost
       }
        
        
    
    const removePost = function(IdIndexNumber){
        let index = idPostIndex(IdIndexNumber);
        if(index != -1){
        posts.splice(index, 1)
        }
        else{
        return console.log("The id is not found")
        }          
    }
    const addComment = function(text, com){
        commentIdInit++
        let index = idPostIndex(com)
        if(index != -1){                
        posts[index].comments.push({id: "c" + commentIdInit, text: text})}
        else{
            console.log("This Post Id doesn't exist")
        }
        return addComment
    }
    const removeComment = function(pString, cString){
        let indexPost = idPostIndex(pString)
        let indexComment = idPostCommentIndex(cString, indexPost)
        if(indexPost != -1 && indexComment != -1){
        posts[indexPost].comments.splice(indexComment, 1)
    }   else {
        console.log("Post comment Id not found")
    }
    
        return removeComment
    }
    return {
        getPost: getPost,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }
}
const result = Tweeter()

