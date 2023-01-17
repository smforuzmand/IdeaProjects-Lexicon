import React from 'react';
import {useForm} from 'react-hook-form';

const HookFormExample = () => {


    const {register, handleSubmit, formState: {errors}} = useForm();


    const saveDate = (data) => {
        console.log ("Data: ", data);

        // Send it API for Storing
    }

    return (
        <div class="container col-10">

        <form class="form-control my-4" onSubmit={handleSubmit(saveDate)}>
            <div class="form-floating my-3">
                <input 
                type="text" 
                class="form-control" 
                id="firstname" 
                placeholder="Enter FirstName"
                {...register("firstName",{required: true})}
                />
                
                <label for="firstname">Enter FirstName</label>
                {errors.firstName && <span className='text-danger'>FirstName is required!</span>}
            </div>
            <div class="form-floating mb-3">
                <input 
                type="text" 
                class="form-control" 
                id="lastname" 
                placeholder="Enter Lastname"
                {...register("lastName",{required: true})}
                />
            
                <label for="lastname">Enter LastName</label>
                {errors.lastName && <span className='text-danger'>lastName is required!</span>}
            </div>

            <div class="card-footer">
                <button type="submit" class="btn btn-primary mb-2">Submit</button>
            </div>

        </form>
        </div>
    );
};

export default HookFormExample;