import React from 'react'
import Tab from './Tab'
import Path from './Path';
import { createPath } from '../functions/functions';

function TabsBar({tabs, setTabs, setActiveTab, activeTab}) {

  const closeTab = (e, id) => {
    e.stopPropagation();
    if (activeTab.id === id) {
      setActiveTab(tabs.length > 1 ? tabs.find(tab => tab.id !== id) : {});
    }
    setTabs(tabs.filter(tab => tab.id !== id));
  }

  const openTab = (e, id) => {
    e.stopPropagation();
    setActiveTab(tabs.find(tab => tab.id === id));
  }
  return (
    <div className='tabs-bar'>
        <div className='tabs'>
          {tabs.map((tab) => {
            return <Tab onClick={openTab} close={closeTab} temp={tab.temp} key={tab.id} active={tab.id === activeTab.id} name={tab.name} id={tab.id}x icon={tab.icon ? <img alt={tab.icon.alt} className='file-icon' src={tab.icon.src}/> : false}/>
          })}
        </div>
        <div className='src-bar'>
          <Path path={createPath(activeTab, false)} activeTab={activeTab} />
        </div>
    </div>
  )
}

export default TabsBar