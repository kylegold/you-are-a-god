import React, {useState} from "react"
import axios from "axios";
import "./style.css"
import { PromiseProvider } from "mongoose";


const MessageInput = (props) => {
  const [publicMessage, setPublicMessage] = useState("");
  const [publicName, setPublicName] = useState("");
  const [publicEmail, setPublicEmail] = useState("");
  // const [messageCount, setMessageCount] = useState()
  // const PublicMessages = () => {
  //   axios.get("/message/messages")
  //   .then(res => {
  //     const messages = res.data;
  //     setMessageCount(messages)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // }

  // useEffect(() => {
  //   PublicMessages()
  // }, [])


  const clearState = () => {
    setPublicName('');
      setPublicEmail('');
      setPublicMessage('');
}

  const handlePublicUserEmail= (e) => {
    e.preventDefault()
    const value = e.target.value
    const name = e.target.name
    console.log(value, name)
    setPublicEmail(value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (publicEmail){
    axios.post('/message/messages', {email: publicEmail}).then(res => {
      e.target.reset();
      clearState()
      window.location.reload();
    })}
    else {
      console.log("need email")
    }
    
  }

  return(
    <>
    <form onSubmit={handleSubmit}>
       
       <div id="inputDiv">
         {/* <input name="publicName" onChange={handlePublicUserName} placeholder="Name"/> <br /> */}
       <input name="hiddenEmail" onChange={handlePublicUserEmail} placeholder="Email"/>
       {/* <textarea name="publicMessage" onChange={handlePublicMessageInput} placeholder="Ask a question or leave a comment..." onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Enter a comment..."}/> */}
       {/* <br /> */}
       </div> 
       <br />
       <div id="submitQuestion"><button class="questionButton" type="submit" >Submit</button></div>
    </form>
  </>
  )
}

export default MessageInput