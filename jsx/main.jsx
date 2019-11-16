// import Products from "./Products.jsx";
import MainContent from "./mainContent.jsx"
import MainCheckout from "./mainCheckout.jsx"
// import Header from './Header.jsx';
// import DetailView from "./DetailView";
// import Footer from "./Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component{  
    constructor(props){
        super(props)
        this.state = {
          productList: [], //商品清單
          searchTerm: "", //搜尋字串
          totalPrice: 0, //總共價錢
          totalProduct: 0, //總共商品
          shoppingCartProducts: [],
          iconShake: false, //icon 震動參數
          checkout: false, //可否結帳
          openModel: false, //是否開啟商品資訊視窗
          selectProduct: [], //選中商品
        };
      }
      handleSearch = (searchTerm) =>{ //更改搜尋字串
        this.setState(
          {
            searchTerm: searchTerm
          }
          // ,()=>{
          //   console.log(this.state.searchTerm)
          // }
        )
      }
    
      getProduct(){
        // var productList={ProductList}
        var productList=[
          {
            "id": 1,
            "productName": "計算機",
            "price": 500,
            "imgLink": "https://res.cloudinary.com/dduqceeuy/image/upload/v1572317902/caculater_fm5i2w.jpg",
            "information": "黑色計算機"
          },
          {
            "id": 2,
            "productName": "圓規",
            "price": 240,
            "imgLink": "https://res.cloudinary.com/dduqceeuy/image/upload/v1572318228/Compasses_o208ft.jpg",
            "information": "白色圓規"
          },
          {
            "id": 3,
            "productName": "削鉛筆機",
            "price": 220,
            "imgLink": "https://res.cloudinary.com/dduqceeuy/image/upload/v1572318645/Sharpener_g6la2t.jpg",
            "information": "藍色削鉛筆機"
          },
          {
            "id": 4,
            "productName": "直尺",
            "price": 20,
            "imgLink": "https://res.cloudinary.com/dduqceeuy/image/upload/v1572318629/ruler_cvzm7n.jpg",
            "information": "塑膠直尺-15公分"
          },
          {
            "id": 5,
            "productName": "彩色蠟筆-5入",
            "price": 120,
            "imgLink": "https://res.cloudinary.com/dduqceeuy/image/upload/v1572318610/pigment_ej2j7z.jpg",
            "information": "日本進口 彩色蠟筆-5入"
          },
          {
            "id": 6,
            "productName": "貓頭鷹鉛筆盒",
            "price": 80,
            "imgLink": "https://res.cloudinary.com/dduqceeuy/image/upload/v1572318593/pencil_case_purple_bphysu.jpg",
            "information": "貓頭鷹鉛筆盒-紫色，帆布製"
          },
          {
            "id": 7,
            "productName": "青蛙鉛筆盒",
            "price": 80,
            "imgLink": "https://res.cloudinary.com/dduqceeuy/image/upload/v1572318574/pencil_case_frog_tzizoi.jpg",
            "information": "青蛙鉛筆盒-綠色,塑膠製"
          },
          {
            "id": 8,
            "productName": "貓咪鉛筆盒",
            "price": 80,
            "imgLink": "https://res.cloudinary.com/dduqceeuy/image/upload/v1572318549/pencil_case_cat_pspwxb.jpg",
            "information": "貓咪鉛筆盒-金屬製"
          },
          {
            "id": 9,
            "productName": "白色筆筒",
            "price": 100,
            "imgLink": "https://res.cloudinary.com/dduqceeuy/image/upload/v1572318532/pen_holder_white_wvypge.jpg",
            "information": "白色筆筒- 地圖圖形"
          },
          {
            "id": 10,
            "productName": "藍色筆筒",
            "price": 100,
            "imgLink": "https://res.cloudinary.com/dduqceeuy/image/upload/v1572318513/pen_holder_blue_kd5qrv.jpg",
            "information": "藍色筆筒-羊駝圖形"
          },
          {
            "id": 11,
            "productName": "黑色筆筒",
            "price": 100,
            "imgLink": "https://res.cloudinary.com/dduqceeuy/image/upload/v1572318495/pen_holder_black_vca9ch.jpg",
            "information": "黑色筆筒- 地圖圖形"
          },
          {
            "id": 12,
            "productName": "藍色原子筆",
            "price": 10,
            "imgLink": "https://res.cloudinary.com/dduqceeuy/image/upload/v1572318474/pen_blue_pqcpy5.jpg",
            "information": "藍色原子筆"
          }
        ]
        
        this.setState({
            productList: productList
          }
        //   ,()=>{  console.log(this.state)} 
          )

      }
      handleOpenModel = (id, e) => { //透過id 找尋被選擇商品,並且打開Model

        let selectProduct;
    
        selectProduct = this.state.productList.find(
          product => {
            return product.id === id;
          }
        );
    
        this.setState({
          openModel: true,
          selectProduct: selectProduct
        })
        e.preventDefault();
      }
    
      removeCartProduct = (id, e) =>{ //找出需要刪除的商品，並刪除
        let cartItem = this.state.shoppingCartProducts;
        let index = cartItem.findIndex(
          (x) => {
            return x.id === id;
          }
        )
        
        cartItem.splice(index, 1);
    
        this.setState({
          shoppingCartProducts: cartItem
        },() =>{
          this.countShoppingProducts();
        })
        e.preventDefault();
      }
      handleCloseModel = () => { //將資訊室窗關閉
        this.setState({
          openModel: false
        })
      }
    
    
      UNSAFE_componentWillMount() { //建置初始化商品
        this.getProduct();
      }
    
    countShoppingProducts = () =>{ //計算商品總數跟總價錢

      var totalPrice = 0;
  
      for(var product of this.state.shoppingCartProducts){
        totalPrice += product.totalPrice;
      }
  
      let checkout = false;
  
      if(this.state.shoppingCartProducts.length > 0){
        checkout = true;
      }
      
      this.setState(
        {
          checkout: checkout,
          totalProduct: this.state.shoppingCartProducts.length,
          totalPrice: totalPrice
        }
        // ,()=>{
        //   console.log(this.state.shoppingCartProducts)
        // }
      )
    }
    handleOpenModel = (id, e) => { //透過id 找尋被選擇商品,並且打開Model

      let selectProduct;
  
      selectProduct = this.state.productList.find(
        product => {
          return product.id === id;
        }
      );
  
      this.setState({
        openModel: true,
        selectProduct: selectProduct
      }
      ,()=>{console.log(this.state.openModel)}
      )
      e.preventDefault();
    }
  

    handleAddCart = (product) =>{ //將商品加入購物車

      let cartProduct = this.state.shoppingCartProducts;
  
      //透過找index 判斷是否有相同商品，若為-1代表沒相同商品
      let index = cartProduct.findIndex(
        x => {
          return x.id === product.id;
        }
      );
  
      // console.log(index);
  
      if(index == -1){ //若是沒有相同商品，直接push
        this.setState(
          prevState => {
            shoppingCartProducts: prevState.shoppingCartProducts.push(product);
          },
          () => {
            this.countShoppingProducts();
          }
        )
      }
      else{ //若有相同商品，透過index更改，在改變狀態
        cartProduct[index].quantity = 
          cartProduct[index].quantity + product.quantity;
        cartProduct[index].totalPrice = 
        cartProduct[index].totalPrice + product.totalPrice
        this.setState(
          prevState => {
            shoppingCartProducts: cartProduct;
          },
          () => {
            this.countShoppingProducts();
          }
        )
      }
      //以下是將 icon 新增震動特效，通知使用者
      this.setState(
        {
          iconShake: true    
        }
      )
      setTimeout( //使之振動0.5秒
        () => {
          this.setState({
            iconShake: false
          })
        },
        500
      )
    }
    render(){
      
        return(
          
        // <Router>
          <div className="App">
          {/* <Switch> */}
            {/* <Route exact path="/"> */}
            <MainContent
               handleSearch={this.handleSearch}
               totalItem={this.state.totalProduct}
               totalPrice={this.state.totalPrice}
               iconShake={this.state.iconShake}
               shoppingCartProducts={this.state.shoppingCartProducts}
               removeCartProduct={this.removeCartProduct}
               checkout={this.state.checkout}               
               productList={this.state.productList}
               searchTerm={this.state.searchTerm}
               handleAddCart={this.handleAddCart}
               handleOpenModel={this.handleOpenModel}
               product={this.state.selectProduct}
               handleCloseModel={this.handleCloseModel}
               openModel={this.state.openModel}                          
              />
            {/* </Route> */}
            {/* <Route path="/about">
              
              <MainCheckout/>
            </Route> */}
            {/* <Route path="/dashboard">
              <Dashboard />
            </Route> */}
          {/* </Switch> */}
          </div>
      // </Router>
      
        )
    }
}
ReactDOM.render(<App/>,document.getElementById("root"))
// export default App;
