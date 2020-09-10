import React from 'react'
import { useRef } from 'react'
import SendButton from './SendButton';


export default function MessageForm({ label, placeholder, onSuccess }) {
    const messageInputField = useRef()

    function handleOnClick() {
        //console.log("Klickat på knapp")
        //console.log(messageInputField.current.value)
        const message = messageInputField.current.value
        const url = "https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ/messages.json"
        const data = {
            message: message
        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        }).then((response) => {
            console.log("Data har skickats")
            onSuccess()
            messageInputField.current.value = ""
        })
    }
    return (
        <div className="form-group">
            <label>{label}</label>
            <input ref={messageInputField} type="text" className="form-control" placeholder={placeholder} />
            <SendButton handleOnClick={handleOnClick} label="Send"></SendButton>
        </div>
    )

}
