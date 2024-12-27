import { useEffect } from 'react'
import {messaging} from './firebase'
import { getMessaging, getToken } from "firebase/messaging";
import './App.css'
//const messaging = getMessaging();

function App() {

  async function requestPermission() {
    console.log('Requesting permission...');
   const permission= await Notification.requestPermission()
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        const token=await getToken(messaging,{ vapidKey: 'BGKxiMXLhbfjmodXbKoSmEAW4akchop8yNkaURN2R2bWobKYNXNGiWqSliE7IeOIfWczmcDii3AELe3Fk57jq1U' })
        console.log(token)
      }else if(permission === 'denied'){
          alert("you denied the notification permission")
      }


    }    
  useEffect(()=>{
    requestPermission()
  },[])
  

  return (
    <>
      <h2>Push Notification</h2>
    </>
  )
}

export default App
