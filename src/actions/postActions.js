export function setPostTitle(title){
    return{
        type:"SET_POST_TITLE",
        payload:title
    }
}

export function setPostSubtitle(subtitle){
    return{
        type:"SET_POST_SUBTITLE",
        payload:subtitle
    }
}

export function setPostDescription(description){
    return{
        type:"SET_POST_DESCRIPTION",
        payload:description
    }
}

export function setPosts(value){
    return {
        type:"SET_POSTS",
        payload: value
    }
}

export function setPost(value){
    return {
        type:"SET_POST",
        payload: value
    }
}