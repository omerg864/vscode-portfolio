import './App.css';
import Header from './components/Header.jsx';
import StatusBar from './components/StatusBar.jsx';
import Explorer from './components/Explorer.jsx';
import TabsBar from './components/TabsBar';
import ActivityBar from './components/ActivityBar';
import Search from './components/Search';
import Main from './pages/main.jsx';
import Contact from './pages/contact.jsx';
import Academy from './pages/academy.jsx';
import Skill from './pages/skill.jsx';
import Project from './pages/project.jsx';
import Course from './pages/course.jsx';
import Experience from './pages/experience.jsx';
import { useState } from 'react';
import skills from './json/skills.json';
import courses from './json/courses.json';
import projects from './json/projects.json';
import experience from './json/experience.json';
import academy from './json/academy.json';
import Resume from './pages/resume.jsx';
import resumes from './json/resumes.json';


function App() {
  const [activeTab, setActiveTab] = useState({name: 'main.py', icon: {src: "/file-icons/python.svg", alt: "python-icon"}, id: "main", component: 'intro'});
  const [tabs, setTabs] = useState([{name: 'main.py', icon: {src: "/file-icons/python.svg", alt: "python-icon"}, id: "main", component: 'intro'}]);
  const [sideBar, setSideBar] = useState('explorer');

  return (
    <div className="App">
      <Header setSideBar={setSideBar}/>
      <div className='main'>
        <ActivityBar sidebar={sideBar} setSidebar={setSideBar} />
        {sideBar === 'explorer' && <Explorer setSideBar={setSideBar} resumes={resumes} courses={courses} projects={projects} 
        experience={experience} academy={academy} tabs={tabs} setTabs={setTabs} 
        setActiveTab={setActiveTab} activeTab={activeTab} skills={skills}/>}
        {sideBar === 'search' && <Search setSideBar={setSideBar} resumes={resumes} courses={courses} projects={projects} 
        experience={experience} academy={academy} tabs={tabs} setTabs={setTabs} 
        setActiveTab={setActiveTab} activeTab={activeTab} skills={skills} />}
        <div className='editor'>
          <TabsBar tabs={tabs} setActiveTab={setActiveTab} setTabs={setTabs} activeTab={activeTab} />
          {activeTab.id === 'main' && <Main />}
          {activeTab.id === 'contact' && <Contact />}
          {activeTab.component === 'academy' && <Academy activeTab={activeTab} />}
          {activeTab.component === 'skill' && <Skill activeTab={activeTab} />}
          {activeTab.component === 'project' && <Project activeTab={activeTab} />}
          {activeTab.component === 'course' && <Course activeTab={activeTab} />}
          {activeTab.component === 'experience' && <Experience activeTab={activeTab} />}
          {activeTab.component === 'resume' && <Resume activeTab={activeTab} />}
        </div>
      </div>
      <StatusBar activeTab={activeTab}/>
    </div>
  );
}

export default App;
