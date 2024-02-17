import React from 'react'
import useSingleAndDoubleClick from '../hooks/ClickHook';

function File({name, id, icon, onClick, component, onDoubleClick}) {

  const clickFile = useSingleAndDoubleClick(onClick, onDoubleClick, {name, id, icon, component});

  return (
    <div className='file' onClick={clickFile} >
        {icon && <img alt={icon.alt} className='file-icon' src={icon.src}/>}
        <span style={{fontSize: "0.9rem"}}>{name}</span>
    </div>
  )
}

export default File