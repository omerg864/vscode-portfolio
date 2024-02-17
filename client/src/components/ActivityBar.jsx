import React, { useState } from 'react'
import { TfiFiles } from "react-icons/tfi";
import ActivityBarIcon from './ActivityBarIcon';
import SearchIcon from '@mui/icons-material/Search';


function ActivityBar() {

  const [active, setActive] = useState('explorer');

  const handleClick = (e, id) => {
    setActive(id);
  }
  return (
    <div className='activity'>
      <ActivityBarIcon id="explorer" active={active} onClick={handleClick}  
      icon={<TfiFiles className={active === 'explorer' ? 'activity-bar-icon-selected' : 'activity-bar-icon'} />}/>
      <ActivityBarIcon id="search" active={active} onClick={handleClick}  
      icon={<SearchIcon style={{ transform: 'scaleX(-1)'}} className={active === 'search' ? 'activity-bar-icon-selected' : 'activity-bar-icon'} />}/>
    </div>
  )
}

export default ActivityBar