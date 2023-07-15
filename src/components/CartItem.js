function CartItem () {
    return (
        <div className='cart_item'>
              <img src='/img/1.png' width={70} height={70} className='cart_item_img' alt="sneakers"/>
              <div className='cart_item_info'>
                <p>Мужские кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <button className='remove_cart_item'>
                <img src='/img/remove_btn.svg' width={32} height={32} alt="cross"/>
              </button>
        </div>
    )
}

export default CartItem;