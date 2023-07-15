import './App.scss';
import CatalogItem from './components/CatalogItem';
import Header from './components/Header';
import CartSidebar from './components/CartSidebar';

const arr = [
  {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, img: './img/1.png'},
  {name: 'Мужские Кроссовки Nike Air Max 270', price: 12999, img: './img/2.png'},
  {name: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, img: './img/3.png'},
  {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, img: './img/4.png'},
  {name: 'Мужские Кроссовки Under Armour Curry 8', price: 15199, img: './img/5.png'},
  {name: 'Мужские Кроссовки Nike Kyrie 7', price: 11299, img: './img/6.png'},
  {name: 'Мужские Кроссовки Jordan Air Jordan 11', price: 10799, img: './img/7.png'},
  {name: 'Мужские Кроссовки Nike LeBron XVIII', price: 16499, img: './img/8.png'},
  {name: 'Мужские Кроссовки Nike Lebron XVIII Low', price: 13999, img: './img/9.png'},
  {name: 'Мужские Кроссовки Nike Kyrie Flytrap IV', price: 11299, img: './img/10.png'}
];

function App() {
  return (
    <div className="container">
      <CartSidebar />
      <Header />
      <div className='content'>
        <div className='catalog_header'>
          <h5>Все кроссовки</h5>
          <div className='search'>
            <img src='./img/search.png' alt='search' width={14.25} height={14.25}/>
            <input type='text' placeholder='Поиск...'></input>
          </div>
        </div>
        <div className='catalog'>
          {arr.map((obj) => (
            <CatalogItem title={obj.name} price={obj.price} imageUrl={obj.img}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;