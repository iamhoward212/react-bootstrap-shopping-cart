import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class TestCheckout extends React.Component{  
    constructor(props){
        super(props);
        this.state = {
          openCart: false, //判斷現在是否開啟購物車頁面
          cartItem: this.props.shoppingCartProducts,
          };
        // this.cartView = React.createRef();
    
      }
    
    render(){
        let cartItems; 
    cartItems = this.state.cartItem.map(
      product => {
        return(
          <li className="cart-product" key={product.id}>
            <img
              className="cart-product-img"
              src={product.imgLink}
            >
            </img>
            <div className="cart-product-info">
              <p className="cart-product-name">{product.productName}</p>
              <p className="cart-product-price">${product.price}</p>
            </div>
            <div className="cart-product-total">
              <p className="cart-product-qty">X{product.quantity}</p>
              <p className="cart-product-total">${product.totalPrice}</p>
            </div>
            <a
              className="cart-product-remove"
              href="#"
              onClick={this.props.removeCartProduct.bind(this,product.id)}
            >
            
            <i className="fas fa-trash-alt"></i>
            </a>
          </li>
        );
      });


       let cartView; 
        cartView = 
        <ul className="cart-products">
          {cartItems}
        </ul>
        return(
            <div>
                 <h1>TestCheckout page</h1>
                <Link to="/">Home</Link>

                {cartView}
            </div>
           
        )
    }

}

export default TestCheckout;