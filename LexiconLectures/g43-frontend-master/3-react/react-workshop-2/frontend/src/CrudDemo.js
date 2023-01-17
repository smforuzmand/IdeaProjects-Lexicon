import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Form from './Form';
import Table from './Table';

const CrudDemo = () => {

    const API_URL = "http://localhost:8080/api/v1/person";

    const [persons, setPersons] = useState([]);
    const [loadData, setLoadData] = useState(false);

    useEffect(() => {
        getAllData();
    }, [loadData]);

    const getAllData = async () => {
        await axios.get(API_URL).then(
            (response) => {

                if (response.status === 200) {
                    console.log(`API: (All) Request was executed Successfully!`);

                    setPersons(response.data);
                    console.table(response.data);
                } else {
                    console.error(`API: Request was executed with status code ${response.status}`);
                }

            }
        ).catch((error) => {
            console.warn(`API: Request Encounter an Error ${error}`);
        })
    }

    const deletePersonByID = async (id) => {
        await axios.delete(`${API_URL}/${id}`).then(
            (response) => {

                if (response.status === 204) {
                    console.log(`API: (Delete) Request was executed Successfully!`);

                    setLoadData(!loadData)

                } else {
                    console.error(`API: Request was executed with status code ${response.status}`);
                }

            }
        ).catch((error) => {
            console.warn(`API: Request Encounter an Error ${error}`);
        })
    }

    const savePerson = async (data) => {
        await axios.post(API_URL, data).then(
            (response) => {

                console.log(response);

                if (response.status === 201) {
                    console.log(`API: (Save) Request was executed Successfully!`);
                    setLoadData(!loadData)

                } else if (response.status === 400){
                    

                }else {
                    console.error(`API: Request was executed with status code ${response.status}`);
                }

            }
        ).catch((error) => {
            console.warn(`API: Request Encounter an Error ${error}`);
        })
    }


    return (
        <div>
            <Form handleSave={savePerson}/>

            <Table data={persons} handleDelete={deletePersonByID}/>

            

        </div>
    );
};

export default CrudDemo;