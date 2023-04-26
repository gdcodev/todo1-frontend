import { InputNumber } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button';
import Container from '../../components/container';
import withAuth from '../../hoc';
import { removeItemFromCart, updateItemToCart } from '../../redux/actions/cart';
import { PAYMENT_PATH } from '../../routes/path';

const Checkout = () => {
  const { cart } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cart.reduce((acc, curr) => (curr.amount * curr.price) + acc, 0);
  const handleChangeAmount = (amount, item) => {
    dispatch(updateItemToCart({ ...item, amount }));
  };

  const handleClickDeleteItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleClickPayment = () => {
    navigate(PAYMENT_PATH);
  };

  return (
    <Container>
      <h1>Carrito de Compras</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {cart.length
          ? cart.map((item) => (
            <div style={{
              display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10
            }}
            >
              <span>{`${item.name} - ${item.price}`}</span>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <InputNumber
                  value={item.amount}
                  min={1}
                  max={item.stock}
                  onChange={(value) => handleChangeAmount(value, item)}
                  style={{ marginRight: 5 }}
                />
                <Button text="Eliminar" onClick={() => handleClickDeleteItem(item.id)} />
              </div>
            </div>
          ))
          : <span style={{ textAlign: 'center' }}>No hay items en el carrito</span>}
        {!!cart.length && (
          <>
            <div style={{ textAlign: 'right' }}>
              Total:
              {' '}
              {total}
              {' '}
            </div>
            <Button style={{ marginTop: '50px' }} text="Comprar" type="primary" onClick={handleClickPayment} />
          </>
        )}
      </div>
    </Container>
  );
};

export default withAuth(Checkout);
