import React from 'react'
import { numberRow } from '../functions/functions'

function experience({ activeTab }) {
  return (
    <main>
      {numberRow(1, <br></br>)}
      {numberRow(2, <div className='flex-center'><span className='const'>{activeTab.title}</span></div>, {display: 'flex', width: "100%"})}
      {numberRow(3, <span>Location: {activeTab.location}</span>)}
      {numberRow(4, <span><span>Duration: {activeTab.start_date}</span> - <span>{activeTab.ongoing ? "Currently" : ""} {activeTab.end_date} </span></span>)}
      {activeTab.description.map((desc, index) => numberRow(5 + index , <div><span className='comment'>{desc}</span></div>, {display: 'flex', width: "100%"}))}
      {numberRow(5 + activeTab.description.length, <br></br>)}
    </main>
  )
}

export default experience