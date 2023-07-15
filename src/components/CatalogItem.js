function CatalogItem () {
    return (
        <div className='catalog_item'>
            <button className='to_like'>
              <img src='./img/like.svg' width={32} height={32} className='like' alt="heart"/>
            </button>
            <img className="item-img" src="./img/1.png" width={133} height={112} alt="sneakers"/>
            <div className='item-name'>
              <p>Мужские Кроссовки</p>
              <p>Nike Blazer Mid Suede</p>
            </div>
            <div className='item-price'>
              <div className='price'>
                <p>ЦЕНА:</p>
                <h5>12 999 руб.</h5>
              </div>
              <button className='to_add'>
                <img src="./img/add.svg" width={32} height={32} alt="plus"/>
              </button>
            </div>
          </div>
    )
}

export default CatalogItem;
