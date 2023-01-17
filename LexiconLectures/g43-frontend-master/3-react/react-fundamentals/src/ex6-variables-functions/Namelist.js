import React from 'react';

const names = ["Mehrdad Javan", "Simon Elbrink"]

const getLastName = (name) =>{
    let lastName = name.split(" ")[1];
    return <span>{lastName}</span>
};


const Namelist = () => {
    return (
        <div>
            <ul>
                {
                    names.map(name => (
                        <li>
                            {name} - {name.toUpperCase()} - {getLastName(name)}
                        </li>
                    ))
                }

            </ul>
        </div>
    );
};

export default Namelist;