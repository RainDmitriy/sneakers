import style from './CartItem.module.scss';

function CartItem (props) {
    return (
        <div className={style.cartItem}>
              <img src={props.imgUrl} width={70} height={70} className={style.cartItemImg} alt="sneakers"/>
              <div>
                <p>{props.title}</p>
                <b>{props.price} руб.</b>
              </div>
              <button>
                <img src='/img/remove_btn.svg' width={32} height={32} alt="cross" onClick={() => props.onRemove(props.id)}/>
              </button>
        </div>
    );
};
export default CartItem;