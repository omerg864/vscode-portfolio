import React from 'react'

function project({ activeTab }) {
  return (
    <main>
      <div style={{width: "100%", textAlign: "center"}}>
        <h1>{activeTab.title}</h1>
      </div>
      <div>
        {activeTab.description.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>
        })}
      </div>
      {activeTab.url && <div className='link-container'>
        <span style={{fontWeight: "bold"}}>Link: </span>
        <a href={activeTab.url} className='string-python' target="_blank" rel="noreferrer"> {activeTab.url}</a>
      </div>}
        <div className='project-images'>
          {activeTab.images.map((image, index) => {
            return <img key={index} src={image} alt={"screenshot"} style={{width: "70%", marginLeft: "auto", marginRight: "auto"}}/>
          })}
        </div>
      <div>
        <h2>Features</h2>
        <ul>
          {activeTab.features.map((feature, index) => {
            return <li key={index}>{feature}</li>
          })}
        </ul>
      </div>
    </main>
  )
}

export default project