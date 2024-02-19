import React from 'react'

function IconButton({ icon, onClick, footer, text="" }) {
  return (
    <div>
        <button className={`icon-button${ footer ? "-footer" : ""}`} onClick={onClick}>
            {icon}
            {text && <span>{text}</span>}
        </button>
    </div>
  )
}

export default IconButton