import React from "react";
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import App from "./main.jsx"

// import Header from "./header.jsx"
import MainContent from "./mainContent.jsx"
// import Nav from "./nav.jsx"
// import Carousel from './carousel.jsx'
// import DemoCarousel from "./DemoCarousel.jsx"
// import MainCheckout from "./mainCheckout.jsx"
// import App from "./main.jsx"
// import Info from "./info.jsx"
import MainInfo from "./maininfo.jsx"
import DemoBootstrapCarousel from "./reactBootstrapCarousel.jsx"
import MyNavbar from "./navBar.jsx";
import MyNavbarWithoutCart from "./navBarWithoutCart.jsx";
import MyNavbarNoCart from "./navBarNoCart.jsx";
// import UserMenu from "./userMenu.jsx"
import FooterBootstrap from "./footerBootstrap.jsx"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import FooterBootstrapCloud from "./footerBootstrapCloud.jsx"
// import ControlledCarousel from "./reactCarousel.jsx"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CuponAlert from "./cuponAlert.jsx"

class BasicExample extends React.Component{  
  constructor(props){
    super(props)
    this.state = {
      num:0,
      productList: [], //商品清單
      searchTerm: "", //搜尋字串
      totalPrice: 0, //總共價錢
      totalProduct: 0, //總共商品
      shoppingCartProducts: [],
      iconShake: false, //icon 震動參數
      checkout: false, //可否結帳
      openModel: false, //是否開啟商品資訊視窗
      selectProduct: [], //選中商品
      receipt:{
        receiptType:2,
        taxId:"",
        receiptOption:[],
        fullName:"",  // 客戶姓名
        phoneNumber:"", //客戶電話
    },
    fullAddress:{
        city:"新竹市",
        district:"",
        postalCode:"",
        address:"", //客戶地址
        fullName:"",  // 客戶姓名
        phoneNumber:"", //客戶電話
        email:"",
        
    },
    payment:"尚未付款",
    discountCode:"", //優惠碼
    discountedTotalPrice:"", //輸入優惠碼後的消費總額
    checkCupon:"", //  有無輸入正確的優惠卷代碼 若是正確則此值會變成true
    cuponAlert:false, //若是輸入錯誤的優惠券代碼 則跳出警告訊息
    showJumpOutGoToPay:false,//控制jumpOutGoToPay的彈出功能
    };
   
  }
  handleShowJumpOutGoToPay = () =>{
    let showJumpOutGoToPay=this.state.showJumpOutGoToPay; 
    this.setState({showJumpOutGoToPay:true}
      ,()=>console.log(this.state)
      );
  }
  handleCloseJumpOutGoToPay = () =>{
    let showJumpOutGoToPay=this.state.showJumpOutGoToPay; 
    this.setState({showJumpOutGoToPay:false});
  }
  cuponButtonHandler(e){  //按下"送出"button 將優惠卷代碼送到state
    let discountCode=this.state.discountCode;
    if(discountCode=="0451"){        //驗證優惠卷代碼
       this.setState({checkCupon:true,cuponAlert:false})  
   }else{
     this.setState({cuponAlert:true})
   }          
   }
  inputHandler(e){   //在input 輸入優惠卷代碼     
    this.setState({discountCode:e.target.value}
      ,()=>{
        // console.log(this.state)
      }
      );   
  }




  paymentHandler=(e)=>{
    var element = document.getElementsByClassName("paymentButton");
    element[0].classList.add("payment-active");
    // console.log(element[0].classList)

    let payment=this.state.payment;
    payment="已完成付款"
    this.setState({payment:payment})
     
 }
 
  handleSearch = (searchTerm) =>{ //更改搜尋字串
    this.setState(
      {
        searchTerm: searchTerm
      }
  
    )
  }

