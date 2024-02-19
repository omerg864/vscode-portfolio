import React from 'react'

function resume({ activeTab }) {
  return (
    <main>
        <div className='div-center'>
            <span>Please download the file to display</span>
            <a href={activeTab.url} download="MyExampleDoc" rel='noreferrer' target='_blank'>
                <button className="btn">Download File</button>
            </a>
        </div>
    </main>
  )
}

export default resume