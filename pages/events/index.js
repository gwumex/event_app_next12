import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Events from '../../src/component/events/events.page';

const EventsPage = ({ data }) => {
  return(
    <Events data={data}/>
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


