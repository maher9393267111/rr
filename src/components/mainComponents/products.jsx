
import React, { Component } from 'react';
import {useParams} from 'react-router-dom'






// import { Container } from './styles';

function  Product() {
  const params = useParams();
  return (

<div>

homeeeee page
<h1>{params.productsid}</h1>

</div>

  );
}

export default  Product;









