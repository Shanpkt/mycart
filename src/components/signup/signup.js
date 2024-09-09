import React ,  {useState} from 'react'

function Signup() {
    const [data,setData]=useState({})
    const [toggle,setToggle]=useState(false)

    const handel=(e)=>{
    const {name,value}=e.target
    setData({...data,[name]:value})
    }
    const ShowHide=()=>{
      setToggle(!toggle)
    }

    const submit=()=>{
     alert(data.Username)
    }
  return (
    <div>
        <div>
            <label>Name</label>
         <input type='text' name='Username' onChange={handel} />
         </div>
         <div>
            <label>Email</label>
         <input type='text' name='Email' onChange={handel} />
         </div>
         <div>
            <label>Phone</label>
         <input type='number' name='Phone' onChange={handel} />
         </div>
        <div>
            <label>Password</label>
        <input type={toggle?"password":"text"} name='password' onChange={handel} />
        <h2 onClick={ShowHide}>**</h2>
        </div>
        <button onClick={submit}>Signup</button>
        
    </div>
  )
}

export default Signup