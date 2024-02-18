import React from 'react';
import { numberRow } from '../functions/functions';


function contact() {
  return (
    <main>
        {numberRow(1, <br></br>)}
        {numberRow(1, <span className='comment'>// Contact Information</span>)}
        {numberRow(3, <span><span className='function-def-python'>const </span> <span className='const'>Email </span>=<span className='string-python'> "Omerg863@gmail.com"</span></span>)}
        {numberRow(4, <span><span className='function-def-python'>const </span> <span className='const'>GitHub </span>= <a target="_blank" rel='noreferrer' href='https://github.com/omerg864' className='string-python'>"https://github.com/omerg864"</a></span>)}
        {numberRow(5, <span><span className='function-def-python'>const </span> <span className='const'>LinkedIn </span>= <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/omer-gaizinger-212005216/' className='string-python'>"https://www.linkedin.com/in/omer-gaizinger-212005216/"</a></span>)}
        {numberRow(6, <span><span className='function-def-python'>const </span> <span className='const'>Phone </span>=<span className='string-python'> "+972-54-726-6693"</span></span>)}
        {numberRow(7, <br></br>)}
    </main>
  )
}

export default contact