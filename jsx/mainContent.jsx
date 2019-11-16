import Products from "./Products.jsx";
import Header from './Header.jsx';
import DetailView from "./DetailView";
import Footer from "./Footer";
import React from "react";

class MainContent extends React.Component{  
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
              {/* <Header
              handleSearch={this.props.handleSearch}
              totalItem={this.props.totalItem}
              totalPrice={this.props.totalPrice}
              iconShake={this.props.iconShake}
              shoppingCartProducts={this.props.shoppingCartProducts}
              removeCartProduct={this.props.removeCartProduct}
              checkout={this.props.checkout}>
                  </Header>   */}
                <Products
              productList={this.props.productList}
              searchTerm={this.props.searchTerm}
              handleAddCart={this.props.handleAddCart}
              handleOpenModel={this.props.handleOpenModel}/>
                  <DetailView
                    product={this.props.product}  
                    handleCloseModel={this.props.handleCloseModel}    
                    openModel={this.props.openModel}
                   />
                {/* <Footer/> */}
            </div>
        )
    }    
}
// ReactDOM.render(<BasicExample/>,document.getElementById("root"))
export default MainContent;