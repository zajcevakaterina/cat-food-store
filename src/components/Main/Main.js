import React from 'react';
import './Main.css';
import Cards from '../Cards/Cards'

// Создала отдельно Main, так как скорее всего на сайте помимо карточек должно быть что-то еще :)
function Main() {
  return (
    <main className="main">
     <Cards/>
    </main>
  )
}

export default Main