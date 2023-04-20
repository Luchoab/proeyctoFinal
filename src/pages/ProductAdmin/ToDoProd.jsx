import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
// import FormProducts from '../../components/adminProducts/FormProducts';
import { ProductList } from '../../components/ProductsList/productsList';
import { AdminHeader } from '../../components/ProductAdminHeader/AdminHeader';
import '../../styles/Admin.css'
import axios from 'axios';
import Swal from 'sweetalert2';

export const ToDoProd = () => {
  const [products, setProducts] = useState();
  useEffect(() => { getProducts() }, []);

  const getProducts = async () => {
      const products = await axios.get('http://localhost:3001/products');
      setProducts(products.data);
  }

  const sendProduct = async (data) => {
    try {
      const loginData = await axios.post('http://localhost:3001/products', data);
      Swal.fire({
        title: "Buen trabajo!",
        text: "El producto ha sido agregado correctamente!",
        icon: "success",
      });
      getProducts()
      console.log(loginData);
    } catch (error) {
      console.log(error)
    }
  }

  const editProducts = async (data, id) => {
    try {
      const prodData = await axios.put(`http://localhost:3001/products/${id}`, data);
      Swal.fire({
        title: "Buen trabajo!",
        text: "El producto ha sido modificado correctamente!",
        icon: "success",
      });
      const products = await axios.get(`http://localhost:3001/products`);
      setProducts(products.data);
      console.log(prodData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Container fluid>
        <AdminHeader sendProduct={sendProduct} getProducts={getProducts}></AdminHeader>
        <ProductList products={products} getProducts={getProducts} editProducts={editProducts} />
      </Container>
    </>
  )
}

