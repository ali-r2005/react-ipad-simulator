import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Chosen from './Chosen';

function Ipad({children}) {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 relative border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[1400px]">
      <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
      {/* Container with scrollable content */}
      <div className="rounded-[2rem] overflow-y-auto h-[426px] md:h-[654px] bg-white dark:bg-gray-800">
      <div className="rounded-[2rem] overflow-y-auto scrollbar-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800">
       {children}
        </div>
        {/* Temporary UI for switching templates */}
        <Link to={"/Chosen"}
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-1.5 bg-gray-400 rounded cursor-pointer transition-all duration-500 hover:mb-1.5 mb-0.5"
        ></Link>
      </div>
    </div>
  );
}

export default Ipad;
