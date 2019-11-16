import Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import DropdownButton from 'react-bootstrap/DropdownButton'
import NavDropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
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
import JumpOutModal from "./jumpOutModal.jsx";

class MyNavbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          openCart: false, //判斷現在是否開啟購物車頁面
          cartItem: this.props.shoppingCartProducts,
          };
        this.cartView = React.createRef();
    
      }
    
      // componentDidMount() { //在元素生成時將判斷是否點擊購物車的判斷加入事件中
      //   document.addEventListener(
      //     "click",
      //     this.handleClickOutside.bind(this),
      //     true
      //   );
      // }
    
      // componentWillUnmount() { //元素要被回收時，是否點擊購物車的判斷移出事件中
      //   document.removeEventListener(
      //     "click",
      //     this.handleClickOutside.bind(this),
      //     true
      //   );
      // }
    
      // handleClickOutside=(e)=>{ //判斷是否點擊購車外面
      //   const cartDomNode = this.cartView; //找到購物車真正的DOM元素
      //   // console.log(this.state);
      //   if(cartDomNode.current.classList.contains("active")
      //   && (!cartDomNode || !cartDomNode.current.contains(e.target))){ //判斷點擊事件是否包含在購物車底下，若無關閉視窗
      //     this.setState({
      //       openCart: false
      //     }
      //     ,()=>console.log(cartDomNode.current.classList.value)
          
      //     );
      //     e.stopPropagation(); //為了防止點擊購物車button時會再執行的事件
      //   }
      // }
    
    
      // openCartView =(e)=>{ //開啟購物車
      //   // console.log(this.state.openCart);
      //   this.setState(
      //     prevState => ({
      //       openCart: !(prevState.openCart)
      //     })
      //   )
      // }
    
    render(){
             //建立購物車畫面
    // let cartItems; 
    // cartItems = this.state.cartItem.map(
    //   product => {
    //     return(
    //       <li className="cart-product" key={product.id}>
    //         <img
    //           className="cart-product-img"
    //           src={product.imgLink}>
    //         </img>
    //         <div className="cart-product-info">
    //           <p className="cart-product-name">{product.productName}</p>
    //           {/* <p className="cart-product-price">${product.price}</p> */}
    //         </div>
    //         <div className="cart-product-total">
    //           <p className="cart-product-qty">{product.quantity}/件</p>
    //           <p className="cart-product-price-total">${product.totalPrice}</p>
    //         </div>
    //         <a   className="cart-product-remove"
    //              href="#"
    //           onClick={this.props.removeCartProduct.bind(this,product.id)}
    //         ><i className="fas fa-trash-alt"></i>
    //         </a>
    //       </li>
    //     );
    //   });

    // let cartView;

    // let cartLength = cartItems.length;

    // if(cartLength < 1){
    //   cartView = <EmptyCartPage></EmptyCartPage>
    // }
    // else{
    //   cartView = 
    //   <ul className="cart-products">
    //     {cartItems}
    //   </ul>
    // }

    

        return(
  
        <Navbar expand="lg" className="navbarObj" id="navbar">
          <Navbar.Brand href="#home">
            <div className="navLogo">
              <i className="fas fa-user-graduate logo"></i>
              <span className="navBrand">好學生文具網</span>
            </div>
          </Navbar.Brand>
          <Navbar.Brand>
          <JumpOutModal
              cartItem={this.props.shoppingCartProducts}
              removeCartProduct={this.props.removeCartProduct}
              totalPrice={this.props.totalPrice}
              totalItem={this.props.totalItem}
              iconShake={this.props.iconShake}
              />
          </Navbar.Brand>  
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav className="navbarHome">
              <Link to="/">
                 
                  <i class="fas fa-home"></i>
                  <span className="navbarHomeTitle">
                    首頁
                  </span>
                  
              </Link>
            </Nav>
            <Nav className="navbarCupon">
              <Link to="/cupon">
                  <div className="navbarCuponTitle">
                  優惠活動
                  </div>
                  
              </Link>
            </Nav>
            {/* <Nav className="jumpOut">
              
              <JumpOutModal
              cartItem={this.props.shoppingCartProducts}
              removeCartProduct={this.props.removeCartProduct}
              totalPrice={this.props.totalPrice}
              totalItem={this.props.totalItem}
              iconShake={this.props.iconShake}
              />
            </Nav> */}
            
          </Nav>
        </Navbar.Collapse>
        
      </Navbar>
  
        )
    }
}
export default MyNavbar;