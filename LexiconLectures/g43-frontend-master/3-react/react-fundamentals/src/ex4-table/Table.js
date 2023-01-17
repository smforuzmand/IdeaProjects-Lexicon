import React from 'react';

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
            <button>Details</button>
            <button>Delete</button>
            <button>Edit</button>
        </>
    );
}




const Table = () => {
    return (
        <div>
            <table border="1">
                <TableHeader />
                <TableBody />
            </table>
        </div>
    );
};

export default Table;