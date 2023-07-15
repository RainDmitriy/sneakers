import CartItem from '../CartItem';
import style from './CartSidebar.module.scss';

function CartSidebar({onClickClose, items=[], onClickRemove, cost, onClickOrder, onClickFromOrder, orderCreated}) {
    return ( 
      <div>
        <div className={style.overlay}>
        </div>
        <div className={style.sidebar}>
          <div className={style.cartHeader}>
            <h3>Корзина</h3>
            {items.length > 0 && 
            <button>
              <img src='/img/remove_btn.svg' width={32} height={32} alt='cross' onClick={onClickClose}/>
            </button>
            }
          </div>
          <div className={style.cartItems}>
            {!orderCreated && items.map((obj) => 
              <CartItem 
                imgUrl = {obj.img} 
                title = {obj.name} 
                price = {obj.price}
                onRemove = {() => onClickRemove(obj.id)}
                key = {obj.img}
              />
            )}
          </div>
          {(items.length > 0)&&!orderCreated ?
            <div className={style.payment}>
              <div className={style.summary}>
                <p>Итого: </p>
                <div></div>
                <b>{cost} руб.</b>
              </div>
              <div className={style.fee}>
                <p>Налог 5%:</p>
                <div></div>
                <b>{Math.round(cost*0.05)} руб.</b>
              </div>
              <div className={style.createOrder}>
                <button onClick={onClickOrder}>
                  Оформить заказ
                  <img src='./img/next.svg' width={14} height={12} alt='arrow'/>
                </button>
              </div>
          </div> : !orderCreated ?
          <div className={style.emptyCart}>
            <img src='./img/empty_box.svg' alt='empty_box' width={120} height={120}/>
            <b>Корзина пустая</b>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button onClick={onClickClose}>
              Вернуться назад
              <img src='./img/back.svg' width={14} height={12} alt='arrow'/>
            </button>
          </div> :
          <div className={style.orderCreated}>
          <img src='./img/order.svg' alt='ordered' width={83} height={120}/>
          <b>Заказ оформлен!</b>
          <p>Ваш заказ скоро будет передан курьерской доставке</p>
          <button onClick={onClickFromOrder}>
            Вернуться назад
            <img src='./img/back.svg' width={14} height={12} alt='arrow'/>
          </button>
        </div>
          }
        </div>     
      </div>
    );
};

export default CartSidebar;