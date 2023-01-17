import React from 'react';

const getLastName = (name) =>{
    let lastName = name.split(" ")[1];
    return <span>{lastName}</span>
};


const NameListProps = (props) => {
    return (
        <div>
            <ul>
                {
                    props.names.map(name => (
                        <li>
                            {name} - {name.toUpperCase()} - {getLastName(name)}
                        </li>
                    ))
                }

            </ul>
        </div>
    );
};

export default NameListProps;