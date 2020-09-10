import React from "react";


import MessageForm from "./components/MessageForm"
import MessageList from "./components/MessageList"
import { useState, useEffect } from 'react'

import styled from "styled-components";


const Header = styled.h1`
  color: blueviolet;
  font-size: 3rem;
  margin:2em;
`;


//
//const chatRoomData = {
//name: "The Local Lounge",
//messages: {
//'dsasdas1':{
//  'message': 'Hej 1',
//},
//'dsasdas2': {
//  'message': 'Hej 2',
//}, 
//'dsasdas3': {
//  'message': 'Hej 3',
//}, 
//'dsasdas4': {
//  'message': 'Hej 4',
// }, 
//'dsasdas5': {
//  'message': 'Hej 5',
// }
// }
// }


function App() {

  const [counter, setCounter] = useState(0)
  const [chatRoomData, setChatRoomData] = useState({})
  


  function handleGetChatRoom() {
    const url = "https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ.json"
    fetch(url)
      .then((response) => {
        console.log("2")
        return response.json()
      })
      .then(data => {
        console.log("4")
        setChatRoomData(data)
      })
    console.log("3")
  }
  useEffect(() => {
    handleGetChatRoom()
  }, [])

  function handleOnClick() {
    setCounter(counter + 1)

  }

  return (



    <div className="container">

      <Header onClick={handleOnClick}> {chatRoomData.name}-{counter} </Header>




      <div className="row">
        <div className="col-md-12">
          <MessageForm onSuccess={handleGetChatRoom} label="Enter your message" placeholder="Ditt meddelande..." />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {chatRoomData.messages ?
            <MessageList messages={chatRoomData.messages} /> :
            ""
          }

        </div>
      </div>
    </div>
  );
}

export default App;
