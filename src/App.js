import React, { useState } from 'react';
import logo from './assets/logoaiflowpro1.svg';
import applicationsIcon from './assets/applications.svg';
import generalSearchIcon from './assets/general_search.svg';
import emailIcon from './assets/email.svg';
import chatIcon from './assets/chat.svg';
import summarizeIcon from './assets/summarize.svg';
import meetingsIcon from './assets/meetings.svg';
import lookinggirl from './assets/lookinggirl1.svg';
import lookinggirl1 from './assets/lookinggirl2.svg';
import lookinggirl2 from './assets/lookinggirl3.svg';
import check from './assets/check.svg';
import record from './assets/record.svg';
import arrow from './assets/arrow.svg';

function Sidebar({ isVisible, toggleSidebar }) {
  function getMenuItems() {
    return [
      { name: 'Applications', icon: applicationsIcon, active: true },
      { name: 'General Search', icon: generalSearchIcon },
      { name: 'E-mail Automations', icon: emailIcon },
      { name: 'Chat with Doc', icon: chatIcon },
      { name: 'Summarize', icon: summarizeIcon },
      { name: 'Meetings', icon: meetingsIcon },
    ];
  }

  function getTeamStorage() {
    return [
      { name: 'Pickolab', color: 'bg-indigo-600' },
      { name: 'UI8 Project', color: 'bg-indigo-400' },
      { name: 'Teiko NFT', color: 'bg-indigo-700' },
    ];
  }

  return (
    <div className={`fixed top-0 left-0 h-full ${isVisible ? 'w-60' : 'w-16'} md:w-20 lg:w-60 transition-all duration-300 border-r p-4 flex flex-col`}>
      <button 
        onClick={toggleSidebar} 
        className={`absolute top-4 right-4 md:hidden text-gray-200 rounded-full p-1 ${isVisible ? '' : 'rotate-180'} transition-transform duration-300`}
      >
        <img src={arrow} alt="Toggle Sidebar" className="w-6 h-6" />
      </button>
      <img src={logo} alt="AI-FLOW PRO Logo" className={`transition-all duration-300 ${isVisible ? 'h-30' : 'w-10'} mb-1`} />
      <h2 className={`text-xl font-bold text-blue-600 mb-4 ${isVisible ? 'block' : 'hidden'}`}>AI-FLOW PRO</h2>
      <p className={`text-sm text-gray-500 mb-4 w-full ${isVisible ? 'block' : 'hidden'}`}>Start using your AI apps</p>

      {/* Menu Items */}
      <ul className="mb-6">
        {getMenuItems().map((item, index) => (
          <li
            key={index}
            className={`flex items-center mb-3 p-2 cursor-pointer rounded-lg transition-colors duration-200 ${
              item.active ? 'bg-gray-100 shadow' : ''
            } hover:bg-gray-200 hover:text-white-500`}
          >
            <img src={item.icon} alt={item.name} className="w-12 h-12 mr-3" />
            <span className={`text-gray-700 ${isVisible ? 'block' : 'hidden'}`}>{item.name}</span>
          </li>
        ))}
      </ul>

      {/* Team Storage */}
      <h3 className={`text-gray-600 font-semibold mb-2 ${isVisible ? 'block' : 'hidden'}`}>Team Storage</h3>
      <ul className="mb-6">
        {getTeamStorage().map((item, index) => (
          <li key={index} className="flex items-center mb-3">
            <span className={`w-6 h-6 rounded-full ${item.color} mr-3`}></span>
            <span className={`cursor-pointer rounded-lg transition-colors duration-200 ${isVisible ? 'block':'hidden'} hover:bg-gray-200 hover:text-white-500`}>{item.name}</span>
          </li>
        ))}
      </ul>

      {/* Settings and User */}
      <div className="flex items-center -mb-5">
        <span className="mr-3">⚙️</span>
        <span className={`text-gray-700 ${isVisible ? 'block' : 'hidden'}`}>Settings</span>
      </div>
      <div className="flex items-center -mb-3">
        <span className="mr-4">👤</span>
        <span className={`text-gray-700 ${isVisible ? 'block' : 'hidden'}`}>Kurnia Majid</span>
      </div>
    </div>
  );
}

function Main() {
  function getApplications() {
    return [
      {
        title: 'E-mail Automations',
        description: 'Connect your email end start with AI automations to optimize your emails. Sort your emails into folders and setup auto replies.',
        icon: emailIcon,
        users: '5 Friends using',
        usage: '10K Used',
        button: 'Use This',
      },
      {
        title: 'General Search',
        description: 'Use our search tool to find information on demand.No long strolls over the internet but a simple question and answer. ',
        icon: generalSearchIcon,
        users: '2 Friends using',
        usage: '104K Used',
        button: 'Use This',
      },
      {
        title: 'Chat with Documents',
        description: 'Upload your document and ask your AI assistant...',
        icon: chatIcon,
        users: '5 Friends using',
        usage: '3K Used',
        button: 'Use This',
      },
      {
        title: 'Summarize document',
        description: 'Upload your document and let AI summarize it...',
        icon: summarizeIcon,
        users: '5 Friends using',
        usage: '8K Used',
        button: 'Start Using',
      },
      {
        title: 'Plan a Meeting',
        description: 'Set up meetings with ease using our tools...',
        icon: meetingsIcon,
        users: '5 Friends using',
        usage: '2K Used',
        button: 'Start Using',
      },
      {
        title: 'Record Your Meeting',
        description: 'Record your meeting and let your AI assistant transcribe the whole meeting. Send the transcript or summary to all attandees.',
        icon: record,
        users: '5 Friends using',
        usage: '4K Used',
        button: 'Start Using',
      },
    ];
  }
  
  return (
    <div className="p-8 flex-1">
      <h1 className="text-xl sm:text-2xl font-semibold mb-4 ml-16 md:ml-64">
        Welcome to <span className="text-blue-600 ">AI-FLOW PRO</span>
      </h1>
      <h2 className="text-lg font-medium mb-6 ml-16 md:ml-64">Applications</h2>

      {/* Application Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-4 md:ml-20 lg:ml-64">
        {getApplications().map((app, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-4 relative">
            <div className="flex items-center mb-3">
              <img src={app.icon} alt={app.title} className="w-8 h-8 mr-3" />
              <h3 className="font-semibold text-gray-700">{app.title}</h3>
              <img src={check} alt="check" className="w-5 h-5 absolute top-2 right-2" />
            </div>
            <p className="text-sm text-gray-500 mb-4">{app.description}</p>
            <div className="flex items-start justify-between text-sm text-gray-400 -ml-2">
              <div className="flex space-x-2 mb-3">
                <img src={lookinggirl} alt="User 1" className="w-6 h-6 rounded-full object-cover" />
                <img src={lookinggirl1} alt="User 2" className="w-6 h-6 -ml-2 rounded-full object-cover" />
                <img src={lookinggirl2} alt="User 3" className="w-6 h-6 -ml-2 rounded-full object-cover" />
                <span>{app.users}</span>
              </div>
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md border border-gray-300 font-semibold">{app.usage}</span>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md border font-semibold">{app.button}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const toggleSidebar = () => setIsVisible(!isVisible);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex overflow-hidden">
      <Sidebar isVisible={isVisible} toggleSidebar={toggleSidebar} />
      <Main />
    </div>
  );
}

export default App;
