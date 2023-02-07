import React from 'react';
import './Giver.css';

function Giver() {
  return (
      <div>
      <div className="counter">
          <h4>Отослать до: 
            24.02.2023
          </h4>
      </div><div className="container-giver">
              <div className="card-giver">
                  <div className="avatar-container-giver">
                      <div className="avatar-giver" />
                  </div>
                  <div className="lists-giver">
                      <div className="list-giver">
                          <ul>
                              <h3>Хочет</h3>
                              <li>
                                  Духи
                              </li>
                          </ul>
                      </div>
                      <div className="list-giver">
                          <ul>
                              <h3>
                                  Не хочет
                              </h3>
                              <li>Крокодила</li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="info-giver">
              <ul className='info-list-giver'>
                  <div className="info-item">
                      <h3>Имя:</h3>
                      <li>Гая</li>
                  </div>
                  <div className="info-item">
                      <h3>Адрес:</h3>
                      <li>Фрязино</li>
                  </div>
                  <div className="info-item">
                      <h3>Интересы:</h3>
                      <li>
                        Кодинг
                      </li>
                  </div>
                  <div className="info-item">
                      <h3>Размер одежды:</h3>
                      <li>
                        xxxxxxxxl
                      </li>
                  </div>
              </ul>
              </div>
          </div>
              <div className="button-container">
                  <button type="submit" className='btn-giver'>Я отправил</button>
              </div>
          
          </div>
  );
}

export default Giver;
