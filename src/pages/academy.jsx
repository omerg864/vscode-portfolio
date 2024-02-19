import React from 'react';
import { numberRow } from '../functions/functions';

function academy({ activeTab }) {
  return (
    <main>
        {numberRow(1, <br></br>)}
        {numberRow(2, <div className='flex-center'><span className='const'>{activeTab.title}</span></div>, {display: 'flex', width: "100%"})}
        {numberRow(3, <span>Location: {activeTab.location}</span>)}
        {numberRow(4, <span><span>Start date: {activeTab.start_date}</span></span>)}
        {numberRow(5, <span><span>{activeTab.ongoing ? "Expected end date: ": "End date: "} {activeTab.end_date} </span></span>)}
        {activeTab.description.map((desc, index) => numberRow(6 + index, <div><span className='comment'>{activeTab.description}</span></div>, {display: 'flex', width: "100%"}))}
        {numberRow(6 + activeTab.description.length, <br></br>)}
    </main>
  )
}

export default academy