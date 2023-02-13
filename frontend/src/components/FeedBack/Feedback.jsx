import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import feedbackSlice, { addFeedback } from '../../store/slices/feedbackSlice';
import './Feedback.css'

export default function FeedBack({present_id}) {
  const [show, setShow] = useState(false);
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const sendHandle = ((e) => {
    console.log('vkhfjdb dfwkbhbv wfibdk')
    dispatch(addFeedback({ present_id, inputText }))
  })
  return (
  <div className="feedback-content">
    <div className="korobka">
<div className="gift-box-container">
  <div className="gift-box">
    <div className="gift-box__side gift-box__side--front"></div>
    <div className="gift-box__side gift-box__side--back"></div>
    <div className="gift-box__side gift-box__side--left"></div>
    <div className="gift-box__side gift-box__side--right"></div>
    <div className="gift-box__end gift-box__side--top"></div>
    <div className="gift-box__end gift-box__side--bottom"></div>
    <div className="gift-box-lid__side gift-box-lid__side--front"></div>
    <div className="gift-box-lid__side gift-box-lid__side--back"></div>
    <div className="gift-box-lid__side gift-box-lid__side--left"></div>
    <div className="gift-box-lid__side gift-box-lid__side--right"></div>
    <div className="gift-box-lid__end gift-box-lid__side--top"></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "0px", "border-color": "var(--gift-box-edge-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "1px", "border-color": "var(--gift-box-edge-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "2px", "border-color": "var(--gift-box-edge-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "3px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "4px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "5px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "6px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "7px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "8px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "9px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "10px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "11px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "12px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "13px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "14px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "15px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "16px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "17px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "18px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "19px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "20px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "21px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "22px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "23px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "24px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "25px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "26px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "27px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "28px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "29px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "30px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "31px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "32px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "33px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "34px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "35px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "36px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "37px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "38px", "border-color": "var(--gift-box-edge-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "39px", "border-color": "var(--gift-box-edge-color)" }}></div>
    <div className="ribbon-l" style={{ "--gift-box-position": "40px", "border-color": "var(--gift-box-edge-color)" }}></div>
    <div className="ribbon-l-end"></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "0px", "border-color": "var(--gift-box-edge-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "1px", "border-color": "var(--gift-box-edge-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "2px", "border-color": "var(--gift-box-edge-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "3px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "4px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "5px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "6px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "7px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "8px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "9px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "10px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "11px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "12px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "13px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "14px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "15px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "16px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "17px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "18px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "19px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "20px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "21px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "22px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "23px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "24px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "25px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "26px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "27px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "28px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "29px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "30px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "31px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "32px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "33px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "34px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "35px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "36px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "37px", "border-color": "var(--wrap-ribbon-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "38px", "border-color": "var(--gift-box-edge-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "39px", "border-color": "var(--gift-box-edge-color)" }}></div>
    <div className="ribbon-r" style={{ "--gift-box-position": "40px", "border-color": "var(--gift-box-edge-color)" }}></div>
    <div className="ribbon-r-end"></div>
  </div>
</div>
</div>
     <div className="knopachka">

      <Button variant="danger" onClick={handleShow} className="christmas-btn">
              Получил подарок!
          </Button><Modal show={show} onHide={handleClose} className='modalka' >
              <Modal.Header closeButton style={{ backgroundColor: '#ead3ab', color: '#115e25' }}>
                  <Modal.Title>Передай привет тайному Санте!</Modal.Title>
              </Modal.Header>
              <Modal.Body style={{ backgroundColor: '#ead3ab' }}>
                  <Form>
                      <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
    
                      >
                          <Form.Label>Поделись впечатлениями о подарке в коротком письме 💌</Form.Label>
                          <Form.Control as="textarea" rows={3}  onChange={(e) => {
                            setInputText(e.target.value)
                          }} />
                      </Form.Group>
                  </Form>
              </Modal.Body>
              <Modal.Footer style={{ backgroundColor: '#ead3ab' }}>
                  <Button variant="secondary" onClick={handleClose}>
                      Закрыть
                  </Button>
                  <Button variant="primary" onClick={sendHandle}>
                     Отправить
                  </Button>
              </Modal.Footer>
          </Modal>
</div>
          </div>
  );
}
