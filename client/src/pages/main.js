import React from 'react'
import { numberRow } from '../functions/functions';

function main() {

  return (
    <main>
        {numberRow(1, <span className='import-python'>import <span className='import-class-python'>Skills</span></span>)}
        {numberRow(2, <span className='import-python'>import <span className='import-class-python'>Education</span></span>)}
        {numberRow(3, <span className='import-python'>import <span className='import-class-python'>Experience</span></span>)}
        {numberRow(4, <span className='import-python'>import <span className='import-class-python'>Projects</span></span>)}
        {numberRow(5, <br></br>)}
        {numberRow(6, <span><span className='function-def-python'>def </span><span className='function-python'>main</span><span className='yellow-brackets'>()</span>:</span>)}
        {numberRow(7, <span style={{marginLeft: '1rem'}} ><span className='const'>NAME </span>=<span className='string-python'> "Omer Gaizinger"</span></span>)}
        {numberRow(8, <span style={{marginLeft: '1rem'}} ><span className='variable-python'>profession </span>=<span className='string-python'> "Fullstack Developer"</span></span>)}
        {numberRow(9, <span style={{marginLeft: '1rem'}} ><span className='variable-python'>location </span>=<span className='string-python'> "Israel, Hamerkaz"</span></span>)}
        {numberRow(10, <span style={{marginLeft: '1rem'}} ><span className='variable-python'>currently </span>=<span className='string-python'> "Pursuing a degree in Computer Science"</span></span>)}
        {numberRow(11, <span style={{marginLeft: '1rem'}} ><span className='variable-python'>available_for </span>=<span className='string-python'> "A student position as a software engineer"</span></span>)}
        {numberRow(12, <span style={{marginLeft: '1rem'}} ><span className='import-python'>if </span><span className='string-python'>"Interested Hiring" </span>
        <span className='function-def-python'>in </span> <span className='variable-python'>your_company</span>:</span>)}
        {numberRow(13, <span style={{marginLeft: '2rem'}} ><span className='function-python'>open</span><span className='yellow-brackets'>(</span>
        <span className='string-python'>"contact.js"</span><span className='yellow-brackets'>)</span>
        </span>)}
        {numberRow(14, <br></br>)} 
        {numberRow(15, <br></br>)}
        {numberRow(16, <span ><span className='import-python'>if </span><span className='variable-python'>__name__ </span>==<span className='string-python'> "__main__"</span>:</span>)}
        {numberRow(17, <span style={{marginLeft: '1rem'}} ><span className='function-python'>main</span><span className='yellow-brackets'>()</span></span>)}
        {numberRow(18, <br></br>)}
    </main>
  )
}

export default main