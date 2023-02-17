import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { takeReceiver } from '../../../store/asyncThunk/takeReceiver';

export default function UsersTable({link}) {
  const { Users, isShuffled } = useSelector((state) => state.cabinet);
  const dispatch = useDispatch();
  const receiver = useSelector((state) => state.cabinet.receiver);
  // console.log(receiver[1].room)
  // const allreceiver = receiver.map((user) => user.receiver)
  // console.log(allreceiver)
  // const allsender = receiver.map((user) => user.sender)
  // console.log(allsender)
  useEffect(() => {
    console.log('use effect');
    if(isShuffled) {
      console.log("takeReceiver")
      dispatch(takeReceiver(link));
    }
    // dispatch(getCabinet(link));
  }, []);

  return (
    <>
    {isShuffled ? (
      <div className="shuffling">
        <div className="after">
          {Users &&
            Users.map((user) => (
              <h3 key={user.user.id}>
                {user.user.name} {user.user.surname}
              </h3>
            ))}
        </div>

        <div className="after">
          {receiver &&
            receiver.map((el) => (
              <h3 key={el.receiver.id}>
                {el.receiver.name} {el.receiver.surname}
              </h3>
            ))}
        </div>
      </div>
    ) : (
      <div
        className="after"
        style={{ backgroundColor: '#245d27', color: 'white' }}
      >
        {Users &&
            Users.map((user) => (
              <h3 key={user.user.id}>
                {user.user.name} {user.user.surname}
              </h3>
            ))}
      </div>
    )}
    </>
  )
}
