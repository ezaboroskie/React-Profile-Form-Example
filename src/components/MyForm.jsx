
import React, {useState} from 'react'
import '../styles.css'

const MyForm = ({updateProfList, profList})=>{
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [bDate, setBDate] = useState('')
    const [profPic, setProfPic] = useState('')
  
    const handleFNameChange = (e)=>{
        setFName(e.target.value)
    }
    const handleLNameChange = (e)=>{
        setLName(e.target.value)
    }
    const handleDateChange = (e)=>{
        setBDate(e.target.value)
    }
    const fetchPic= async()=>{
        const response = await fetch('https://randomfox.ca/floof/')
        const data = await response.json()
        setProfPic(data.image)
    }
    const handleSubmitProfile = ()=>{
        const newProfile = {
            fName: fName, 
            lName: lName, 
            bDate: bDate, 
            profPic: profPic
        }
        updateProfList([...profList, newProfile]);
        setFName('')
        setLName('')
        setBDate('')
        setProfPic('')
    }

    return(
        <>
            <div className='form-container'>
                <input onChange={(e)=>handleFNameChange(e)} name='fName' value={fName} placeholder='First Name' autoComplete='off'></input>
                <input onChange={(e)=>handleLNameChange(e)} name='lName' value={lName} placeholder='Last Name' autoComplete='off'></input>
                <input onChange={(e)=>handleDateChange(e)} name='bDate' value={bDate} placeholder='Birth Year' autoComplete='off'></input>
                <button onClick={fetchPic}>Generate a Profile Picture</button>
                <img className='prof-pic' src={profPic}></img>
                <button onClick={handleSubmitProfile}>Submit Profile</button>
            </div>
        </>
    )
}

export default MyForm