import './App.css';
import Header from './components/Header.jsx';
import StatusBar from './components/StatusBar.jsx';
import Explorer from './components/Explorer.jsx';
import TabsBar from './components/TabsBar';
import ActivityBar from './components/ActivityBar';
import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('');
  const [tabs, setTabs] = useState([]);
  const [sideBar, setSideBar] = useState('explorer');
  
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <ActivityBar />
        <Explorer />
        <div className='editor'>
          <TabsBar />
        </div>
      </div>
      <StatusBar />
    </div>
  );
}

export default App;
