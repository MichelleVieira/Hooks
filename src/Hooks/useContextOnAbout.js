import { useState, useEffect } from 'react';

const useContextOnAbout = defaultValuer => {
    const [isContextOnAboutOpen, setIsContextOnAboutOpen] = useState(defaultValuer);

    useEffect(() => {
        document.oncontextaBout = () => setIsContextOnAboutOpen(true);
        window.onclick = () => setIsContextOnAboutOpen(false);

        return () => {
            document.oncontextaBout  = () => {};
            window.onclick = () => {};

        };
       },  []);
    
    return isContextOnAboutOpen;
};

export default useContextOnAbout;
