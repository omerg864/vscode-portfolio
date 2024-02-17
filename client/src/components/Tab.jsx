import React from 'react';
import IconButton from './IconButton';
import { MdClose } from "react-icons/md";

function Tab({name, id, close, onClick, icon, active, temp}) {
  return (
    <div className={active ? 'active-tab' : 'tab'}>
        <div className='tab-info' onClick={(e) => onClick(e, id)}>
            {icon && icon}
            {temp ? <i>{name}</i> :<span >{name}</span>}
        </div>
        <IconButton icon={<MdClose />} onClick={(e) => close(e, id)}/>
    </div>
  )
}

export default Tab