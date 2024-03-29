import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [phone, setPhone] = useState(shippingAddress.phone)
  const [note, setNote] = useState(shippingAddress.note)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, phone, note }))
    history.push('/payment')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Thông tin giao hàng</h1>
      <Form onSubmit={submitHandler}>
        
        <Form.Group controlId='address'>
          <Form.Label>Địa chỉ</Form.Label>
          <Form.Control
            type='text'
            placeholder='Nhập địa chỉ'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='city'>
          <Form.Label>Thành phố</Form.Label>
          <Form.Control
            type='text'
            placeholder='Nhập thành phố'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='postalCode'>
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control
            type='text'
            placeholder='Nhập số điện thoại'
            value={phone}
            required
            onChange={(e) => setPhone(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='country'>
          <Form.Label>Ghi chú</Form.Label>
          <Form.Control
            type='text'
            placeholder='Nhập ghi chú'
            value={note}
            required
            onChange={(e) => setNote(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Tiếp tục
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
