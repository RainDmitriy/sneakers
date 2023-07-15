import CatalogItem from './components/CatalogItem';
import Header from './components/Header';
import CartSidebar from './components/CartSidebar';
import React, { useEffect } from 'react';
import axios from 'axios';

function App() {

  const [cartCost, setCartCost] = React.useState(0);
  const [isCartActive, setIsCartActive] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [catalogItems, setCatalogItems] = React.useState([
      {
        id: 1,
        img: "test1",
        name: "test1",
        price: 100
      },
      {
        id: 2,
        img: "test2",
        name: "test2",
        price: 200
      },
      {
        id: 3,
        img: "test3",
        name: "test3",
        price: 300
      },
      {
        id: 4,
        img: "test4",
        name: "test4",
        price: 400
      },
      {
        id: 5,
        img: "test5",
        name: "test5",
        price: 500
      },
      {
        id: 6,
        img: "test6",
        name: "test6",
        price: 600
      },
      {
        id: 7,
        img: "test7",
        name: "test7",
        price: 700
      },
      {
        id: 8,
        img: "test8",
        name: "test8",
        price: 800
      }
  ]);
  const [searchValue, setSearchValue] = React.useState('');
  const [isFavouriteActive, setIsFavouriteActive] = React.useState(false);
  const [likedItems, setLikedItems] = React.useState([]);
  const [orderedItems, setOrderedItems] = React.useState([]);
  const [isOrderedActive, setIsOrderedActive] = React.useState(false);
  const [IsOrderCreated, setIsOrderCreated] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const toAdd = async (obj) => {
    try {
      const {data} = await axios.post("https://64ae171eb470006a5ec69a88.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, data]);
    } catch (error) {
      console.log("Не удалось добавить в корзину!");
    }
  };

  const toRemove = async (id) => {
    try {
      await axios.delete("https://64ae171eb470006a5ec69a88.mockapi.io/cart/" + id);
      setCartItems((prev) => prev.filter(item => item.id != id));
    } catch (error) {
      console.log("Не удалось удалить из корзины!");
    }
  };

  const toLike = async (obj) => {
    try {
      const {data} = await axios.post("https://64b17b10062767bc4826456e.mockapi.io/favourite", obj);
      setLikedItems((prev) => [...prev, data]);
    } catch (error) {
      console.log("Не удалось добавить в закладки!");
    }
  };

  const toUnlike = async (id) => {
    try {
      await axios.delete("https://64b17b10062767bc4826456e.mockapi.io/favourite/" + id);
      setLikedItems((prev) => prev.filter(item => item.id != id));
    } catch (error) {
      console.log("Не удалось удалить закладки!");
    }
  };

  const getData = async () => {
    try {
      setIsLoading(true);
      await axios.get("https://64ae171eb470006a5ec69a88.mockapi.io/cart")
        .then((res) => setCartItems(res.data));
      await axios.get("https://64b17b10062767bc4826456e.mockapi.io/favourite")
        .then((res) => setLikedItems(res.data));
      await axios.get("https://64ae171eb470006a5ec69a88.mockapi.io/catalog")
        .then((res) => setCatalogItems(res.data));
      await axios.get("https://64b17b10062767bc4826456e.mockapi.io/orders")
        .then((res) => setOrderedItems(res.data));
      setIsLoading(false);
    } catch (error) {
      console.log("Не удалось получить данные!");
    }
    
  };

  const getSummary = () => {
    let sum = 0;
    cartItems.forEach((obj) => {
      sum += obj.price;
    });
    setCartCost(sum);
  };

  const postOrder = async () => {
    try {
      const order = cartItems;
      setCartItems([]);
      await order.forEach((obj) => {
        axios.post("https://64b17b10062767bc4826456e.mockapi.io/orders", obj);
        axios.delete("https://64ae171eb470006a5ec69a88.mockapi.io/cart/" + obj.id);
      });
      await axios.get("https://64b17b10062767bc4826456e.mockapi.io/orders")
        .then((res) => setOrderedItems(res.data));
    } catch (error) {
      console.log("Не удалось создать заказ!");
    }
  };

  React.useEffect(() => {
    getData();
  }, [])

  React.useEffect(() => {
    getSummary();
  }, [cartItems]);
  
  return (
    <div className="container">
      <Header onClickUser = {() => setIsOrderedActive(true)} onClickCart = {() => setIsCartActive(true)} onClickLike = {() => setIsFavouriteActive(true)} cost = {cartCost}/>
      {isCartActive && <CartSidebar  
        cost = {cartCost} 
        items = {cartItems} 
        onClickRemove={(id) => toRemove(id)} 
        onClickClose = {() => setIsCartActive(false)} 
        onClickOrder={() => {postOrder(); setIsOrderCreated(true)}} 
        onClickFromOrder={() => {setIsOrderCreated(false); setIsCartActive(false)}}
        orderCreated={IsOrderCreated}/>}
        <div className='content'>
          <div className={isFavouriteActive||isOrderedActive ? 'catalog_header_active' : 'catalog_header'}>
            {(isFavouriteActive&&(likedItems.length > 0) || isOrderedActive&&(orderedItems.length > 0)) && <img src='./img/left.svg' alt='left' width={35} height={35} className='leftBtn' onClick={() => {setIsFavouriteActive(false); setIsOrderedActive(false);}}/>}
            <h5>{isFavouriteActive&&likedItems.length > 0 ? "Мои закладки" : (isFavouriteActive || isOrderedActive&&orderedItems.length === 0) ? "" : isOrderedActive ? "Мои заказы" : searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h5>
            {!(isFavouriteActive||isOrderedActive) && <div className='search'>
              <img src='./img/search.png' alt='search' width={14.25} height={14.25}/>
              <input type='text' placeholder='Поиск...' value={searchValue} onChange={(effect) => setSearchValue(effect.target.value)}></input>
              {searchValue && <img className='removeBtn' src='/img/remove_btn.svg' width={25} height={25} alt="cross" onClick = {() => setSearchValue('')}/>}
            </div>}
          </div>
          <div className={isFavouriteActive && likedItems.length === 0 || isOrderedActive && orderedItems.length === 0 ? 'catalogEmpty' : "catalog"}>
            {isFavouriteActive ? likedItems.length > 0 ?
            likedItems
              .map((obj) => 
              <CatalogItem 
                title = {obj.name} 
                price = {obj.price} 
                imageUrl = {obj.img}
                isLoaded
                key = {obj.img}
                cartItems = {cartItems}
                orderedItems = {orderedItems}
                conditionAdded = {cartItems.some(item => item.img === obj.img)}
                conditionLiked = {likedItems.some(item => item.img === obj.img)}
                onAdd = {() => {
                  if (cartItems.some(item => item.img === obj.img)) {
                    toRemove(cartItems.filter(item => item.img === obj.img)[0].id);
                  } else {
                    toAdd(obj);
                  }
                }}
                onLike = {() => {
                  if (likedItems.some(item => item.img === obj.img)) {
                    toUnlike(likedItems.filter(item => item.img === obj.img)[0].id);
                  } else {
                    toLike(obj);
                  }
                }}
              />
            ) :
            <div className='emptyWishList'>
              <img src={Math.random(0,1) < 0.5 ? './img/sad.svg' : './img/sad1.svg'} alt='sad' width={70} height={70}/>
              <b>Закладок нет :(</b>
              <p>Вы ничего не добавляли в закладки</p>
              <button onClick={() => setIsFavouriteActive(false)}>
                Вернуться назад
                <img src='./img/back.svg' width={14} height={12} alt='arrow'/>
              </button>
            </div>
            : isOrderedActive ? orderedItems.length > 0 ?
            orderedItems
              .map((obj) => 
              <CatalogItem 
                title = {obj.name} 
                price = {obj.price} 
                imageUrl = {obj.img}
                isLoaded
                key = {obj.img}
                cartItems = {cartItems}
                orderedItems = {orderedItems}
                conditionAdded = {cartItems.some(item => item.img === obj.img)}
                conditionLiked = {likedItems.some(item => item.img === obj.img)}
                onAdd = {() => {
                  if (cartItems.some(item => item.img === obj.img)) {
                    toRemove(cartItems.filter(item => item.img === obj.img)[0].id);
                  } else {
                    toAdd(obj);
                  }
                }}
                onLike = {() => {
                  if (likedItems.some(item => item.img === obj.img)) {
                    toUnlike(likedItems.filter(item => item.img === obj.img)[0].id);
                  } else {
                    toLike(obj);
                  }
                }}
              />
            ) : 
            <div className='emptyOrderedList'>
              <img src={Math.random(0,1) < 0.5 ? './img/sad.svg' : './img/sad1.svg'} alt='sad' width={70} height={70}/>
              <b>У вас нет заказов</b>
              <p>Вы нищеброд?</p>
              <p>Оформите хотя бы один заказ.</p>
              <button onClick={() => setIsOrderedActive(false)}>
                Вернуться назад
                <img src='./img/back.svg' width={14} height={12} alt='arrow'/>
              </button>
            </div> :
              catalogItems.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((obj) => 
                <CatalogItem
                  isLoaded = {!isLoading}
                  cartItems = {cartItems}
                  key = {obj.img}
                  orderedItems = {orderedItems}
                  conditionAdded = {cartItems.some(item => item.img === obj.img)}
                  conditionLiked = {likedItems.some(item => item.img === obj.img)}
                  onAdd = {() => {
                    if (cartItems.some(item => item.img === obj.img)) {
                      toRemove(cartItems.filter(item => item.img === obj.img)[0].id);
                    } else {
                      toAdd(obj);
                    }
                  }}
                  onLike = {() => {
                    if (likedItems.some(item => item.img === obj.img)) {
                      toUnlike(likedItems.filter(item => item.img === obj.img)[0].id);
                    } else {
                      toLike(obj);
                    }
                  }}
                  imageUrl = {obj.img}
                  title = {obj.name}
                  price = {obj.price}
                />)
            }
          </div>
        </div>      
    </div>
  );
}

export default App;