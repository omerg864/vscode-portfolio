import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

function Path({ path, activeTab }) {
  if (!activeTab.id){
    return <></>
  }
  return (
    <>
        {path.map((folder, index) => {
            return <span className='path-span' key={index} style={{cursor: "pointer"}}>{folder} <IoIosArrowForward /></span>
        })}
        <div style={{display: "flex", gap: "3px", alignItems: 'end'}}>
            <img alt={activeTab.icon.alt} style={{width: '1rem'}} className='file-icon' src={activeTab.icon.src}/>
            <span style={{fontWeight: "bold"}}>{activeTab.name}</span>
        </div>
    </>
  )
}

export default Path