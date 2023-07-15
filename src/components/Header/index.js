import style from './Header.module.scss';
import React from 'react';

function Header(props) {
    return (
        <header>
        <div className={style.leftHeader}>
          <div className={style.logo}>
            <img src='./img/logo.svg' width={40} height={40} alt="logo"/>
          </div>
          <div className='title'>
            <h3>
              REACT SNEAKERS
            </h3>
            <p>
              Магазин лучших кроссовок
            </p>
          </div>
        </div>
        <div className={style.rightHeader}>
          <div className={style.cart}>
            <button className={style.cartButton}>
              <img src='./img/cart.svg' width={20} height={20} alt="cart" onClick={props.onClickCart}/>
            </button>
            <span>{props.cost} руб.</span>
          </div>
          <div className={style.favourite}>
            <button className={style.favouriteButton}>
              <img src='./img/favourite.svg' width={21.111} height={19} alt="heart" onClick={props.onClickLike}/>
            </button>
          </div>
          <div className='user'>
            <button className={style.userButton} onClick={props.onClickUser}>
              <img src='./img/user.svg' width={20} height={20} alt="user"/>
            </button>
          </div>
        </div>
      </header>
    );
};

export default Header