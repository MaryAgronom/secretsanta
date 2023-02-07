import React from 'react';
import Wishes from '../Wishes/Wishes';

const wishes = [
  { id: 1, like: true, item: 'smth' },
  { id: 5, like: true, item: 'smthElse' },
  { id: 10, like: true, item: 'smth' },
  { id: 15, like: true, item: 'smthElse' },
  { id: 20, like: true, item: 'smth' },
  { id: 25, like: false, item: 'smthElse' },
  { id: 30, like: false, item: 'smth' },
  { id: 35, like: false, item: 'smthElse' },
  { id: 40, like: false, item: 'smth' },
  { id: 45, like: false, item: 'smthElse' },
];

export default function UserWishes() {
  return (
    <div className="userWishes">
      <Wishes status={true} wishes={wishes.filter((wish) => wish.like)} />
      <Wishes status={false} wishes={wishes.filter((wish) => !wish.like)} />
    </div>
  );
}
