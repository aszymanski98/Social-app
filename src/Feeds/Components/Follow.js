import axios from 'axios';

const Follow = (event, option, axiosConfig, getPosts) => {
    
    let leader_id = event.target.className;
    leader_id = leader_id.replace(/[^0-9]/g, ''); 

    let href = '';

    switch (option) {
        case 'follow':
            href = 'https://akademia108.pl/api/social-app/follows/follow';
            break;

        case 'unfollow':
            href = 'https://akademia108.pl/api/social-app/follows/disfollow';
            break;

        default:
            break;
    }

    axios.post(href, {
        "leader_id": { leader_id }
    },
        axiosConfig)
        .then((req) => {
            getPosts();
        }

        ).catch((error) => {
            console.error(error);
        })
}

export default Follow;