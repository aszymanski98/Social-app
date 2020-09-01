import React from 'react';

import S from './styles/NewPost';

const NewPost= (props) => {


    return (
        <S.Form>
            <S.Textarea placeholder="Add post"></S.Textarea>
        </S.Form>
    )
}

export default NewPost;