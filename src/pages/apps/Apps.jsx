
import { HashLoader } from 'react-spinners';
import AppCard from '../../assets/Components/ui/AppCard';
import UseApps from '../../Hooks/UseApps';

const Apps = () => {
    const {apps, loading} =UseApps();
    return (
          <div className='mt-10 container mx-auto px-2'>
            <h2 className='text-5xl font-bold leading-14 text-center'>All Apps</h2>
                <p className='mt-3 text-gray-400 text-sm text-center'>Explore All Trending Apps on the Market developed by us.</p>
            
            {loading? (<div className='flex justify-center mt-5'><h2 className='text-center'><HashLoader color='#9b1dfc'></HashLoader></h2></div>) : ( <div className='grid  md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 justify-center'>
                {
                apps.map((app, ind)=> {
                        return (
                            <AppCard app={app} key={ind}></AppCard>
                        )
                })
            }
            </div>)}
            
        </div>
    );
};

export default Apps;