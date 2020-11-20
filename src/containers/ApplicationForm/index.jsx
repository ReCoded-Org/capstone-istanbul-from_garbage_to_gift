import React, { useState, useEffect }  from "react";
import PostSection from "../../components/ApplactionPagePostSection";
import PostSectionStep1 from "../../components/ApplicationPageStep1";
import Steps from "../../components/Steps";
import db from "../../firebaseConfig";
import "./index.css"

export default function ApplicationPage() {
    const [post, setPost] = useState("")
    const [steps, setSteps] = useState("stepOne")
    const [meet, setMeet] = useState(false);


    const fetchData = async ()=>{
        const res = await db.collection('recieverPost').doc('ETXSQQswYmM2vx0qODfr').get()
        const data = res.data()
        console.log(data);
        setPost(data)
    }
    const handleSteps = (e) => setSteps ("stepTwo")
    const handleMeetSteps = (e) => setMeet (!meet)
    const handleStep1 = (e) => {
        setSteps ("stepOne")
        setMeet (false)
    }

    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div>
          <PostSection {...post}/>
          <Steps meet={meet} steps={steps} handleStep1={handleStep1}/>
          {steps === "stepOne" && <PostSectionStep1 {...post} meet={meet} handleSteps={handleSteps}  handleMeetSteps={handleMeetSteps}/>}
        </div>
    
    );
  }
  