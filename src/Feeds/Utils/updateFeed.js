import axios from 'axios';

const updateFeed = (option, date, posts, setPosts, axiosConfig) => {
    axios.post('https://akademia108.pl/api/social-app/post/newer-then', {
        "date": `${date}`
    },
        axiosConfig)

        .then((req) => {
            if (option === 'all') {
                const newArray = req.data;
                setPosts(newArray);
            } else {
                const newPosts = req.data;
                setPosts(newPosts.concat(posts))
            }
        }

        ).catch((error) => {
            console.error(error);
        })
}

export default updateFeed;