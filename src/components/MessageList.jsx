import React from 'react'
import MessageItem from "./MessageItem"
import styled from "styled-components";

const List = styled.h5`
color:blueviolet;

`


export default function MessageList({ messages }) {

    const messageArray = Object.entries(messages)


    return (
        <List className="list-group">
            {messageArray.reverse().map(item => {
                const key = item[0]
                const messageData = item[1]
                const message = messageData.message
                return <MessageItem key={key} message={message} />
            })}

        </List>
    )
}
