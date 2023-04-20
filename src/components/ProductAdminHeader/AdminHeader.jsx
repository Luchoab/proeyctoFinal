import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import './style.css'

export const AdminHeader = ({ sendProduct }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <div className='d-flex justify-content-center'>
            <Button variant='submit' className='button align-self-end' onClick={handleShow}>
                <p className='text-center'>
                    <span>Agrega Productos</span>
                </p>
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(sendProduct)}>
                        <div className="form-group">
                            <label htmlFor="exampleInputText">Nombre</label>
                            <input type="text" className="form-control" id="exampleInputText" aria-describedby="nameText" placeholder="Nombre del Producto" {...register("name", { required: true, minLength: 3, maxLength: 24 })} /> {errors.name && errors.name.type === "required" && <p className='error-text'>Este campo no puede quedar vacío</p>} {errors.name && errors.name.type === "minLength" && <p className='error-text'>Debes insertar al menos 3 caracteres</p>} {errors.name && errors.name.type === "maxLength" && <p className='error-text'>Solo puedes insertar 24 caracteres</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputText">URL</label>
                            <input type="text" className="form-control" id="exampleInputText" aria-describedby="nameText" placeholder="URL de la Imagen" {...register("url", { required: true })} />{errors.url && <p className='error-text'>Este campo no puede quedar vacío</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputText">Precio</label>
                            <input type="number" className="form-control" id="exampleInputText" aria-describedby="nameText" placeholder="Precio del Producto" {...register("price", { required: true })} /> {errors.price && <p className='error-text'>Este campo no puede quedar vacío</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputText">Descripción</label>
                            <textarea className="form-control" id="exampleInputTextarea" aria-describedby="nameText" placeholder="Descripción del Producto" {...register("description", { required: true, minLength: 30 })} /> {errors.description && errors.description.type === "required" && <p className='error-text'>Este campo no puede quedar vacío</p>} {errors.description && errors.description.type === "minLength" && <p className='error-text'>Debes insertar al menos 30 caracteres</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputText">Info</label>
                            <textarea className="form-control" id="exampleInputTextarea" aria-describedby="nameText" placeholder="Más Información" {...register("info", { required: true, minLength: 30 })} /> {errors.info && errors.info.type === "required" && <p className='error-text'>Este campo no puede quedar vacío</p>} {errors.info && errors.info.type === "minLength" && <p className='error-text'>Debes insertar al menos 30 caracteres</p>}
                        </div>                        
                        <button type="submit" className="btn btn-primary mt-3">Agregar</button>                        
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
