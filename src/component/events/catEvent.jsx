import React from 'react'
import Link from 'next/link'

const CatEvent = ({data, pageName}) => {
  return (
    <div>
    <h1>Events in {pageName}</h1>
    {data.map((ev)=> 
    (<Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
    {/* <Image width={200} height={100} alt={ev.title} src={ev.image}/> */}
        <h2>{ev.title}</h2>
        <p>{ev.description}</p>
    </Link>
    )
    )}
  </div>
  )
}

export default CatEvent