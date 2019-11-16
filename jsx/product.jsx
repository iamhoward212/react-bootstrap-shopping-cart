import React from "react";
import Conter from "./Counter"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Product extends React.Component{  
    constructor(props){
        super(props);
        this.state = {
          quantity: 1
        };
      }
      handleUpdateQuantity = (productQty) => { //更新商品數量
        this.setState(
          {
            quantity: productQty
          }
        )
      }
    
      handleAddCart = () => { //將商品加入購物車

        let totalPrice = this.props.price * this.state.quantity; //計算總價格
        let discountedPrice= this.props.price*0.5;  //使用優惠卷後的折扣價
        let discountedTotalPrice=this.props.price * this.state.quantity*0.5;
        let productDetail = {
          id: this.props.id,
          productName: this.props.productName,
          price: this.props.price,
          quantity: this.state.quantity,
          imgLink: this.props.imgLink,
          totalPrice: totalPrice,
          discountedPrice:discountedPrice,
          discountedTotalPrice:discountedTotalPrice,
        }
    
        this.props.handleAddCart(productDetail); //將商品資訊回傳父組件，加入購物車
    
      }
    
    render(){
        return (
    // <div className="product">
    //     <div className="product-img">
    //       <img
    //           src={this.props.imgLink}
    //           onClick={this.props.openMadel.bind(this,this.props.id)}                    >
    //       </img>
    //     </div>
    //     <h4> {this.props.productName}</h4>
    //     <p className="product-price">
    //         NT$ {this.props.price}  </p>
    //     <div className="product-add-action">
    //       <Conter 
    //         handleUpdateQuantity={this.handleUpdateQuantity}
    //         productQuantity={this.state.quantity}></Conter>
    //       <button
    //         className="product-addCart-btn"
    //         onClick={this.handleAddCart}>加入購物車</button>
    //     </div>
    //   </div>
<div className="col-md-12 col-lg-6 col-xl-3">
  <Card className="product" 
         style={{ width: '18rem' }}>
    <Card.Img className="product-img"
              variant="top" src={this.props.imgLink} 
              onClick={this.props.openMadel.bind(this,this.props.id)}                  
    />
  <Card.Body>
    <Card.Title> {this.props.productName}</Card.Title>
    <Card.Text >
        <h5 className="product-price">
        NT$ {this.props.price}  
        </h5>
        
        <h5 className="product-add-action">
          <Conter 
            handleUpdateQuantity={this.handleUpdateQuantity}
            productQuantity={this.state.quantity}></Conter>
         
        </h5>
    </Card.Text>
    <Button variant="primary"
        className="product-addCart-btn"
        onClick={this.handleAddCart}
    >加入購物車</Button>
  </Card.Body>
</Card>
</div>
        )
    }
}

export default Product;