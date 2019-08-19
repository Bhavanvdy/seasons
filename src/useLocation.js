import { useEffect, useState} from 'react';

export default () => {
    const [lat, setLat] = useState(null);
    const [errorMessage, setErrormessage] =useState('');

    useEffect(() => {
        console.log('wtf just happened?');
        window.navigator.geolocation.getCurrentPosition(
            position => 
                //setstate to for state
                setLat(position.coords.latitude ),

            err =>{ setErrormessage (err.message); } );

    }, []);
    return [lat, errorMessage];
}