import React, { useState } from 'react'
import styles from '@/styles/contact.module.css'
const Contact = () => {
  const [inputData, setInputData] = useState({
    name: "",
    phone: "",
    desc: "",
    email: ""
  })

  const handelSubmit = (e) => {
    e.preventDefault();
    if(!inputData.name && !inputData.email){
      alert("please fill your form correctly")
    }
    else{
      const data = { ...inputData }
    fetch("http://localhost:3000/api/contactpost/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)

    })
      .then((res) => res.text())
      .then((val) => {
        console.log("Success", val)
        setInputData({
            name: "",
            phone: "",
            desc: "",
            email: ""
          })

      })
      .catch((e) => console.error("Error".e))
    }


  }

  let name, value;
  const handleInput = (e) => {
    e.preventDefault();
    name = e.target.name;
    value = e.target.value;
    setInputData({ ...inputData, [name]: value })
  }
  return (
    <div className='contact'>
      <div className={styles.container}>
        <form method='post' className="row g-3" onSubmit={handelSubmit} >
        <h2>Contact us</h2>
          <div className={styles.mb3}>
            <input type="text" name='name' value={inputData.name} onChange={handleInput} placeholder='Enter your name' className="form-control" id="name" />
          </div>
          <div className={styles.mb3}>
            <input type="text" name='phone' value={inputData.phone} onChange={handleInput} placeholder='Enter your Phn no:' className="form-control" id="phone" />
          </div>
          <div className={styles.mb3}>
            <textarea type="text" name='desc' value={inputData.desc} onChange={handleInput} placeholder='write your concern..' className={styles.txtarea} id="desc" rows="3"></textarea>
          </div>
          <div className={styles.mb3}>
            <input type="email" name='email' value={inputData.email} onChange={handleInput} placeholder='Enter your email' className="form-control" id="email" />
          </div>
          <div className={styles.mb3}>
            <button type="submit" className="btn btn-primary">Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
