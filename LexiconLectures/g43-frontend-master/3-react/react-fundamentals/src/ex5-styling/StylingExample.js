//rsc
import React from 'react';
import Table from '../ex4-table/Table';


const StylingExample = () => {
    return (
        <div>
            {/*Inline styling*/}
            <h3 style={{color: "darkkhaki"}}>Hello Group!</h3>
            <h4>List</h4>

            <p style={{backgroundColor: "lightcyan"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fuga nesciunt, facere incidunt aliquam nostrum vitae consequuntur porro laborum amet officiis esse at odit exercitationem.
            </p>

            <Table/>


        </div>
    );
};

export default StylingExample;