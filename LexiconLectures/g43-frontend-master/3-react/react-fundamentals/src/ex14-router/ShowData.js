import React, { useState } from 'react';

import {useParams, Navigate} from "react-router-dom"

const ShowData = () => {

    let params = useParams();
    const [id, setId] = useState(params.id);


    if(id === "0"){
        return(
            <Navigate replace to={"/error"} state={{message: 'Param is not valid'}}/>
        )
    }

    return (
        <>
            <h2>
                ID Was: {id}
            </h2>
        </>
    )


}

export default ShowData;