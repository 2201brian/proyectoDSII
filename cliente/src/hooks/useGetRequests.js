import { useEffect, useState } from "react";
import axios from "axios";

const useGetRequests = (api) => {
    const [requests, setRequests] = useState([]);

    useEffect(async () => {
        const response  = await axios(api);
        setRequests(response.data);    
    },[]);

    return requests;
};

export default useGetRequests;