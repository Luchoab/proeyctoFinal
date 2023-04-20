import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import './style.css'

export const AdminHeader = ({ editUser, user }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const editUserLocal = (newUserData) => {
        editUser(newUserData, user._id)
    }

    return (
        <div className='d-flex justify-content-center'>
            <Button onClick={() => handleShow()}><FontAwesomeIcon icon={faPenToSquare} /></Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(editUserLocal)}>
                        <div className="form-group">
                            <label htmlFor="exampleInputText">Nombre</label>
                            <input defaultValue={user.name} type="text" className="form-control" id="exampleInputText" aria-describedby="nameText" placeholder="Nombre" {...register("name", { required: true, minLength: 3, maxLength: 8 })} /> {errors.name && errors.name.type === "required" && <p className='error-text'>Este campo no puede quedar vacío</p>} {errors.name && errors.name.type === "minLength" && <p className='error-text'>Debes insertar al menos 3 caracteres</p>} {errors.name && errors.name.type === "maxLength" && <p className='error-text'>Solo puedes insertar hasta 8 caracteres</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputText">Apellido</label>
                            <input defaultValue={user.lastName} type="text" className="form-control" id="exampleInputText" aria-describedby="nameText" placeholder="Apellido" {...register("lastName", { required: true, minLength: 3, maxLength: 10 })} /> {errors.lastName && errors.lastName.type === "required" && <p className='error-text'>Este campo no puede quedar vacío</p>} {errors.lastName && errors.lastName.type === "minLength" && <p className='error-text'>Debes insertar al menos 3 caracteres</p>} {errors.lastName && errors.lastName.type === "maxLength" && <p className='error-text'>Solo puedes insertar hasta 10 caracteres</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputText">Email</label>
                            <input defaultValue={user.email} type="text" className="form-control" id="exampleInputText" aria-describedby="nameText" placeholder="Mail" {...register("email", { required: true, minLength: 8, maxLength: 30 })} /> {errors.email && errors.email.type === "required" && <p className='error-text'>Este campo no puede quedar vacío</p>} {errors.email && errors.email.type === "minLength" && <p className='error-text'>Debes insertar al menos 8 caracteres</p>} {errors.email && errors.email.type === "maxLength" && <p className='error-text'>Solo puedes insertar hasta 30 caracteres</p>}
                        </div>                                               
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>                        
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
