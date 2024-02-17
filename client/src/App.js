import './App.css';
import Header from './components/Header.jsx';
import StatusBar from './components/StatusBar.jsx';
import Explorer from './components/Explorer.jsx';
import TabsBar from './components/TabsBar';
import ActivityBar from './components/ActivityBar';
import Search from './components/Search';
import Main from './pages/main.js';
import Contact from './pages/contact.js';
import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState({name: 'main.py', icon: {src: "/file-icons/python.svg", alt: "python-icon"}, id: "main", component: 'intro'});
  const [tabs, setTabs] = useState([{name: 'main.py', icon: {src: "/file-icons/python.svg", alt: "python-icon"}, id: "main", component: 'intro'}]);
  const [sideBar, setSideBar] = useState('explorer');

  return (
    <div className="App">
      <Header />
      <div className='main'>
        <ActivityBar sidebar={sideBar} setSidebar={setSideBar} />
        {sideBar === 'explorer' && <Explorer tabs={tabs} setTabs={setTabs} setActiveTab={setActiveTab} activeTab={activeTab}/>}
        {sideBar === 'search' && <Search />}
        <div className='editor'>
          <TabsBar tabs={tabs} setActiveTab={setActiveTab} setTabs={setTabs} activeTab={activeTab} />
          {activeTab.id === 'main' && <Main />}
          {activeTab.id === 'contact' && <Contact />}
        </div>
      </div>
      <StatusBar />
    </div>
  );
}

export default App;
