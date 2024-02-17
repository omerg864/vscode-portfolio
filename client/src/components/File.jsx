import React from 'react'

function File({name, id, icon, onClick, onDoubleClick}) {
  return (
    <div className='file' onClick={(e) => onClick(e, id)} onDoubleClick={(e) => onDoubleClick(e, id)}>
        {icon && icon}
        <span style={{fontSize: "0.9rem"}}>{name}</span>
    </div>
  )
}

export default File