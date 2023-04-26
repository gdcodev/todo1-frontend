import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Container from '../../componets/container';
import InputNumber from '../../componets/inputNumberComponent';
import withAuth from '../../hoc';
import Button from '../../componets/button';
import { getProducts } from '../../redux/actions/product';
import { addItemToCart } from '../../redux/actions/cart';
import { CHECKOUT_PATH } from '../../routes/path';

const DetailProduct = () => {
  const minDefault = 1;
  const [amount, setAmount] = useState(minDefault);
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const product = products.find((product) => product.id === id);

  useEffect(() => {
    if (!products.length) {
      dispatch(getProducts());
    }
  }, []);

  const handleChangeNumber = (value) => {
    setAmount(value);
  };

  const handleAddItem = (item) => {
    dispatch(addItemToCart({ ...item, amount }));
    navigate(CHECKOUT_PATH);
  };

  return (
    <Container>
      <img alt="titulo" width={500} src={product?.image} />
      <h1>{product?.name}</h1>
      <p>{product?.description}</p>
      <p>{product?.price}</p>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <InputNumber
          min={minDefault}
          max={product?.stock}
          value={amount}
          onChange={handleChangeNumber}
        />
        <Button
          style={{ marginTop: 10 }}
          text="Agregar al carrito"
          type="primary"
          onClick={() => handleAddItem(product)}
        />
      </div>
    </Container>
  );
};

export default withAuth(DetailProduct);
