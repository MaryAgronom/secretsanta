import { Button, Link, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from "../ListRooms/ListRoom.module.css";
import { useNavigate } from 'react-router-dom';

export default function ListRooms() {

  const rooms = useSelector(state => state.user.adminRooms)
  console.log(rooms)

  const navigate = useNavigate()

  const roomOpen = (id) => {
    console.log(id)
    navigate(`/all/${id}`)
  }

  return (
    <div className={styles.container}>
    {rooms && rooms.map((room) => (
      <div className={styles.btnStyle}>
        {/* <Link to={`/all/${room.id}`}> */}
      <Button onClick={ () => {roomOpen(room.id)}}  variant="outlined" size="medium">
      {room.title}
    </Button>
    {/* </Link> */}
    </div>
  ))}
  </div>
  )
}
