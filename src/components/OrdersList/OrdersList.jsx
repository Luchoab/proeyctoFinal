
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import Swal from 'sweetalert2';

export const OrdersList = () => {
    useEffect(() => { getOrders() }, []);
    const [orders, setOrders] = useState();

    async function getOrders () {
        const orders = await axios.get('http://localhost:3001/orders');
        setOrders(orders.data);
    }
    
    async function delOrders (id) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(async (result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )     
                await axios.delete(`http://localhost:3001/orders/${id}`);     
                getOrders();
            } 
        })        
    }

    async function updateOrder (id) {
        const data = {state: 'confirmado'}
        await axios.put(`http://localhost:3001/orders/${id}`, data)        
        getOrders();
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Pedido</th>                        
                        <th>Usuario</th>
                        <th>Eliminar</th>
                        <th>Estado</th>
                        <th>Eliminar</th>                        
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.map((order, i) =>
                        ( 
                            <tr key={order._id}>
                                <th>{i + 1}</th>
                                <td>{order._id}</td>
                                <td>{order.user}</td>
                                <td>{order.product[i].name}</td>                                
                                <td>{order.state === "confirmado" 
                                ?
                                <Button disabled>{order.state}</Button>
                                :
                                <Button onClick={() => updateOrder(order._id)}>{order.state}</Button>}
                                </td>
                                <td><Button className='bg-danger' onClick={() => delOrders(order._id)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></Button></td>                                                                
                            </tr>
                        ))}
                </tbody>
            </Table>
        </div>
    )
}