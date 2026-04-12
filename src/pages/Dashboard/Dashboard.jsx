import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { InstalledAppsContext } from '../../Context/InstalledAppProvider';
import UseApps from '../../Hooks/UseApps';


const Dashboard = () => {
  const {installedApps} = useContext(InstalledAppsContext);
  const {apps} =UseApps();
  console.log(apps);
  const uninstallApps = apps.length - installedApps.length;
  const data = [
  { name: 'Installed', value: installedApps.length , fill: "#6366F1" },
  { name: 'Uninstalled', value: uninstallApps , fill: "#22C55E"},
  
];
    return (
         <div className='flex flex-col gap-5 items-center justify-center my-8'>
            <h2 className='text-3xl font-semibold text-purple-500'>Install & Uninstall Apps</h2>
             <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Legend></Legend>
      <Tooltip></Tooltip>
    </PieChart>
         </div>
    );
};

export default Dashboard;