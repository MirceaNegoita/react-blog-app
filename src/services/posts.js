const posts =[
    {
        id : 1,
        title : "Title 1",
        subtitle : "Subtitle 1",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in pharetra tellus. Nunc in massa vitae eros consectetur blandit. Phasellus eget gravida ligula, eu suscipit libero. Integer aliquam tempor massa, laoreet pellentesque orci varius sed. Cras consectetur in dolor a viverra. Vivamus sodales urna ut venenatis commodo. Sed dapibus nisl sed augue condimentum aliquet. Suspendisse dignissim dui in risus finibus tempus. Aliquam accumsan tempor rutrum. Donec eu diam sed nisl interdum luctus quis at turpis. Aliquam velit ligula, accumsan quis purus a, vestibulum fringilla massa. Maecenas fermentum orci ac neque finibus varius. Praesent mollis id velit mollis consectetur. Donec tellus libero, condimentum sit amet ultrices at,fermentum non est. Nunc quis dui sed sem mollis tempus. Sed sed libero ac nisl mollis facilisis."
    },
    {
        id : 2,
        title : "Title 2",
        subtitle : "Subtitle 2",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in pharetra tellus. Nunc in massa vitae eros consectetur blandit. Phasellus eget gravida ligula, eu suscipit libero. Integer aliquam tempor massa, laoreet pellentesque orci varius sed. Cras consectetur in dolor a viverra. Vivamus sodales urna ut venenatis commodo. Sed dapibus nisl sed augue condimentum aliquet. Suspendisse dignissim dui in risus finibus tempus. Aliquam accumsan tempor rutrum. Donec eu diam sed nisl interdum luctus quis at turpis. Aliquam velit ligula, accumsan quis purus a, vestibulum fringilla massa. Maecenas fermentum orci ac neque finibus varius. Praesent mollis id velit mollis consectetur. Donec tellus libero, condimentum sit amet ultrices at,fermentum non est. Nunc quis dui sed sem mollis tempus. Sed sed libero ac nisl mollis facilisis."
    },
    {
        id : 3,
        title : "Title 3",
        subtitle : "Subtitle 3",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in pharetra tellus. Nunc in massa vitae eros consectetur blandit. Phasellus eget gravida ligula, eu suscipit libero. Integer aliquam tempor massa, laoreet pellentesque orci varius sed. Cras consectetur in dolor a viverra. Vivamus sodales urna ut venenatis commodo. Sed dapibus nisl sed augue condimentum aliquet. Suspendisse dignissim dui in risus finibus tempus. Aliquam accumsan tempor rutrum. Donec eu diam sed nisl interdum luctus quis at turpis. Aliquam velit ligula, accumsan quis purus a, vestibulum fringilla massa. Maecenas fermentum orci ac neque finibus varius. Praesent mollis id velit mollis consectetur. Donec tellus libero, condimentum sit amet ultrices at,fermentum non est. Nunc quis dui sed sem mollis tempus. Sed sed libero ac nisl mollis facilisis."
    }
];

const post = {
    id : 1,
    title : "Title 1",
    subtitle : "Subtitle 2",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in pharetra tellus. Nunc in massa vitae eros consectetur blandit. Phasellus eget gravida ligula, eu suscipit libero. Integer aliquam tempor massa, laoreet pellentesque orci varius sed. Cras consectetur in dolor a viverra. Vivamus sodales urna ut venenatis commodo. Sed dapibus nisl sed augue condimentum aliquet. Suspendisse dignissim dui in risus finibus tempus. Aliquam accumsan tempor rutrum. Donec eu diam sed nisl interdum luctus quis at turpis. Aliquam velit ligula, accumsan quis purus a, vestibulum fringilla massa. Maecenas fermentum orci ac neque finibus varius. Praesent mollis id velit mollis consectetur. Donec tellus libero, condimentum sit amet ultrices at,fermentum non est. Nunc quis dui sed sem mollis tempus. Sed sed libero ac nisl mollis facilisis."
}


export async function fetchAllPosts(){
    try{
        return posts;
    } catch(e){
        console.log(e);
    }
}

export async function fetchSinglePost(){
    try{
        return post;
    } catch(e){
        console.log(e);
    }
}