import React from 'react'
import Link from 'next/link'

const Events = ({data}) => {

    const page = data.map(ev =>
        <Link key={ev.id} href={`/events/${ev.id}`}>
          {/* <Image src={ev.image} alt={ev.title} height={100} width={300} /> */}
          <h2>{ev.title}</h2>
        </Link>
      )
    
      return (
        <div>
          <h1>Event Page</h1>
          {page}
        </div>
      )
}

export default Events
 