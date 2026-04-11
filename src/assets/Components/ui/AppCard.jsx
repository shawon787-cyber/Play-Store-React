import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';

const AppCard = ({app}) => {
    return (
        
            <div className=''>
                            <div className=" bg-base-100 shadow-sm rounded-2xl ">
  <div className='flex items-center justify-center bg-gray-100 rounded-t-2xl'>
    <img className='h-64'
      src={app.image}
      alt={app.title} />
  </div>
  <div className="">
    <h2 className="mt-6 font-semibold text-xl px-6">{app.title}</h2>
    <div className='flex justify-between items-center gap-4 p-6'>
        <p className='bg-green-100 text-green-500 px-4 py-1 font-semibold rounded-md flex items-center gap-2'><FaDownload></FaDownload> {app.downloads}</p>
        <p className='bg-orange-100 text-orange-600 px-4 py-1 font-semibold rounded-md flex items-center gap-2'><FaStar></FaStar> {app.reviews}</p>
    </div>
  </div>
</div>
                        </div>
        
    );
};

export default AppCard;