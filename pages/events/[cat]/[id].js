import Image from 'next/image'
import React from 'react'
import SingleEvent from '../../../src/component/events/single-event'

const EventPage = ({data}) => {
  return (
    <SingleEvent data={data}/>

  )
}

export default EventPage

export async function getStaticPaths() {
  const data = await import('/data/data.json');
  const allEvents = data.allEvents;

  const allPaths = allEvents.map((path) => {
    return {
      params:{
        cat: path.city,
        id:path.id
      }
    }
  })

  return {
    paths: allPaths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context.params.id
  const { allEvents } = await import('/data/data.json');
  const eventData = allEvents.filter((ev) => id === ev.id)[0]

  return {
    props: {data: eventData}
  }
}