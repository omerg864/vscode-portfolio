import React, { useState } from 'react'
import { TfiFiles } from "react-icons/tfi";
import ActivityBarIcon from './ActivityBarIcon';
import SearchIcon from '@mui/icons-material/Search';


function ActivityBar({sidebar, setSidebar}) {

  const handleClick = (e, id) => {
    e.preventDefault();
    if (id === sidebar) {
      setSidebar('');
    } else {
      setSidebar(id);
    }
  }
  return (
    <div className='activity'>
      <ActivityBarIcon id="explorer" active={sidebar} onClick={handleClick}  
      icon={<TfiFiles className={sidebar === 'explorer' ? 'activity-bar-icon-selected' : 'activity-bar-icon'} />}/>
      <ActivityBarIcon id="search" active={sidebar} onClick={handleClick}  
      icon={<SearchIcon style={{ transform: 'scaleX(-1)'}} className={sidebar === 'search' ? 'activity-bar-icon-selected' : 'activity-bar-icon'} />}/>
    </div>
  )
}

export default ActivityBar