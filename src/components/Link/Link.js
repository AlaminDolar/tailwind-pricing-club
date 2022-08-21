import React from 'react';

const Link = (props) => {
    const { name, link } = props.r;
    return (
        <div>
            <ul className='mr-16'>
                <a href={link}>{name}</a>
            </ul>
        </div>
    );
};

export default Link;