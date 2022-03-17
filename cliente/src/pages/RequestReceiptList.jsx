import React, { useEffect, useState } from 'react';
import Request from '../components/Request';
import axios from 'axios';
import '../styles/RequestList.scss';

const RequestReceiptList = () => {
    const [requests, setRequests] = useState([]);

    const apiRecibos = 'http://localhost:3000/api/v1/List/Recibo';

    useEffect(async ()=> {
        const res = await axios.get(apiRecibos).then((res) =>{
            try{
                setRequests(res.data);
            } catch(e){
                console.log(res, e);
            } 
        })
    },[]);

    //console.log(requests);
    //const requests = useGetRequests(requestsData);

    return (
        <div className='request-list'>
            {requests.map(request =>(
                <Request request={request} key={request.id_Sol}/>
            ))}
        </div> 
    );
}

export default RequestReceiptList;