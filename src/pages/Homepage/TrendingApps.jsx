
import { useEffect, useState } from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import AppCard from '../../assets/Components/ui/AppCard';
import { HashLoader } from 'react-spinners';


// const appsPromise = fetch('/public/data.json')
// .then((res)=> res.json());

const TrendingApps = () => {
    // const apps = use(appsPromise);
    // console.log(apps)
    //  const data = useLoaderData();
    // console.log(data)
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await fetch('/public/data.json');
            const data = await res.json();
            console.log(data);
            setTimeout(()=>{
                setApps(data);
            setLoading(false);
            }, 2000)
            
        };
        fetchData();
    },[]);
    console.log(apps);
    console.log(loading, "loading");
    return (
        <div className='mt-10 container mx-auto px-2'>
            <h2 className='text-5xl font-bold leading-14 text-center'>Trending Apps</h2>
                <p className='mt-3 text-gray-400 text-sm text-center'>Explore All Trending Apps on the Market developed by us.</p>
            
            {loading? (<div className='flex justify-center mt-5'><h2 className='text-center'><HashLoader color='#9b1dfc'></HashLoader></h2></div>) : ( <div className='grid  md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 justify-center'>
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

export default TrendingApps;