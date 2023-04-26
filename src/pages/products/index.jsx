import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CardProduct from '../../components/cardProduct';
import Container from '../../components/container';
import withAuth from '../../hoc';
import { getProducts } from '../../redux/actions/product';
import { DETAIL_PRODUCT_PATH } from '../../routes/path';

const Products = () => {
  const { products } = useSelector((state) => state.productReducer);
  const dispath = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispath(getProducts());
  }, []);

  const handleClickProduct = (id) => {
    navigate(`${DETAIL_PRODUCT_PATH}/${id}`);
  };
  return (
    <Container>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
        products.length === 0
          ? <p>No hay productos disponibles</p>
          : products.map(({
            id, name, description, price, image
          }) => (
            <div key={id}>
              <CardProduct
                title={name}
                description={description}
                price={price}
                image={image}
                onClick={() => handleClickProduct(id)}
              />
            </div>
          ))
        }
      </div>
    </Container>
  );
};

export default withAuth(Products);
