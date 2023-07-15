import React, { useEffect } from 'react';
import style from './CatalogItem.module.scss';
import ContentLoader from "react-content-loader"

function CatalogItem (props) {

  useEffect(() => {
    if (props.cartItems.filter(item => item.img === props.imageUrl).length === 0) {
      setIsAdded(false)
    }
  }, [props.cartItems])

  const [isAdded, setIsAdded] = React.useState(props.conditionAdded);
  const [isLiked, setIsLiked] = React.useState(props.conditionLiked);

  const onAdd = () => {
    props.onAdd();
    setIsAdded(!isAdded);
  };

  const onLike = () => {
    props.onLike();
    setIsLiked(!isLiked);
  };

    return (
        <div className={style.catalogItem}>
          {props.isLoaded ? 
            <>
              <img src={isLiked ? './img/like.svg' : './img/gray_like.svg'} width={32} height={32} className={style.like} alt="heart" onClick={onLike}/>
              <img className={style.itemImg} src={props.imageUrl} width={133} height={112} alt="sneakers"/>
              <div className={style.itemName}>
                <p>{props.title}</p>
              </div>
              <div className={style.itemPrice}>
                <div className='price'>
                  <p>ЦЕНА:</p>
                  <h5>{props.price} руб.</h5>
                </div>
                <img src={isAdded ? "./img/added.svg" : "./img/add.svg"} width={32} height={32} alt="plus" className={style.toAdd} onClick={onAdd}/>
              </div>
            </> :
            <ContentLoader 
              speed={2}
              width={210}
              height={260}
              viewBox="0 0 210 260"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
              {...props}
            >
              <rect x="30" y="203" rx="8" ry="8" width="80" height="24" /> 
              <rect x="30" y="20" rx="10" ry="10" width="150" height="100" /> 
              <rect x="30" y="147" rx="3" ry="3" width="150" height="15" /> 
              <rect x="30" y="166" rx="3" ry="3" width="93" height="15" /> 
              <rect x="148" y="195" rx="8" ry="8" width="32" height="32" />
          </ContentLoader>}
          </div>
    );
};

export default CatalogItem;
