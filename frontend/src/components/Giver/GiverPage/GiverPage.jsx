import React from 'react';
import { useDispatch } from 'react-redux';
import { sendPresent } from '../../../store/asyncThunk/sendPresent';

export default function GiverPage({ present }) {
  console.log(present);
  const { receiver, room } = present;
  const { Wishes, userInfo } = receiver;

  const dispatch = useDispatch();

  return (
    <div>
      <div className="counter">
        <h4>Отослать до: {room.data_closed.slice(0,10) || 'Даты нет'}</h4>
      </div>
      <div className="container-giver">
        <div className="card-giver">
          <div className="avatar-container-giver">
            <div className="avatar-giver" />
          </div>
          <div className="lists-giver">
            <div className="list-giver">
              <div>
                <h3>Хочет</h3>
                {Wishes.filter((wish) => wish.like).map((wish) => (
                  <div key={wish.id}>{wish.item}</div>
                ))}
              </div>
            </div>
            <div className="list-giver">
              <div>
                <h3>Не хочет</h3>
                {Wishes.filter((wish) => !wish.like).map((wish) => (
                  <div key={wish.id}>{wish.item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="info-giver">
          <div className="info-list-giver">
            <div className="info-item">
              <h3>Имя:</h3>
              <div>{receiver.name + ' ' + receiver.surname}</div>
            </div>
            <div className="info-item">
              <h3>Адрес:</h3>
              <div>{userInfo.address || 'Адресса нет'}</div>
            </div>
            <div className="info-item">
              <h3>Размер одежды:</h3>
              <div>{userInfo.size || 'Размера нет'}</div>
            </div>
            {present.send && (
              <div className="info-item" style={{ marginTop: '10px' }}>
                <h4>✅ Подарок отправлен</h4>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="button-container">
        {!present.send && (
          <button
            type="submit"
            className="btn-giver"
            onClick={() => {
              dispatch(sendPresent({ presentId: present.id }));
            }}
          >
            Я отправил
          </button>
        )}
      </div>
    </div>
  );
}
