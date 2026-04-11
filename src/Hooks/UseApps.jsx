import React, { useEffect, useState } from 'react';

const UseApps = () => {
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
                    }, 1000)
                    
                };
                fetchData();
            },[]);
           
    return { apps, loading };
};

export default UseApps;