import React from 'react';
import { images } from '../../assest/images';

export default function ChatBubbleComponent(props) {
    return (
        <div className='blog-bubble-container'>
            <img src={images.profilePic} />
            <div className={props.class ? "blog-bubble " + props.class : 'blog-bubble'} style={{ backgroundColor: props.color }}>
                <p>{props.chatText}</p>
            </div>
        </div>
        // <div class="chat-bubble" style={{ "--color": props.color }}>
        //     <div class="bubble-content">
        //         {props.chatText}
        //     </div>
        // </div>
    )

}