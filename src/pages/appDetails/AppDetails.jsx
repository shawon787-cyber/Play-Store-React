import React from 'react';
import { useParams } from 'react-router';
import UseApps from '../../Hooks/UseApps';
import { HashLoader } from 'react-spinners';

const AppDetails = () => {
    const {id} = useParams();
    console.log(id);
    const {apps, loading} =UseApps();
    const expectedApps = apps.find(app => app.id == id);
    console.log(apps, loading);
    console.log(expectedApps)
    if(loading){
        return(
            <div className='flex justify-center mt-5'><h2 className='text-center'><HashLoader color='#9b1dfc'></HashLoader></h2></div>
        )
    }
    return (
        <div className='container mx-auto px-2'>
            <div className='shadow p-6 text-center'>
                <img className='mx-auto h-64' src={expectedApps.image} alt="" />
            <h3 className='font-semibold text-2xl leading-10 mt-3'>{expectedApps.title}</h3>
            <p className='font-semibold text-gray-600'>Developed by: <span className='text-purple-600'>{expectedApps.companyName}</span></p>
            <button className='btn mt-4 bg-purple-600 text-white'>Install Now</button>
            </div>
        </div>
    );
};

export default AppDetails;