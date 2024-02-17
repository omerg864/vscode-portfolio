import React from 'react'

function ActivityBarIcon({ icon, id, active, onClick}) {
  return (
    <div style={{display: 'flex', cursor: 'pointer'}} onClick={(e) => onClick(e, id)}>
        {active === id &&<div className='selected-icon-color'></div>}
        <div className='activity-icon-container'>
            {icon}
        </div>
    </div>
  )
}

export default ActivityBarIcon