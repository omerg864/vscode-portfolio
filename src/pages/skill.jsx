import React from 'react'

function skill({ activeTab }) {
  return (
    <main>
        <img style={{width: "100%"}} src={activeTab.image} alt={activeTab.icon.alt} />
    </main>
  )
}

export default skill