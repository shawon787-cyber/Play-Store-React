import React, { useContext } from 'react';
import { InstalledAppsContext } from '../../Context/InstalledAppProvider';
import { toast } from 'react-toastify';
import NotFound from './NotFound';

const InstallApps = () => {
    const {installedApps, setInstalledApps} = useContext(InstalledAppsContext);
    console.log(installedApps, setInstalledApps);
    const handleUninstall =(app)=>{
        console.log(app, "need to uninstall");
        const restApps = installedApps.filter(iApp => iApp.id != app.id);
        console.log(restApps);
        setInstalledApps(restApps);
        toast.error(`${app.title} is uninstall`)
    }
    return (
        <div className='container mx-auto px-2 my-10 grid gap-6'>
            { installedApps.length === 0 ? <NotFound></NotFound> :              
            installedApps.map((app, ind)=>{
                    return <div className='shadow flex items-center  p-4 rounded-md bg-purple-50 justify-between' key={ind}>
                        
                        <div className='flex items-center gap-4'>
                            <img className='h-24 w-auto' src={app.image} alt="" />
                            <h2>{app.title}</h2>
                        
                        </div>
                        <button onClick={()=> handleUninstall(app)} className='btn bg-pink-600 text-white'>Uninstall</button>
                    </div>
                })
            }
        </div>
    );
};

export default InstallApps;