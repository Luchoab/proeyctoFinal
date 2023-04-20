import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash, faCross } from '@fortawesome/free-solid-svg-icons';
import { AdminHeader } from '../UserAdminHeader/AdminHeader';
import axios from "axios";
import Swal from 'sweetalert2';

export const UsersList = () => {
    const [users, setUsers] = useState();
    useEffect(() => { getUsers() }, []);

    

    const getUsers = async () => {
        const users = await axios.get('http://localhost:3001/users');
        setUsers(users.data);
    }
    
    async function delUser(id) {
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
                await axios.delete(`http://localhost:3001/users/${id}`);     
                getUsers();
            } 
        })
    }

    const editUser = async (data, id) => {
        try {
          const loginData = await axios.put(`http://localhost:3001/users/${id}`, data);
          Swal.fire({
            title: "Buen trabajo!",
            text: "El producto ha sido modificado correctamente!",
            icon: "success",
          });
          const users = await axios.get(`http://localhost:3001/users`);
          setUsers(users.data);
          console.log(loginData);
        } catch (error) {
          console.log(error);
        }
      }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre del Usuario</th>
                        <th>Apellido del Usuario</th>
                        <th>Mail</th>
                        <th>Rol</th>
                        <th>Activo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, i) =>
                        (
                            <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user.active ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faCross} />}</td>
                                <td><Button className='bg-danger' onClick={() => delUser(user._id, user.email)}><FontAwesomeIcon icon={faTrash} /></Button></td>
                                <td><AdminHeader editUser={editUser} user={user} /></td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </div>
    )
}