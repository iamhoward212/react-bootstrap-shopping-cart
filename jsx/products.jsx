import Product from "./Product.jsx";
import EmptySearchResult from "./emptyPage/EmptySearchResult";
import React from 'react'

class Products extends React.Component{  
  constructor(props){
    super(props);
    this.state = {
            
    }
  }

    render(){
        let productListData; //透過刪選之後的資料
        // let term = this.props.searchTerm;
        // let x;

        // console.log(term.toLowerCase())
        // function searchingFor(term) {
          
        //   return function(x) {
          
        //     return x.productName.toLowerCase().includes(term) || !term;
        //   };
        // }
    
        productListData = this.props.productList
        //  .filter(searchingFor(term))
         .map(product => {
            return (
              <Product
                key={product.id}
                id={product.id}
                price={product.price}
                productName={product.productName}
                imgLink={product.imgLink}
                handleAddCart={this.props.handleAddCart}
                openMadel={this.props.handleOpenModel}

              
              />
            )
          }
          );
          let productView;
          if(productListData.length <= 0 && term){
            productView = <EmptySearchResult
                            noResultMessage={this.props.noResultMessage}
                            noResultTip={this.props.noResultTip}/>
          }
          else {
            productView = (
              <div className="row productList">
                {productListData}
              </div>
            )
          }

    

        return(
            
              
              <div id="sectionProducts"
                 className="containerProduct"
              >
                {/* <div className="container">
                  <div className="row"> 
                      <div className="col-12 col-sm-6 col-md-3">

                      </div>
                  </div>
                </div> */}
                <div className="container product-wrapper">
                {productView}
                </div>
                <a href="#goToTop">
                  <button type="button"  className="goToTopButton">
                  <i class="fas fa-arrow-up"></i>
                  </button>
                </a>
              </div>
              
            
        )
    }
}

export default Products;
