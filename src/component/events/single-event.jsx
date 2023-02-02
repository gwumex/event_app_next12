import { useRouter } from 'next/router';
import React, { useRef } from 'react'

const SingleEvent = ({data}) => {
    const inputEmail = useRef();
    const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value
    const eventId = router?.query.id;

    try {
      const response = await fetch('/api/email-registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: emailValue, eventId})
    });

      if(!response.ok){
          throw new Error(`Error: ${response}`)
      }
      const data = await response.json();
      console.log("POST", data)

    } catch (error) {
      console.log('ERROR', error);
    }
  }


  return (
    <div>    
        <div>
    {/* <Image src={data.image} width={500} height={300} alt={data.title}/> */}
    <h1>{data.title}</h1>
    <p>{data.description}</p>
    <form onSubmit={onSubmit}>
        <label htmlFor="">Get Registered for this event</label>
        <input ref={inputEmail} type="email" id='email' placeholder='Please insert your email'/>
        <button type='submit'>Submit</button>
    </form>
  </div>
  </div>
  )
}

export default SingleEvent