  getProduct(){
  
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
      })
      // ,()=>{  console.log(this.state)} 
      // )

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
    console.log(index)
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
  let discountedTotalPrice=totalPrice*0.5; //輸入優惠券代碼後 折扣價設定
  this.setState(
    {
      checkout: checkout,
      totalProduct: this.state.shoppingCartProducts.length,
      totalPrice: totalPrice,
      discountedTotalPrice:discountedTotalPrice,
    }
    ,()=>{
      console.log(this.state)
    }
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

handleAddCart = (product) =>{ //將商品加入購物車
  let cartProduct = this.state.shoppingCartProducts;
  //透過找index 判斷是否有相同商品，若為-1代表沒相同商品
  let index = cartProduct.findIndex(
    x => {
      return x.id === product.id;
    }
  );
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
        // console.log(this.state)
      }
    )
  }
  
  //以下是將 icon 新增震動特效，通知使用者
  
  this.setState(
    {
      iconShake: true,
               
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
  
  let discountedTotalPrice=this.state.totalPrice*0.5;
  this.setState({discountedTotalPrice:discountedTotalPrice}
    ,()=>{
      // console.log(this.state)
    }
    )
}
  handler(){
    let num=this.state.num;
       num=num+1;
         this.setState({num:num})
  }
  isReady=()=>{   //"訂單資訊"中,判斷每個格子中的資料是否都有輸入，此function用於"金流付款"按鈕

  return this.checkIsReceiptTypeReady() && 
         this.checkIsAddressPickerReady()
}
checkIsAddressPickerReady=()=>{    //"訂單資訊"中，"收件地址"中的判斷每個格子中的資料是否都有輸入
  const {city,district,postalCode,address}=this.state.fullAddress
  if(city!="" && district!=""&&postalCode!=""&& address!=""){
      return true
  }else{
      return false
  }
}
checkIsReceiptTypeReady=()=>{    //"訂單資訊"中，"訂單資訊"中的判斷每個格子中的資料是否都有輸入
  let result=false
  if( this.state.receipt.fullName!=="" && this.state.receipt.phoneNumber!="" ){
      result=true; 
  }
  return result;
}
infoHandler=(name,value)=>{    // "訂單資訊"中，用來更新state中的資料
  this.setState({[name]:value},()=>{            
      console.log(this.state)
  })
}



  render(){
    return (
      <Router>
        <div className="router">
          <ul className="routerUl" id="goToTop">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
            <li>
              <Link to="/info">Info</Link>
            </li>
            <li>
              <Link to="/report">Report</Link>
            </li>
            <li>
              <Link to="/cupon">Cupon</Link>
            </li>
          </ul>
          
          <Switch>
            <Route path="/info">
            <MyNavbarWithoutCart
                handleSearch={this.handleSearch}
                totalItem={this.state.totalProduct}
                totalPrice={this.state.totalPrice}
                iconShake={this.state.iconShake}
                shoppingCartProducts={this.state.shoppingCartProducts}
                removeCartProduct={this.removeCartProduct}
                checkout={this.state.checkout}               
              />
              <MainInfo
            receipt={this.state.receipt}
            handler={this.infoHandler}
            fullAddress={this.state.fullAddress}
            aboutDisabled={!this.isReady()}
            showJumpOutGoToPay={this.state.showJumpOutGoToPay}
            handleShowJumpOutGoToPay={this.handleShowJumpOutGoToPay.bind(this)}
            handleCloseJumpOutGoToPay={this.handleCloseJumpOutGoToPay.bind(this)}
            />        
            <br/>
              {/* <FooterBootstrap/> */}
              <FooterBootstrapCloud/>
            </Route>
            <Route path="/checkout">
              <MyNavbarWithoutCart
                handleSearch={this.handleSearch}
                totalItem={this.state.totalProduct}
                totalPrice={this.state.totalPrice}
                iconShake={this.state.iconShake}
                shoppingCartProducts={this.state.shoppingCartProducts}
                removeCartProduct={this.removeCartProduct}
                checkout={this.state.checkout}               
              />
              <Checkout
              totalPrice={this.state.totalPrice}
              shoppingCartProducts={this.state.shoppingCartProducts}
              removeCartProduct={this.removeCartProduct}
              value={this.state.discountCode}
              discountedTotalPrice={this.state.discountedTotalPrice}
              onChange={this.inputHandler.bind(this)}
              onClick={this.cuponButtonHandler.bind(this)}
              checkCupon={this.state.checkCupon}
              cuponAlert={this.state.cuponAlert}
              />
              <FooterBootstrapCloud/>
            </Route>
            <Route exact path="/">
              
            <MyNavbar
              handleSearch={this.handleSearch}
              totalItem={this.state.totalProduct}
              totalPrice={this.state.totalPrice}
              iconShake={this.state.iconShake}
              shoppingCartProducts={this.state.shoppingCartProducts}
              removeCartProduct={this.removeCartProduct}
              checkout={this.state.checkout}               
              />
               <DemoBootstrapCarousel/>
               
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
              <br/>
             
              <br/>
            
              <FooterBootstrapCloud/>
            </Route>
            <Route exact path="/report">
              <MyNavbarWithoutCart
                handleSearch={this.handleSearch}
                totalItem={this.state.totalProduct}
                totalPrice={this.state.totalPrice}
                iconShake={this.state.iconShake}
                shoppingCartProducts={this.state.shoppingCartProducts}
                removeCartProduct={this.removeCartProduct}
                checkout={this.state.checkout}               
              />
              <Report
                shoppingCartProducts={this.state.shoppingCartProducts}
                totalPrice={this.state.totalPrice}
                receipt={this.state.receipt}
                fullAddress={this.state.fullAddress}
                payment={this.state.payment}
                paymentHandler={this.paymentHandler}
                checkCupon={this.state.checkCupon}
                discountedTotalPrice={this.state.discountedTotalPrice}
              />
              <br/>
              <FooterBootstrapCloud/>
            </Route>
            <Route path="/cupon">
              <MyNavbar
                handleSearch={this.handleSearch}
                totalItem={this.state.totalProduct}
                totalPrice={this.state.totalPrice}
                iconShake={this.state.iconShake}
                shoppingCartProducts={this.state.shoppingCartProducts}
                removeCartProduct={this.removeCartProduct}
                checkout={this.state.checkout}               
              />
              <Cupon/>
              <br/>
              <FooterBootstrapCloud/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
class Cupon extends React.Component{  
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="sectionCupon">
       <Container>
         <Row>
          <Col xs={1} md={3}></Col>
          <Col xs={10} md={6}
          className="cuponTitle">
                優惠活動
          </Col>
          <Col xs={1} md={3}></Col>
         </Row>
        <Row>
          <Col xs={1} md={3}></Col>
          <Col xs={10} md={6}
            className="cuponContent">
            <h2 className="cuponContentTitle">開幕慶優惠 !!</h2>
            <div className="cuponContentContent">輸入以下代碼，即可獲得全館5折優惠</div><br/>
            <div className="cuponContentCode">0451</div>

          </Col>
          <Col xs={1} md={3}></Col>
        </Row>
        
        </Container>
    </div>
    );
  }
}
class Report extends React.Component{  
  constructor(props){
    super(props)

}

    render(){
      let receipt=this.props.receipt;
      let checkCupon=this.props.checkCupon;

      let shoppingCartProducts=this.props.shoppingCartProducts;
      let test=shoppingCartProducts.map(
        function(item){
          return (
              <tr key={item.id}>
                <td>
                  <img
                    className="reportProductImg"
                    src={item.imgLink}>
                  </img>
                </td>
                <td>
                  {item.productName}
                  <div className={checkCupon? "cuponUsed cuponUsed-active ": "cuponUsed "}>
                    {/* 已套用優惠卷 */}
                  </div>
                </td>
                <td>NT${item.price}</td>
                <td>{item.quantity}/件</td>

                <td >
                       
                    <div className={checkCupon? " productPrice productPrice-active ": " productPrice "}>
                    NT${item.totalPrice}
                    </div>
                    <div className={checkCupon? " cuponUsedPrice cuponUsedPrice-active ": "cuponUsedPrice "}>
                    {/* 折扣價: */}
                    NT${item.discountedTotalPrice}
                    </div>

                </td>
              </tr>              
          )
        }
      )
      return(

    <div className="sectionReport">
      <div className="container">
        <h2 className="titleReport">購買資訊</h2>
        <div>
      
          <Table striped bordered hover className="checkOutTable">
            <thead className="checkOutTableThead" >
              <tr  >
                <td>商品圖片</td>
                <td>商品</td>
                <td>價格</td>
                <td>數量</td>
                <td>小計</td>
                </tr>
            </thead>
            <tbody>
            {test}
            </tbody>
            
          </Table>
      
         <div className="container">
          <div className="row">
             <div class="col-12 col-sm-6 "></div>
             <div class="col-12 col-sm-6 ">
              <div className="container">
               <div className="row totalPriceReport">
               <div className="col-8">
               訂單總計
               </div>
               <div className="col-4">
                 <div className={checkCupon? " productPrice productPrice-active ": " productPrice "}>
               NT${this.props.totalPrice}
               </div></div></div></div></div></div></div>
        <div className={this.props.checkCupon? "discountedPrice discountedPrice-active ":" discountedPrice "}>
        <div className="container">
          <div className="row">
             <div class="col-12 col-sm-6"></div>
             <div class="col-12 col-sm-6">
              <div className="container">
               <div className="row">
               <div className="col-8">
               折扣後，訂單總計
               </div>
               <div className="col-4">
               NT${this.props.discountedTotalPrice}
           </div></div></div></div></div></div></div>

      
        <h2 className="titlePersonalInfo">個人資訊</h2>
        <Table striped bordered hover className="checkOutTable">
        
          <thead className="checkOutTableThead">
            <tr >
              <td>訂單資料</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>姓名</td>
              <td>{this.props.fullAddress.fullName}</td>
            </tr>
            <tr>
              <td>電話</td>
              <td>{this.props.fullAddress.phoneNumber}</td>
            </tr>
            <tr>
              <td>電子郵件</td>
              <td>{this.props.fullAddress.email}</td>
            </tr>
            <tr>
              <td>地址</td>
              <td>{this.props.fullAddress.city}  
              {this.props.fullAddress.district} 
              ({this.props.fullAddress.postalCode})
              {this.props.fullAddress.address}</td>
            </tr>
            <tr>
              <td>付款狀態</td>
              <td>{this.props.payment}</td>
            </tr>
          </tbody>
        </Table>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 ">
              <Button
                variant="success"
                className="paymentButton"
                onClick={this.props.paymentHandler} 
              >確認付款</Button>
            </div>
        
          <div className="col-12 col-sm-6 "></div>
        </div>
       </div>
      </div>
     </div>
    </div>
      )
    }
}
class Checkout extends React.Component{  
  constructor(props){
    super(props);
    this.state = {
      cartItem: this.props.shoppingCartProducts,
      };
  }

  render(){
      
      let checkCupon=this.props.checkCupon;

      let cartItems; 
      cartItems = this.state.cartItem.map(
        function(item){
          return (
              <tr key={item.id}>
                <td>
                <img
              className="checkoutProducImg"
              src={item.imgLink}>
            </img>

                </td>
                <td>{item.productName}
                <div className={checkCupon? "cuponUsed cuponUsed-active ": "cuponUsed "}
                >
                  {/* 已套用優惠卷 */}
                  </div>
                
                </td>
                <td>
                NT${item.price}
                
                </td>
                <td>{item.quantity}/件</td>
                <td >
                       
                    <div className={checkCupon? " productPrice productPrice-active ": " productPrice "}>
                    NT${item.totalPrice}
                    </div>
                    <div className={checkCupon? " cuponUsedPrice cuponUsedPrice-active ": "cuponUsedPrice "}>
                    {/* 折扣價: */}
                    NT${item.discountedTotalPrice}
                    </div>
                </td>
                
              </tr>              
          )
        }
      )
    return (
<div className="sectionCheckout">
  <div className="container">
  <h2 className="titleCheckout">購買清單</h2>
  <div>
    <Table striped bordered hover className="checkOutTable">
      <thead className="checkOutTableThead">
        <tr>
          <th className="checkOutTableTheadProductPicture">商品圖片</th>
          <th className="checkOutTableTheadProduct">商品</th>
          <th className="checkOutTableTheadPrice">價格</th>
          <th className="checkOutTableTheadQty">數量</th>
          <th className="checkOutTableTheadTotalPrice">小計</th>
        </tr>
      </thead>
      <tbody className="checkOutTableTbody">
        {cartItems}
      </tbody>
    </Table>      
    <div className="container">
      <div className="row">
          <div className="col-12 col-sm-6 ">
            
                  <input
              placeholder="請輸入優惠碼"
              value={this.props.value}
              onChange={this.props.onChange}
            ></input>
            
                <Button variant="warning" 
            onClick={this.props.onClick}
            className="submitCuponCode"
          >送出</Button>
            
          </div>
          <CuponAlert
          cuponAlert={this.props.cuponAlert}
          />
          <div className="col-12 col-sm-6 "></div>
          </div>
          </div>
        
        <div className="container">
          <div className="row">
             <div class="col-12 col-sm-6 "></div>
             <div class="col-12 col-sm-6 ">
              <div className="container">
               <div className="row totalPriceCheckout">
               <div className="col-8">
               訂單總計
               </div>
               <div className="col-4">
                 <div className={checkCupon? " productPrice productPrice-active ": " productPrice "}>
               NT${this.props.totalPrice}
               </div></div></div></div></div></div></div>
        <div className={this.props.checkCupon? "discountedPrice discountedPrice-active ":" discountedPrice "}>
        <div className="container">
          <div className="row">
             <div class="col-12 col-sm-6"></div>
             <div class="col-12 col-sm-6">
              <div className="container">
               <div className="row">
               <div className="col-8">
               折扣後，訂單總計
               </div>
               <div className="col-4">
               NT${this.props.discountedTotalPrice}
           </div></div></div></div></div></div></div>
        <div className="container">
        <div className="row">
             <div class="col-12 col-sm-6"></div>
             <div class="col-12 col-sm-6">
              <div className="container">
               <div className="row">
               <div className="col-12 col-sm-6">
                <Link to="/">
                 <Button variant="primary" className="primary continuteToBuy">繼續購物</Button>
                </Link>
               </div>
               <div className="col-12 col-sm-6">
               <Link to="/info"><Button variant="success" className="primary goCheckout">結帳去</Button></Link>   
           </div></div></div></div></div></div>
        
        <br/>
        
        </div>
      </div>
    </div>
    );
  }
}
ReactDOM.render(<BasicExample/>,document.getElementById("root"))