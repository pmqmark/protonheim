// hooks/usePageColors.js
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const usePageColors = () => {
    const location = useLocation();

    useEffect(() => {
        const { pathname } = location;

        let headerColor = '#ffffff'; // default white
        let footerColor = '#283891'; // default blue
        let headerNavItemColor = '#000000'; // default black
        let footerNavItemColor = '#ffffff'; // default white
        let footerIconFilter = 'invert(100%)'; // default white

        if (pathname === '/contactus') {
            footerColor = '#ffffff'; // white
            footerNavItemColor = '#000000'; // black
            footerIconFilter = 'invert(100%)'; // black icons
        } else {
            footerIconFilter = 'invert(0%)'; // white icons for all other pages
        }

        document.documentElement.style.setProperty('--header-bg-color', headerColor);
        document.documentElement.style.setProperty('--footer-bg-color', footerColor);
        document.documentElement.style.setProperty('--header-nav-item-color', headerNavItemColor);
        document.documentElement.style.setProperty('--footer-nav-item-color', footerNavItemColor);
        document.documentElement.style.setProperty('--footer-icon-filter', footerIconFilter);
    }, [location]);
};

export default usePageColors;
