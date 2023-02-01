import React from 'react'

const SingleEvent = ({data}) => {

  const onSubmit = () => {

  }
  return (
    <div>    
        <div>
    {/* <Image src={data.image} width={500} height={300} alt={data.title}/> */}
    <h1>{data.title}</h1>
    <p>{data.description}</p>
    <form action="" onSubmit={onSubmit}>
        <label htmlFor="">Get Registered for this event</label>
        <input type="email" id='email' placeholder='Please insert your email'/>
        <button type='submit'>Submit</button>
    </form>
  </div>
  </div>
  )
}

export default SingleEvent