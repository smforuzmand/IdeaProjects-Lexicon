import React, { useState } from 'react';
import axios from 'axios';
import DataTable from './DataTable';
import AlertMessage from './AlertMessage';

const API_URL = "http://localhost:8080/api/v1/person";


const AxiosApp = () => {


    const [persons, setPersons] = useState([]);
    const [alert, setAlert] = useState({type:'', message: ''});

    // JS by default is a synchronous scripting language 


    const getAllPeopleAction = async () => {
        await axios.get(API_URL).then(response => {

            if(response.status === 200){
                console.log(response.data);
                setPersons(response.data);

                setAlert({type: 'alert-success', message:'Get ALL From API has Been Executed!'})
            }else{
                setAlert({type: 'alert-warning', message:'API ERROR ' + response.status})
            }
        }).catch( error =>{
            setAlert({type: 'alert-danger', message:'API ERROR'});
        })
    }


    const getPersonByIdAction = async () =>{
        const id = 2;
        await axios.get(API_URL + '/' + id).then(response => {

            if(response.status === 200){
                console.log(response.data);

                setAlert({type: 'alert-success', message:'Get By ID From API has Been Executed!'})
            }else{
                setAlert({type: 'alert-warning', message:'API ERROR ' + response.status})
            }
        }).catch( error =>{
            setAlert({type: 'alert-danger', message:'API ERROR'});
        })

    }

    const createPersonAction = () =>{
        const data = { 
            firstName: 'Test', 
            lastName: 'testsson', 
            email: 'test.testsson@test.se', 
            title: 'Tester'
        }

        //axios.post().then(response => {}).catch(error =>{})

        axios.post(API_URL, data)
        .then(response => {

            if(response.status === 201){
                setAlert({type: 'alert-success', message: 'Post To API Was Successful!'})
            } else {
                setAlert({type: 'alert-warning', message: 'API Error ' + response.status})
            }

        }).catch(error => {
            setAlert({type: 'alert-danger', message: 'Error'})
        });

    }


    const updatePersonAction = () => {
        const data = { 
            id: 1,
            firstName: 'Test', 
            lastName: 'testsson', 
            email: 'test@test.se', 
            title: 'Tester'
        }

        //axios.post().then(response => {}).catch(error =>{})

        axios.put(API_URL, data)
        .then(response => {

            if(response.status === 204){
                setAlert({type: 'alert-success', message: 'Update (PUT) To Person with ID 1 Was Successful!'})
            } else {
                setAlert({type: 'alert-warning', message: 'API Error ' + response.status})
            }

        }).catch(error => {
            setAlert({type: 'alert-danger', message: 'Error'})
        });
    }


    return (
        <div className='container'>


            <AlertMessage alert={alert}/>
            <div className="row">
                <div className="col">
                    <button
                        className='btn btn-primary'
                        onClick={getAllPeopleAction}>
                        Get All Operation
                    </button>
                </div>

                <hr/>
                <DataTable persons={persons}/>

                <div className="col">
                    <button
                        className='btn btn-info'
                        onClick={getPersonByIdAction}>
                        Get By ID Operation
                    </button>
                </div>

                <div className="col">
                    <button
                        className='btn btn-success'
                        onClick={createPersonAction}>
                        Post Data Operation
                    </button>
                </div>

                <div className="col">
                    <button
                        className='btn btn-warning'
                        onClick={updatePersonAction}>
                        Update Data Operation
                    </button>
                </div>

            </div>



        </div>
    );
};

export default AxiosApp;