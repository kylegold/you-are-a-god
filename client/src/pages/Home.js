import React, {Suspense, useEffect, useState} from "react";
import "./style.css"
import MessageInput from "../components/MessageInput"
import LearnMore from "../components/LearnMore"
import PopupModal from "../components/PopupModal"
// import PublicMessage from "../components/PublicMessage"
import axios from "axios"
const PublicMessage = React.lazy(() => import("../components/PublicMessage"))

const Home = () => {
  const [messageState, setMessageState] = useState()
  const [messageCount, setMessageCount] = useState()
  // const [randomMessage, setRandomMessage] = useState()
  const PublicMessages = () => {
    axios.get("/message/messages")
    .then(res => {
      if (res.data) {
      const messages = res.data;
      console.log(messages.reverse())
      setMessageState(messages.reverse())
      setMessageCount(messages.length)
      // setRandomMessage(messages[Math.floor(Math.random()*messages.length)].message)
      // console.log(randomMessage)
      }
    })
    .catch(error => {
      console.log(error)
    })
  }
  

  useEffect(() => {
    PublicMessages()
  }, [])
  return (
   <>
  <LearnMore />
  
            {/* <MessageInput messageCount={messageCount}/>
            <Suspense fallback="Loading">
            <PublicMessage messageState={messageState}/>
            </Suspense>           */}
   </>
  )
}

export default Home;