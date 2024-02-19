import React, { useState, useEffect } from 'react';
import IconButton from './IconButton';
import { VscRefresh } from "react-icons/vsc";
import { useDebounce } from 'use-debounce';
import { searchData } from '../functions/functions';
import File from './File';


function Search({ tabs, setTabs, setActiveTab, activeTab, academy, skills, experience, projects, courses, resumes }) {

    const [search, setSearch] = useState('');
    const [value] = useDebounce(search, 800);
    const [results, setResults] = useState([]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    useEffect(() => {
        if(value.length > 2) {
            const searchResults = [];
            searchResults.push(...searchData(resumes, value));
            searchResults.push(...searchData(courses, value));
            searchResults.push(...searchData(projects, value));
            searchResults.push(...searchData(experience, value));
            searchResults.push(...searchData(academy, value));
            searchResults.push(...searchData(skills, value));
            console.log(searchResults);
            setResults(searchResults);
        }
    }, [value]);

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
        <span>SEARCH</span>
        <IconButton icon={<VscRefresh/>} />
      </div>
      <div>
        <input className='search-tab-input' onChange={handleSearch} value={search} type='text' placeholder='Search'/>
      </div>
      <div className='result-list'>
        {results.map(result => {
            return <File active={activeTab.id === result.id}  onClick={onClickFile} onDoubleClick={onDoubleClickFile} object={result} key={result.id}/>
        })}
      </div>
    </div>
  )
}

export default Search