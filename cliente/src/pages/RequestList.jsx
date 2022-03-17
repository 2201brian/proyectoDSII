import React, { useEffect, useState } from 'react';
import Request from '../components/Request';
import axios from 'axios';
import '../styles/RequestList.scss';

const RequestList = ({tipo_solicitud}) => {
    const [requests, setRequests] = useState([]);
    const [apiConsulta,setApiConsulta] = useState('');
    const apiPrint = 'http://localhost:3000/api/v1/List/Impresiones';
    const apiRedac = 'http://localhost:3000/api/v1/List/Redaccion';
    const apiCitas = 'http://localhost:3000/api/v1/List/Citas';
    const apiRecibos = 'http://localhost:3000/api/v1/List/Recibos';

    useEffect(async ()=> {
        if (tipo_solicitud == 'print')
            setApiConsulta(apiPrint);
        else if (tipo_solicitud == 'redaccion')
            setApiConsulta(apiRedac);
        else if (tipo_solicitud == 'citas')
            setApiConsulta(apiCitas);
        else if (tipo_solicitud == 'recibos')
            setApiConsulta(apiRecibos);

        const res = await axios.get(apiConsulta).then((res) =>{
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

export default RequestList;