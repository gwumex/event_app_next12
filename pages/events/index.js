import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const EventsPage = ({ data }) => {

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


export default EventsPage;


//client render 
export async function getStaticProps() {
  const { events_categories } = await import('/data/data.json')
  return {
    props: {
      data: events_categories
    }
  }
}


