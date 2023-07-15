function Header() {
    return (
        <header>
        <div className='left-header'>
          <div className='logo'>
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
        <div className='right-header'>
          <div className='cart'>
            <button className='cart_button'>
              <img src='./img/cart.svg' width={20} height={20} alt="cart"/>
            </button>
            <span>1205 руб.</span>
          </div>
          <div className='favourite'>
            <button className='favourite_button'>
              <img src='./img/favourite.svg' width={21.111} height={19} alt="heart"/>
            </button>
          </div>
          <div className='user'>
            <button className='user_button'>
              <img src='./img/user.svg' width={20} height={20} alt="user"/>
            </button>
          </div>
        </div>
      </header>
    )
}

export default Header