import React, { useState } from 'react';

const PersonForm = () => {


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const initialErrorState = { firstNameError: "", lastNameError: "" }
    const [error, setError] = useState(initialErrorState);

    const [showData , setShowData] = useState(false);


    const ValidateForm = () => {
        let validationResult = true;

        let _error = {};
        if (firstName.length < 2 || firstName.length > 40) {
            _error.firstNameError = "firstName was not valid";
            validationResult = false;
        }
        if (lastName.length < 2 || lastName.length > 40) {
            _error.lastNameError = "lastName was not valid";
            validationResult = false;
        }

        setError(_error);
        return validationResult;
    }


    const clickBtn = () => {
        console.log('FirstName: ' + firstName);
        console.log('lastName: ' + lastName);

        if (ValidateForm()) {
            console.log("form was Valid!");
            setShowData(true);


        } else {
            console.log("form was INVALID!");
        }

    }

    const resetForm = () => {
        setShowData(false);

        setFirstName('');
        setLastName('');

        setError(initialErrorState);
    }

    const DisplayData = () => {

        return(
            <div class="card">
            <div class="card-header bg-dark text-white">Data</div>
            <div class="card-body">
                <p><b>First Name: {firstName}</b></p>
                <p><b>Last Name: {lastName}</b></p>
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-danger" onClick={resetForm}>Close</button>
            </div>
        </div>

        )

    }


    return (
        <div className="container col-10">

            <form className="form-control my-4">
                <div className="form-floating my-3">
                    <input
                        type="text"
                        className="form-control"
                        id="firstname"
                        placeholder="Enter FirstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} />
                    <label for="firstname">Enter FirstName</label>
                    <span className='text-danger'>{error.firstNameError}</span>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="lastname"
                        placeholder="Enter Lastname"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)} />
                    <label for="lastname">Enter LastName</label>
                    <span className='text-danger'>{error.lastNameError}</span>
                </div>

                <div className="card-footer">
                    <button type="button" className="btn btn-primary mb-2" onClick={clickBtn}>Submit</button>
                </div>

            </form>

            <br/>

            {showData && <DisplayData/>}

        </div>
    );
};

export default PersonForm;