import axios from 'axios';

const DeletePost = (event, getPosts, axiosConfig) => {
    axios.post('https://akademia108.pl/api/social-app/post/delete', {
        "post_id": `${event.currentTarget.id}`
    },
        axiosConfig)
        .then((req) => {
            getPosts();
        }

        ).catch((error) => {
            console.error(error);
        })
}

export default DeletePost;