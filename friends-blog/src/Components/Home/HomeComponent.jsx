import React, { useEffect } from 'react';
import ChatBubbleComponent from '../chatbubble/ChatBubbleComponent';
import { useState } from 'react';
import { images } from '../../assest/images';


export default function HomeComponent() {
    const dummychatText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
    // const dummychatText = 'hey, how are you?'
    return (

        <div className="blog-box" >
            <div className="blog-box-body">
                <ChatBubbleComponent chatText="Hello, how can I help you?" color='#f1f0f0' class='me'/>
                <ChatBubbleComponent chatText="I have a question about your product." color='#a2f9fd' class='you' />
                <ChatBubbleComponent chatText="Sure, what's your question?" color='#f1f0f0' class='me' />
                <ChatBubbleComponent chatText="I have a question about your product." color='#a2f9fd' class='you' />
                <ChatBubbleComponent chatText="Sure, what's your question?" color='#f1f0f0' class='me' />
                <ChatBubbleComponent chatText="I have a question about your product." color='#a2f9fd' class='you' />
                <ChatBubbleComponent chatText="Sure, what's your question?" color='#f1f0f0' class='me' />
                <ChatBubbleComponent chatText="I have a question about your product." color='#a2f9fd' class='you' />
                <ChatBubbleComponent chatText="Sure, what's your question?" color='#f1f0f0' class='me' />
                <ChatBubbleComponent chatText="I have a question about your product." color='#a2f9fd' class='you' />
                <ChatBubbleComponent chatText="Sure, what's your question?" color='#f1f0f0' class='me' />
            </div>
            <div className="blog-box-footer">
                <input type="text" placeholder="Enter your message..." />
                <button >Send</button>
            </div>
        </div>


    )

}