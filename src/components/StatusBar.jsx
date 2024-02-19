import React from 'react';
import { CgRemote } from "react-icons/cg";
import { IoGitBranch } from "react-icons/io5";
import { TbRefresh } from "react-icons/tb";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoWarningOutline } from "react-icons/io5";
import { VscRadioTower } from "react-icons/vsc";
import { PiBracketsCurly } from "react-icons/pi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgGitCommit } from "react-icons/cg";
import IconButton from './IconButton';


function StatusBar({ activeTab }) {
  const fileType = activeTab.name ? activeTab.name.split('.').pop().toUpperCase() : "";
  return (
    <footer>
      <div className='footer-left'>
        <IconButton footer={true} icon={<CgRemote />} />
        <IconButton footer={true} text='main*' icon={<IoGitBranch />} />
        <IconButton footer={true}  icon={<TbRefresh />} />
        <div className='footer-0'>
          <IconButton footer={true} text='0' icon={<IoMdCloseCircleOutline />} />
          <IconButton footer={true} text='0' icon={<IoWarningOutline />} />
          <IconButton footer={true} text='0' icon={<VscRadioTower />} />
        </div>
      </div>
      <div className='footer-right'>
        <IconButton footer={true} text='Omer, 1 second ago' icon={<CgGitCommit />} />
        {activeTab.name && <IconButton footer={true} text={fileType} icon={<PiBracketsCurly />} />}
        <IconButton footer={true} icon={<IoIosNotificationsOutline />} />
      </div>
    </footer>
  )
}

export default StatusBar