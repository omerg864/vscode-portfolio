import React from 'react';
import IconButton from './IconButton';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Accordion from './Accordion.jsx';
import File from './File.jsx';
import FileOpen from './FileOpen.jsx';
import { createPath } from '../functions/functions.js';


function Explorer({ tabs, setTabs, setActiveTab, activeTab, academy, skills, experience, projects, courses, resumes}) {

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
        <span>EXPLORER</span>
        <IconButton icon={<HiOutlineDotsHorizontal/>} />
      </div>
      <Accordion animation={true} style={{overflowX: 'scroll', paddingBottom: "8px"}} styleContent={{display: 'inline-block', minWidth: "100%"}} open={true} title="OPEN EDITORS">
        {tabs.map((tab) => {
          return <FileOpen key={tab.id} path={createPath(tab, false)} name={tab.name} id={tab.id} close={closeTab} onClick={openFromEditTab} icon={tab.icon ? <img alt={tab.icon.alt} className='file-icon' src={tab.icon.src}/> : false}/>
        })}
      </Accordion>
      <Accordion animation={true} open={true} style={{marginTop: '8px', overflowX: 'scroll', flex: '1'}} title="OMER GAIZINGER">
        <File active={activeTab.id === "main"} onClick={onClickFile} onDoubleClick={onDoubleClickFile} object={{name: "main.py", id:"main", icon: {alt: "python-icon", src: "/file-icons/python.svg"} }}/>
        <File active={activeTab.id === "contact"} onClick={onClickFile} onDoubleClick={onDoubleClickFile} object={{name: "contact.js", id:"contact", icon: {alt: "js-icon", src: "/file-icons/javascript.svg"} }} />
        <Accordion style={{paddingLeft: '8px'}} fit={true}  icon={<img alt='graduation-folder' className='folder-icon' src='/folders-icons/folder-graduate.png'/>} 
        openIcon={<img className="folder-icon" alt='graduation-folder-open' src='/folders-icons/folder-graduate-open.png'/>} title="Education">
          <div className='line'></div>
          <Accordion style={{paddingLeft: '8px', minWidth: "100%"}} fit={true} icon={<img alt='academy-folder' className='folder-icon' src='/folders-icons/folder-core.svg'/>} 
          openIcon={<img className="folder-icon" alt='academy-folder-open' src='/folders-icons/folder-core-open.svg'/>} title="Academy">
            <div className='line'></div>
            {academy.map(a => {
              return <File active={activeTab.id === a.id}  onClick={onClickFile} onDoubleClick={onDoubleClickFile} object={a} key={a.id}/>
            })}
          </Accordion>
          <Accordion style={{paddingLeft: '8px', minWidth: "100%"}} fit={true} icon={<img alt='courses-folder' className='folder-icon' src='/folders-icons/folder-middleware.svg'/>} 
          openIcon={<img className="folder-icon" alt='courses-folder-open' src='/folders-icons/folder-middleware-open.svg'/>} title="Courses">
            <div className='line'></div>
            {courses.map(c => {
              return <File active={activeTab.id === c.id}  onClick={onClickFile} onDoubleClick={onDoubleClickFile} object={c} key={c.id}/>
            })}
          </Accordion>
        </Accordion>
        <Accordion style={{paddingLeft: '8px', minWidth: "100%"}} icon={<img alt='skills-folder' className='folder-icon' src='/folders-icons/folder-src.svg'/>} 
          openIcon={<img className="folder-icon" alt='skills-folder-open' src='/folders-icons/folder-src-open.svg'/>} title="Skills">
            <div className='line'></div>
            {skills.map(s => {
              return <File active={activeTab.id === s.id}  onClick={onClickFile} onDoubleClick={onDoubleClickFile} object={s} key={s.id}/>
            })}
          </Accordion>
          <Accordion style={{paddingLeft: '8px', minWidth: "100%"}} fit={true} icon={<img alt='resumes-folder' className='folder-icon' src='/folders-icons/folder-scripts.svg'/>} 
          openIcon={<img className="folder-icon" alt='resumes-folder-open' src='/folders-icons/folder-scripts-open.svg'/>} title="Resumes">
            <div className='line'></div>
            {resumes.map(r => {
              return <File active={activeTab.id === r.id}  onClick={onClickFile} onDoubleClick={onDoubleClickFile} object={r} key={r.id}/>
            })}
          </Accordion>
          <Accordion style={{paddingLeft: '8px', minWidth: "100%"}} fit={true} icon={<img alt='experience-folder' className='folder-icon' src='/folders-icons/folder-resource.svg'/>} 
          openIcon={<img className="folder-icon" alt='experience-folder-open' src='/folders-icons/folder-resource-open.svg'/>} title="Experience">
            <div className='line'></div>
            {experience.map(e => {
              return <File active={activeTab.id === e.id}  onClick={onClickFile} onDoubleClick={onDoubleClickFile} object={e} key={e.id}/>
            })}
          </Accordion>
          <Accordion style={{paddingLeft: '8px', minWidth: "100%"}} fit={true} icon={<img alt='projects-folder' className='folder-icon' src='/folders-icons/folder-github.svg'/>} 
          openIcon={<img className="folder-icon" alt='projects-folder-open' src='/folders-icons/folder-github-open.svg'/>} title="Projects">
            <div className='line'></div>
            {projects.map(p => {
              return <File active={activeTab.id === p.id}  onClick={onClickFile} onDoubleClick={onDoubleClickFile} object={p} key={p.id}/>
            })}
          </Accordion>
      </Accordion>
    </div>
  )
}

export default Explorer