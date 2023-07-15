import CartItem from './CartItem';

function CartSidebar() {
    return (
        <div className='cart_sidebar' style={{display: "none"}}>
        <div className='overlay'>
        </div>
        <div className='sidebar'>
          <div className='cart_header'>
            <h3>Корзина</h3>
            <button className='close_cart'>
                <img src='/img/remove_btn.svg' width={32} height={32} alt='cross'/>
            </button>
          </div>
          <div className='cart_items'>
            <CartItem/>
            <CartItem/>
          </div>
          <div className='payment'>
              <div className='summary'>
                <p>Итого: </p>
                <div></div>
                <b>21 498 руб.</b>
              </div>
              <div className='fee'>
                <p>Налог 5%:</p>
                <div></div>
                <b>1074 руб.</b>
              </div>
              <div className='create_order'>
                <button>
                  Оформить заказ
                  <img src='./img/next.svg' width={14} height={12} alt='arrow'/>
                </button>
              </div>
          </div>
        </div>
      </div>
    )
}

export default CartSidebar;