import React, {useEffect, useState} from "react";
import { config } from '../../constants';

const HelloApiClient = () => {
    const [hello, setHello] = useState('');
    useEffect(() => {
        fetch(config.url.API_URL+'/hello')
            .then(response => response.text())
            .then(text => setHello(text));
    }, []);
    return (
        <h1>{hello}</h1>
    );
};
export default HelloApiClient;

