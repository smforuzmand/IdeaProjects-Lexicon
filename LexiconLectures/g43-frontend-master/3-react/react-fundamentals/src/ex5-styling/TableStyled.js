import React from 'react';
//import './table.css'; {/* Don't forget to import css file.*/}



const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
    );
}

const TableBody = () => {
    return (
        <tbody>
            <tr>
                <td>1</td>
                <td>Mehrdad Javan</td>
                <td>mehrdad@lexicon.se</td>
                <td>
                    <TableAction />
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Simon Elbrink</td>
                <td>simon@lexicon.se</td>
                <td>
                    <TableAction />
                </td>
            </tr>
        </tbody>
    );
}

{/* Styling by Classes*/}
const TableAction = () => {
    return (
        <>
            <button className='btn btn-primary' >Details</button>
            <button className='btn btn-danger'>Delete</button>
            <button className='btn btn-warning'>Edit</button>
        </>
    );
}




const Table = () => {
    return (
        <div>
            <table className='table table-dark table-striped' border="1">
                <TableHeader />
                <TableBody />
            </table>
        </div>
    );
};

export default Table;