import React, { Component } from "react";
// import { findDOMNode } from "react-dom";
// import SearchBar from "./SearchBar";

import ScrollArea from "react-scrollbar";
import EmptyCartPage from "./emptyPage/EmptyCartPage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      openCart: false, //判斷現在是否開啟購物車頁面
      cartItem: this.props.shoppingCartProducts,
      };
    this.cartView = React.createRef();

  }

  componentDidMount() { //在元素生成時將判斷是否點擊購物車的判斷加入事件中
    document.addEventListener(
      "click",
      this.handleClickOutside.bind(this),
      true
    );
  }

  componentWillUnmount() { //元素要被回收時，是否點擊購物車的判斷移出事件中
    document.removeEventListener(
      "click",
      this.handleClickOutside.bind(this),
      true
    );
  }

  handleClickOutside=(e)=>{ //判斷是否點擊購車外面
    const cartDomNode = this.cartView; //找到購物車真正的DOM元素
    // console.log(this.state);
    if(cartDomNode.current.classList.contains("active")
    && (!cartDomNode || !cartDomNode.current.contains(e.target))){ //判斷點擊事件是否包含在購物車底下，若無關閉視窗
      this.setState({
        openCart: false
      }
      ,()=>console.log(cartDomNode.current.classList.value)
      
      );
      e.stopPropagation(); //為了防止點擊購物車button時會再執行的事件
    }
  }


  openCartView =(e)=>{ //開啟購物車
    // console.log(this.state.openCart);
    this.setState(
      prevState => ({
        openCart: !(prevState.openCart)
      })
    )
  }

  render() {

    //建立購物車畫面
    let cartItems; 
    cartItems = this.state.cartItem.map(
      product => {
        return(
          <li className="cart-product" key={product.id}>
            <img
              className="cart-product-img"
              src={product.imgLink}>
            </img>
            <div className="cart-product-info">
              <p className="cart-product-name">{product.productName}</p>
              <p className="cart-product-price">${product.price}</p>
            </div>
            <div className="cart-product-total">
              <p className="cart-product-qty">X{product.quantity}</p>
              <p className="cart-product-total">${product.totalPrice}</p>
            </div>
            <a   className="cart-product-remove"
                 href="#"
              onClick={this.props.removeCartProduct.bind(this,product.id)}
            ><i className="fas fa-trash-alt"></i>
            </a>
          </li>
        );
      });

    let cartView;

    let cartLength = cartItems.length;

    if(cartLength < 1){
      cartView = <EmptyCartPage></EmptyCartPage>
    }
    else{
      cartView = 
      <ul className="cart-products">
        {cartItems}
      </ul>
    }

    

    return (
      <header>
        <div className="container">
          <div className="header-logo">
            <i className="fas fa-user-graduate logo"></i>
          </div>
          <h1 className="header-title">好學生文具線上商城</h1>
        
          {/* <img
            src="https://drive.google.com/uc?export=view&id=1GYnHh1RzfHyJcyBVxrvojWiqg9-A5Ges"
            className="logo"
          ></img> */}
          {/* <div className="search-area">
            <SearchBar 
              handleSearch={this.props.handleSearch}>
            </SearchBar>
          </div> */}
          <div className="shopping-cart">
            <div className="cart-info">
              <table>
                <tbody>
                  <tr>
                    <td>No of Item</td>
                    <td> : </td>
                    <td>{this.props.totalItem}</td>
                  </tr>
                  <tr>
                    <td>Total Cost</td>
                    <td> : </td>
                    <td>{this.props.totalPrice}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="cart-icon">
              <img 
                className={this.props.iconShake ? "tada" : ""}
                src="https://res.cloudinary.com/smallga/image/upload/v1543392995/icon/shopping-purse-icon.png"
                onClick={this.openCartView}
              >
              </img>
              <span className="cart-counter">
                {cartLength}
              </span>
            </div>
            <div ref={this.cartView} className={this.state.openCart ? "cart-view active" : "cart-view"}>
              <ScrollArea
                className = "cart-Scroll"
                speed={0.8}
                smoothScrolling={true}
                stopScrollPropagation={true}
              >
                  {cartView}
              </ScrollArea>
              <div className ="cart-acton-area">
              <Link to="/about">
                <button
                 className={this.props.checkout ? "" : "disable"}
                >
                 結帳 ${this.props.totalPrice}
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;