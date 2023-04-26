import { message } from 'antd';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button';
import Container from '../../components/container';
import RadioGroup from '../../components/radioGroup';
import withAuth from '../../hoc';
import { createSale, cleanCart, fetchCards } from '../../redux/actions/cart';
import { PRODUCTS_PATH } from '../../routes/path';
import FormCardPayment from './form';

const paymentMethodData = [
  { value: 'Cash', label: 'Efectivo' },
  { value: 'Card', label: 'Tarjeta' }
];

const initialCardForm = {
  fullName: '',
  numberHash: '',
  dueDate: '',
  cvv: '',
};

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState(paymentMethodData[0].value);
  const [showFormPayment, setShowFormPayment] = useState(false);
  const [cardId, setCardId] = useState(null);
  const { cards } = useSelector((state) => state.cartReducer);
  const [cardForm, setCardForm] = useState(initialCardForm);
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cartReducer);
  const { userId } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCards(userId));
  }, []);

  const handleChangePaymentMethod = (e) => {
    const payMethod = e.target.value;
    if (payMethod === 'Cash') {
      setCardId(null);
      setCardForm(initialCardForm);
      setShowFormPayment(false);
    }
    setPaymentMethod(payMethod);
  };
  const handleChangeCardId = (e) => {
    setShowFormPayment(false);
    setCardId(e.target.value);
  };
  const handleClickAddCard = () => {
    setShowFormPayment(true);
    setCardId(null);
    setCardForm(initialCardForm);
  };
  const handleChangeForm = (form) => {
    setCardForm(form);
  };

  const handleSuccess = () => {
    dispatch(cleanCart());
    navigate(PRODUCTS_PATH);
    message.success('Exito! Su compra se proceso correctamente!');
  };

  const handleClickSale = () => {
    const data = {
      userId, // TODO: should add fetchUserInfo action
      cart,
      paymentMethod,
      cardId,
      cardForm
    };
    dispatch(createSale(data, handleSuccess));
  };

  const getCardsData = () => cards.map(({ id, lastFourNumbers }) => ({
    label: `**** **** **** ${lastFourNumbers}`,
    value: id
  }));

  const isSaleButtonDisabled = () => {
    if (!paymentMethod) return true;
    if (paymentMethod === 'Cash') return false;
    if (!showFormPayment && cardId) return false;
    if (!Object.values(cardForm).every((item) => !!item) && !cardId) return true;
    // return false;
  };

  return (
    <Container>
      <h1>Formas de pago</h1>
      <RadioGroup
        data={paymentMethodData}
        onChange={handleChangePaymentMethod}
        value={paymentMethod}
      />
      {paymentMethod === 'Card' && (
        <>
          <h3>Listado de tarjetas</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <RadioGroup
              data={getCardsData()}
              direction="vertical"
              onChange={handleChangeCardId}
              value={cardId}
            />
            <Button
              type="primary"
              text="Agregar tarjeta"
              onClick={handleClickAddCard}
            />
          </div>
          {showFormPayment && (
            <>
              <h3>Datos de la tarjeta</h3>
              <FormCardPayment
                form={cardForm}
                onChange={handleChangeForm}
              />
            </>
          )}

        </>
      )}
      <div>

        <Button
          type="primary"
          text="Realizar compra"
          onClick={handleClickSale}
          style={{ marginTop: '50px' }}
          disabled={isSaleButtonDisabled()}
        />
      </div>
    </Container>
  );
};
export default withAuth(Payment);
