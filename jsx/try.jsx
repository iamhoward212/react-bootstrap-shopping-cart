class Try extends React.Component{
    constructor(props){
        super(props)
        this.state={
          count:0,
          productList:"",
      };
      
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
        ,()=>{  console.log(this.state)} 
        )

    }
      countPlusOneHandler=(e)=>{
        this.getProduct();  
               let count=this.state.count;
               count=count+1;
                 this.setState({count:count}
                  ,()=>{  console.log(this.state)}
                  )
                
            }  
    
    render(){
        return(
        <div>
            <h1>傳入函數測試</h1>
         <h1>Count: {this.state.count}</h1>
              
              <About
                // count={this.state.count}           
                onClick={this.countPlusOneHandler.bind(this)}
              />
              <Job
                // count={this.state.count}           
                onClick={this.countPlusOneHandler.bind(this)}
              />
              <Event
                // count={this.state.count}           
                onClick={this.countPlusOneHandler}
              />
        </div>
        )
    }
}
class About extends React.Component{
    render(){
        return(
        <div>
          <h1>TEST-ABOUT</h1>
         
          <button type="button" 
          onClick={this.props.onClick.bind(this)} 
          >Click Me(About)</button>  
        </div>
        )
    }
}
class Job extends React.Component{
  render(){
      return(
      <div>
        <h1>TEST-Job</h1>
       
        <button type="button" 
        onClick={this.props.onClick} >
          Click Me(Job)</button>  
      </div>
      )
  }
}
class Event extends React.Component{
  render(){
      return(
      <div>
        <h1>TEST-Event</h1>
       
        <button type="button" 
        onClick={this.props.onClick} >
          Click Me(Job)</button>  
      </div>
      )
  }
}

ReactDOM.render(<Try/>,document.getElementById("root"))