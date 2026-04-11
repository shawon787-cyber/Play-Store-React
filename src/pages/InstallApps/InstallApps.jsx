import React, { useContext } from 'react';
import { InstalledAppsContext } from '../../Context/InstalledAppProvider';

const InstallApps = () => {
    const {installedApps, setInstalledApps} = useContext(InstalledAppsContext);
    console.log(installedApps)
    return (
        <div>
            install apps
        </div>
    );
};

export default InstallApps;