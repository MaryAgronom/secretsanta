import React, { useState } from 'react'
import { useSelector } from 'react-redux';

export default function ShufflingInputs({input, setInput}) {
  const isShuffled = useSelector((state) => state.cabinet.isShuffled);
  const formHandler = (e) => {
    console.log(input);
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <>
    {isShuffled ? (
      <h3>Пары </h3>
    ) : (
      <div className="btnOtherInputs">
            <div className="btnOtherInput">
              <span>Cтоимость подарка:</span>
              <input
                onChange={formHandler}
                name="money"
                value={input.money}
                id="forpadding"
                type="number"
                placeholder="Назначить цену"
              />
            </div>
            <div className="btnOtherInput">
              <span>Нужно отправить до:</span>
              <input
                onChange={formHandler}
                name="data_closed"
                value={input.data_closed}
                id="forpadding"
                type="date"
                placeholder="Дата окончания"
              />
            </div>
          </div>
    )}
    </>
  )
}
