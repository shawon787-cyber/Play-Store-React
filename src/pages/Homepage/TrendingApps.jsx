
import { useEffect, useState } from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import AppCard from '../../assets/Components/ui/AppCard';
import { HashLoader } from 'react-spinners';
import { Link } from 'react-router';


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
            
            {loading? (<div className='flex justify-center mt-5'><h2 className='text-center'><HashLoader color='#9b1dfc'></HashLoader></h2></div>) : ( <div className='grid  md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 justify-center'>
                {
                apps.slice(0,8).map((app, ind)=> {
                        return (
                            <AppCard app={app} key={ind}></AppCard>
                        )
                })
            }
            </div>)}
            <div className='text-center mt-6'>
                <Link to={"/apps"}>
                <button className='btn bg-gradient-to-r from-purple-500 to-indigo-600 text-white border-none'>
                    View All
                </button></Link>
            </div>
        </div>
    );
};

export default TrendingApps;