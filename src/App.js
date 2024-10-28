import React from 'react'
import  logo from './assets/logoaiflowpro1.svg';
import applicationsIcon from './assets/applications.svg';
import generalSearchIcon from './assets/general_search.svg';
import emailIcon from './assets/email.svg';
import chatIcon from './assets/chat.svg';
import summarizeIcon from './assets/summarize.svg';
import meetingsIcon from './assets/meetings.svg';


function Sidebar() {
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
    <div className=" md:block w-64 bg-white border-r border-gray-200 p-4">
      <img src={logo} alt="AI-FLOW PRO Logo" className="w-20 mb-4" />
      <h2 className="text-xl font-bold text-blue-600 mb-4">AI-FLOW PRO</h2>
      <p className="text-sm text-gray-500 mb-4">Start using your AI apps</p>

      {/* Menu Items */}
      <ul className="mb-6">
        {getMenuItems().map((item, index) => (
          <li
            key={index}
            className={`flex items-center mb-3 p-2 cursor-pointer rounded-lg ${
              item.active ? 'bg-gray-100 shadow' : ''
            }`}
          >
            <img src={item.icon} alt={item.name} className="w-5 h-5 mr-3" />
            <span className="text-gray-700">{item.name}</span>
          </li>
        ))}
      </ul>

      {/* Team Storage */}
      <h3 className="text-gray-600 font-semibold mb-2">Team Storage</h3>
      <ul className="mb-6">
        {getTeamStorage().map((item, index) => (
          <li key={index} className="flex items-center mb-3">
            <span className={`w-3 h-3 rounded-full ${item.color} mr-3`}></span>
            <span className="text-gray-700">{item.name}</span>
          </li>
        ))}
      </ul>

      {/* Settings and User */}
      <div className="flex items-center mt-auto">
        <span className="mr-3">⚙️</span>
        <span className="text-gray-700">Settings</span>
      </div>
      <div className="flex items-center mt-4">
        <span className="mr-3">👤</span>
        <span className="text-gray-700">Kurnia Majid</span>
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
    ];
  }

  return (
    <div className=" md: block p-8 flex-1">
      <h1 className="text-2xl font-semibold mb-4">
        Welcome to <span className="text-blue-600">AI-FLOW PRO</span>
      </h1>
      <h2 className="text-lg font-medium mb-6">Applications</h2>

      {/* Application Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getApplications().map((app, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-4">
            <div className="flex items-center mb-3">
              <img src={app.icon} alt={app.title} className="w-8 h-8 mr-3" />
              <h3 className="font-semibold text-gray-700">{app.title}</h3>
            </div>
            <p className="text-sm text-gray-500 mb-4">{app.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
              <span>{app.users}</span>
              <span>{app.usage}</span>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
              {app.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}


function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;