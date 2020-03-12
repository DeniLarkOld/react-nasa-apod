import React from 'react';

export const Header = () => {
  return(
    <header className="header">
      <div className="container header__container">
        <div className="header__left">
          APOD
        </div>
        <div className="header__right">
          <div>Astronomy Picture of the Day</div>
          <div>Астрономическая картина дня</div>
        </div>
      </div>
    </header>
  )
}