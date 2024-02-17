import React from 'react';
import IconButton from './IconButton';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Accordion from './Accordion.jsx';
import File from './File.jsx';
import FileOpen from './FileOpen.jsx';


function Explorer({ tabs, setTabs, setActiveTab, activeTab}) {

  const closeTab = (e, id) => {
    e.stopPropagation();
    if (activeTab.id === id) {
      setActiveTab(tabs.length > 1 ? tabs.find(tab => tab.id !== id) : {});
    }
    setTabs(tabs.filter(tab => tab.id !== id));
  }

  const openFromEditTab = (e, id) => {
    e.stopPropagation();
    setActiveTab(tabs.find(tab => tab.id === id));
  }

  const onClickFile = (fileData) => {
    if(activeTab.id === fileData.id) {
      return;
    }
    if(tabs.find(tab => tab.id === fileData.id)) {
      setActiveTab(tabs.find(tab => tab.id === fileData.id));
    } else {
      setTabs([...tabs.filter(tab => !tab.temp), {...fileData, temp: true}]);
      setActiveTab({...fileData, temp: true});
    }
  }

  const onDoubleClickFile = (fileData) => {
    if(activeTab.id === fileData.id && !activeTab.temp) {
      return;
    }
    console.log(fileData);
    if(tabs.find(tab => tab.id === fileData.id)) {
      setTabs([...tabs.filter(tab => tab.id !== fileData.id && !tab.temp), fileData]);
      setActiveTab(fileData);
    } else {
      setTabs([...tabs.filter(tab => !tab.temp), fileData]);
      setActiveTab(fileData);
    }
  }

  return (
    <div className='explorer'>
      <div className='explorer-title'>
        <span>Explorer</span>
        <IconButton icon={<HiOutlineDotsHorizontal/>} />
      </div>
      <Accordion animation={true} open={true} title="OPEN EDITORS">
        {tabs.map((tab) => {
          return <FileOpen key={tab.id} name={tab.name} id={tab.id} close={closeTab} onClick={openFromEditTab} icon={tab.icon ? <img alt={tab.icon.alt} className='file-icon' src={tab.icon.src}/> : false}/>
        })}
      </Accordion>
      <Accordion animation={true} open={true} style={{marginTop: '8px'}} title="OMER GAIZINGER">
        <File onClick={onClickFile} onDoubleClick={onDoubleClickFile} id="main" name="main.py" icon={{alt: "python-icon", src: "/file-icons/python.svg"}}/>
        <File onClick={onClickFile} onDoubleClick={onDoubleClickFile} id="contact" name="contact.js" icon={{alt: "js-icon", src: "/file-icons/javascript.svg"}}/>
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
          <Accordion style={{marginLeft: '8px'}} icon={<img alt='resumes-folder' className='folder-icon' src='/folders-icons/folder-scripts.svg'/>} 
          openIcon={<img className="folder-icon" alt='resumes-folder-open' src='/folders-icons/folder-scripts-open.svg'/>} title="Resumes">
            <div className='line'></div>
            <File onClick={onClickFile} onDoubleClick={onDoubleClickFile} id="ResumeHebrew" name="ResumeHebrew.docx" icon={{alt: "word-icon", src: "/file-icons/word.svg"}}/>
            <File onClick={onClickFile} onDoubleClick={onDoubleClickFile} id="ResumeEnglish" name="ResumeEnglish.docx" icon={{alt: "word-icon", src: "/file-icons/word.svg"}}/>
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