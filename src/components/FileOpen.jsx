import React from 'react'
import IconButton from './IconButton';
import { MdClose } from "react-icons/md";


function FileOpen({name, id, icon, onClick, close, path}) {
  return (
    <div className='file' >
        <IconButton icon={<MdClose/>} onClick={(e) => close(e, id)} />
        <div className='file-open-info' onClick={(e) => onClick(e, id)}>
            {icon && icon}
            <span style={{fontSize: "0.9rem"}}>{name}</span>
            {path && <small className='path-small'>{path.join('/')}</small>}
        </div>
    </div>
  )
}

export default FileOpen