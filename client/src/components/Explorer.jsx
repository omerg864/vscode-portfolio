import React from 'react';
import IconButton from './IconButton';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Accordion from './Accordion.jsx';
import File from './File.jsx';


function Explorer() {
  return (
    <div className='explorer'>
      <div className='explorer-title'>
        <span>Explorer</span>
        <IconButton icon={<HiOutlineDotsHorizontal/>} />
      </div>
      <Accordion animation={true} open={true} title="OPEN EDITORS">
        <div className='file'>File 1</div>
        <div className='file'>File 2</div>
        <div className='file'>File 3</div>
      </Accordion>
      <Accordion animation={true} open={true} style={{marginTop: '8px'}} title="OMER GAIZINGER">
        <File name="main.py" icon={<img alt='python-icon' className='file-icon' src='/file-icons/python.svg'/>}/>
        <File name="contact.js" icon={<img alt='js-icon' className='file-icon' src='/file-icons/javascript.svg'/>}/>
        <Accordion style={{marginLeft: '8px'}} icon={<img alt='graduation-folder' className='folder-icon' src='/folders-icons/folder-graduate.png'/>} 
        openIcon={<img className="folder-icon" alt='graduation-folder-open' src='/folders-icons/folder-graduate-open.png'/>} title="Education">
          <div className='line'></div>
          <Accordion style={{marginLeft: '8px'}} icon={<img alt='academy-folder' className='folder-icon' src='/folders-icons/folder-core.svg'/>} 
          openIcon={<img className="folder-icon" alt='academy-folder-open' src='/folders-icons/folder-core-open.svg'/>} title="Academy">
            <div className='line'></div>
            <div className='file'>File 2</div>
            <div className='file'>File 3</div>
          </Accordion>
          <Accordion style={{marginLeft: '8px'}} icon={<img alt='courses-folder' className='folder-icon' src='/folders-icons/folder-middleware.svg'/>} 
          openIcon={<img className="folder-icon" alt='courses-folder-open' src='/folders-icons/folder-middleware-open.svg'/>} title="Courses">
            <div className='line'></div>
            <div className='file'>File 2</div>
            <div className='file'>File 3</div>
          </Accordion>
        </Accordion>
        <Accordion style={{marginLeft: '8px'}} icon={<img alt='skills-folder' className='folder-icon' src='/folders-icons/folder-src.svg'/>} 
          openIcon={<img className="folder-icon" alt='skills-folder-open' src='/folders-icons/folder-src-open.svg'/>} title="Skills">
            <div className='line'></div>
            <div className='file'>File 2</div>
            <div className='file'>File 3</div>
          </Accordion>
          <Accordion style={{marginLeft: '8px'}} icon={<img alt='experience-folder' className='folder-icon' src='/folders-icons/folder-resource.svg'/>} 
          openIcon={<img className="folder-icon" alt='experience-folder-open' src='/folders-icons/folder-resource-open.svg'/>} title="Experience">
            <div className='line'></div>
            <div className='file'>File 2</div>
            <div className='file'>File 3</div>
          </Accordion>
          <Accordion style={{marginLeft: '8px'}} icon={<img alt='projects-folder' className='folder-icon' src='/folders-icons/folder-github.svg'/>} 
          openIcon={<img className="folder-icon" alt='projects-folder-open' src='/folders-icons/folder-github-open.svg'/>} title="Projects">
            <div className='line'></div>
            <div className='file'>File 2</div>
            <div className='file'>File 3</div>
          </Accordion>
      </Accordion>
    </div>
  )
}

export default Explorer