import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'
import EmptyCartPage from "./emptyPage/EmptyCartPage"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Container from 'react-bootstrap/Container'
  import Row from 'react-bootstrap/Row'
  import Col from 'react-bootstrap/Col'

class JumpOutModal extends React.Component{
    constructor(props){
        super(props)
        this.state={
            show:false,
            // setShow:false,
        }
    }
    
    render(){
        
        const handleClose = () => this.setState({show:false});
        const handleShow = () => this.setState({show:true});
        const show=this.state.show;
        let cartItems; 
    cartItems = this.props.cartItem.map(
      product => {
        return(
          <Row className="cart-product" key={product.id}>
            <Col>
                <img
                className="cart-product-img"
                src={product.imgLink}>
                </img>
            </Col>
            <Col className="cart-product-info">
              <p className="cart-product-name">{product.productName}</p>
              {/* <p className="cart-product-price">${product.price}</p> */}
            </Col>
            {/* <td className="cart-product-total"> */}
            <Col>
              <p className="cart-product-qty">{product.quantity}/件</p>
              <p className="cart-product-price-total">NT${product.totalPrice}</p>
            </Col>
            {/* </td> */}
            <Col>
                <a   className="cart-product-remove"
                    href="#"
                onClick={this.props.removeCartProduct.bind(this,product.id)}
                ><i className="fas fa-trash-alt"></i>
                </a>
            </Col>
          </Row>
        );
      });

    let cartView;

    let cartLength = cartItems.length;

    if(cartLength < 1){
      cartView = <EmptyCartPage></EmptyCartPage>
    }
    else{
      cartView = 
      <Container className="cart-products">
        {cartItems}
      </Container>
    }

        return(
    <div>
      <div  onClick={handleShow} className={this.props.iconShake ? "tada" : ""}>
        <i className="fa fa-shopping-cart"></i>
        <span className="navBarCartTitle"></span>
        <span class="badge badge-primary">{this.props.totalItem}</span>
      </div>

      <Modal size="lg" show={show} onHide={handleClose}
      scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>我的購物車</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {cartView}
        </Modal.Body>
        <Modal.Footer>
          
          <Link to="/checkout">
            <Button variant="success"
            // className={this.props.checkout ? "" : "disable"}
            >
            <i class="fas fa-cart-plus"></i>                        
            結帳 NT${this.props.totalPrice}
            </Button>
          </Link>



        </Modal.Footer>
      </Modal>
    </div>
        )
    }
}


// function JumpOutModal() {
//   }
  
  export default JumpOutModal;
//   render(<Example />);