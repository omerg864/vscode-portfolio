import React from 'react'

function IconButton({ icon, onClick }) {
  return (
    <div>
        <button className='icon-button' onClick={onClick}>
            {icon}
        </button>
    </div>
  )
}

export default IconButton