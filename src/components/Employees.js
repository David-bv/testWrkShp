import React, {useEffect} from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { registerEmployeeAsync } from '../actions/actionEmployees';
import { useDispatch } from 'react-redux';
import { fileUpload } from '../helpers/FileUpload';
import { List } from './List';
import { listEmployeeAsync } from '../actions/actionEmployees';

const Input = styled.input`
    background-color: #db7093;
`

export const Employees = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listEmployeeAsync())
     }, [ dispatch])

    const formik = useFormik({
        initialValues: {
            url: "",
            nombre: "",
            correo: "",
            descripcion: ""
        },
        onSubmit: (data) => {
            dispatch(registerEmployeeAsync(data))
        },

    })

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChanged = (e) => {
        const file = e.target.files[0];
        fileUpload(file)
            .then(response => {
                formik.initialValues.url = response
                console.log(response);
            })
            .catch(error => {
                console.log(error.message);
            })
    }


 

    return (
        <div>
            <div className="container mt-5">

                <hr />
                <div className="row">

                    <div div className="col-9">
                        <h3 className="text-center"> Employees </h3>

                        <form className="form-group" onSubmit={formik.handleSubmit}>
                            <input
                                id="fileSelector"
                                type="file"
                                className="form-control "
                                placeholder="url image"
                                name="url"
                                style={{ display: 'none' }}
                                onChange={handleFileChanged}
                                required />

                            <button
                                className="btn btn-dark"
                                onClick={handlePictureClick}
                                type="button">Imagen</button>

                            <input
                                type="text"
                                className="form-control mt-2"
                                name="nombre"
                                autoComplete="off"
                                placeholder="user name"
                                onChange={formik.handleChange}
                                required />

                            <input
                                type="text"
                                className="form-control mt-2"
                                name="correo"
                                autoComplete="off"
                                placeholder="email"
                                onChange={formik.handleChange}
                                required />

                            <textarea
                                className="form-control mt-2"
                                autoComplete="off"
                                name="descripcion"
                                placeholder="description"
                                onChange={formik.handleChange}
                                required
                            ></textarea>

                            <div className="d-grid gap-2 mx-auto mt-2">
                                <Input
                                    value="Save"
                                    type="submit"
                                    className="btn btn-outline-dark"
                                />
                            </div>
                        </form>
                    </div>
                        <List/>
                </div>
            </div>
        </div>
    )
}
