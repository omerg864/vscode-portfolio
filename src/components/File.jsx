import React from 'react'
import useSingleAndDoubleClick from '../hooks/ClickHook';

function File({onClick, onDoubleClick, object, active}) {

  const clickFile = useSingleAndDoubleClick(onClick, onDoubleClick, object);

  return (
    <div className={`${active ? 'active-file' : "file"}`} onClick={clickFile} >
        {object.icon && <img alt={object.icon.alt} className='file-icon' src={object.icon.src}/>}
        <span style={{fontSize: "0.9rem"}}>{object.name}</span>
    </div>
  )
}

export default File