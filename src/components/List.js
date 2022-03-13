import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEmployeeAsync } from '../actions/actionEmployees';


export const List = () => {

    const dispatch = useDispatch();

    const { employees } = useSelector(store => store.employee);
    //console.log(employees)

    return (
        <div>
            <table className="table text-center mt-3">

                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((e, i) => (
                            <tr key={i}>
                                <td><img src={e.url} width="50" height="50" alt=""/></td>
                                <td>{e.descripcion}</td>
                                <td>{e.nombre}</td>
                                <td>{e.correo}</td>
                                <input
                                    value="Delete"
                                    type="button"
                                    className="btn btn-outline-dark"
                                    onClick={() => dispatch(deleteEmployeeAsync(e.correo))}
                                />
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
