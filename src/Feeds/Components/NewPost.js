import React from 'react';

import { useForm } from "react-hook-form";
import axios from 'axios';

import S from '../../styles/NewPost';
import Form from '../../styles/Forms';

import updateFeed from '../Utils/updateFeed';

const NewPost = (props) => {

    const { register, handleSubmit, errors} = useForm();

    const onSubmit = (data, e) => {
        axios.post('https://akademia108.pl/api/social-app/post/add', 
        {"content": `${data.post}`},
            props.axiosConfig)
            .then((req) => {

                updateFeed('one', props.posts[0].created_at, props.posts, props.setPosts, props.axiosConfig);

                e.target.reset();
            }

            ).catch((error) => {
                console.error(error);
            })
    }

    return (
        <S.Form onSubmit={handleSubmit(onSubmit)}>
            <S.Textarea name='post' placeholder="Add post" ref={register({
                required: true,
            })}></S.Textarea>
            {errors.post && errors.post.type === "required" && <Form.Errors style={{'color': '#b71c1c'}}> &#9888; Post can not be empty</Form.Errors>}

            <S.AddButton>Add Post</S.AddButton>
        </S.Form>
    )
}

export default NewPost;