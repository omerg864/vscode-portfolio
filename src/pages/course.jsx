import React from 'react'

function course({ activeTab }) {
  return (
    <main>
      <div  className="underline" >
        <h1>{activeTab.title}</h1>
      </div>
      <div>
        {activeTab.description.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>
        })}
      </div>
      <div className='flex-center'>
        <img src={activeTab.certificate} alt={"certificate"} style={{width: "70%", marginLeft: "auto", marginRight: "auto"}}/>
      </div>
    </main>
  )
}

export default course