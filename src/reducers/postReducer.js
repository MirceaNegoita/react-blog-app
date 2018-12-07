export default function reducer(state = {
    title : null,
    subtitle : null,
    description : null,
}, action){
    switch (action.type) {
        case 'SET_POST_TITLE':{
            state = {
                ...state,
                title:action.payload
            };
            break;
        }
        case 'SET_POST_SUBTITLE':{
            state = {
                ...state,
                subtitle:action.payload
            };
            break;
        }
        case 'SET_POST_DESCRIPTION':{
            state = {
                ...state,
                description:action.payload
            };
            break;
        }
            
        default:{
            return state;
        }
            
    }
}