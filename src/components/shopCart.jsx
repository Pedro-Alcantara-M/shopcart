import React from 'react'
import styled from 'styled-components'

const ShopCart = ({ id = 'modal', onClose = () => { }}) => {

  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose()
  }

  return (
    <Modal id={id} onClick={handleOutsideClick}>
      <Container>
        <Close onClick={onClose} />
      </Container>
    </Modal>

  )
}

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #0008;
`;

const Container = styled.div`
  background-color: #fff;
  border-radius: 15px;
  color: #000;
  width: 60%;
  height: 60%;
`;

const Close = styled.button`
  background-color: transparent;
  width: 32px;
  height: 32px;
  position: relative;
  right: calc(-100% + 110px);
  top: 16px;

  ::before, ::after {
    content: ' ';
    position: absolute;
    top: 5px;
    width: 2.5px;
    height: 24px;
    background-color: #000;
  }
  
  ::before {
    transform: rotate(45deg)
  }
  ::after {
    transform: rotate(-45deg)
  }
`;

export default ShopCart