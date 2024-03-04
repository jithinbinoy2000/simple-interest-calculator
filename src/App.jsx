
import { TextField,Button, Stack} from '@mui/material'
import './App.css'
import {useEffect, useState} from 'react'
function App() {
  const buttons ={width:"50%",backgroundColor:"#ff6600", fontFamily:"monospace",}
  const adjwidth={width:"400px"}
  //------ state using hook-------
//hook for Interest
const [interest,setinterest] = useState("0")
//hook for principle 
const[principle,setprinciple] = useState("")
//hook for rate
const[rate,setrate] = useState("")
//hook for year
const [year,setyear] = useState("")
//error message hook
const[validPrinciple,setValidPrinciple]=useState(true)
const[validRate,setValidRate]=useState(true)
const[validYear,setValidYear]=useState(true)
const[validvalue,setValidvalue]=useState(true)
// -------validation function ------
const validateUserInputs=(e)=>{
const {name,value}=e.target //destructure the event and assign value from event.target
//validating using regExp and match method and return boolean value if null
if(!!value.match(/^[0-9]*.?[0-9]+$/)){
  //assign value according to name
  if(name==='principle'){
    setprinciple(value)
    setValidPrinciple(true)
  }
  else if (name==='rate') {
    setrate(value)
    setValidRate(true)
  }
  else if(name==='year'){
    setyear(value)
    setValidYear(true)
  }
}
else{
  // setting  valid as false according to the name
  if(name==='principle'){
    setprinciple(value)
    setValidPrinciple(false)
  }
  else if (name==='rate') {
    setrate(value)
    setValidRate(false)
  }
  else if(name==='year'){
    setyear(value)
    setValidYear(false)
  }
}
}
// function to check the input field is empty and return boolean values
useEffect(()=>{principle!==" "&&rate!==""&&year!==""?setValidvalue(false):setValidvalue(true)}),[validateUserInputs]
// function to reset --set all the states into zero
const reset =()=>{
  setprinciple("")
  setrate("")
  setyear("")
setinterest(0)}
  // calclation 
 const calculatehandle=(e)=>{
    //prevent event cancel 
    e.preventDefault()
    setinterest((principle*rate*year)/100)
  }

  return (
// parent element
<div style={{width:"100%",height:"100vh"}} className='d-flex justify-content-center align-items-center'>

  {/* box condainer */}

  <div style={{ width:"600px"}} className="condainer d-flex flex-column align-items-center p-5">
     <h3 className='font'>Simple Interest Calculator</h3>
     <p className='font'>Calcluate your simple Interest Easily</p>

    {/* dispalay interest amount */}
     <div style={{width:"90%",height:'150px'} }className="shadowstyle d-flex flex-column align-items-center justify-content-center">
       <h1 className='font fw-bolder'>	&#8377; {interest}</h1>

       <p className='font fw-bolder'>Total Simple Interest</p>
     </div>

     {/* form */}
    <form action="" className='mt-5'>
      <div className="mb-3 W-100">

        {/* principle amount */}
      <TextField style={adjwidth} id="standard-basic-principle" label="Principle Amount (&#8377;)" variant="standard"
      name ='principle' value = {principle || ""} onChange={(e)=>validateUserInputs(e)}/> 
       {!validPrinciple&&<div className="mt-1 text-danger">* Invalid Principle Amount /incomplete value</div>}
      </div>
      <div className="mb-3 W-100">

        {/* rate */}
      <TextField style={adjwidth} id="standard-basic-rate" label="Rate of Interest (%)" variant="standard" 
      name ='rate' value = {rate ||""} onChange={(e)=>validateUserInputs(e)} />
      {!validRate&&<div className=" text-danger">* Invalid Rate /incomplete value</div>}
      </div>
      <div className="mb-2 W-100">

        {/* year */}
      <TextField style={adjwidth} id="standard-basic-time" label="Time period (Yr)" variant="standard"
      name ='year' value = {year ||""} onChange={(e)=>validateUserInputs(e)} />
      </div>      
      {!validYear&&<div className="mb-2 text-danger">* Invalid year /incomplete value</div>}

<Stack direction={"row"} spacing={2}>
        <Button type='submit' variant="contained" style={buttons} disabled={!validvalue&&validPrinciple&&validRate&&validYear?false:true} onClick={(e)=>calculatehandle(e) }>Calcluate</Button>
        <Button variant="contained" style={buttons}onClick={reset}>Reset</Button>
</Stack>
    </form>
  </div>
  {/* end of box condainer */}
</div>
// end of parent element
  )
}
export default App