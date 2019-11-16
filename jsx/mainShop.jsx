// class Cart extends React.Component{

//   render(){
//       return(
//         <div className="cart">
          
//            <h2>購物車:</h2>
//           <h2>購買數量:{this.props.count} ,
//            產品: {this.props.name} ,
//            價錢:${this.props.price}</h2>
         
//           </div>
//       )
//   }
// }
// class Product extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={
//         count:0
//     }
// }
// countPlusOneHandler(e){
//   let count=this.state.count;
//   count=count+1;
//     this.setState({count:count})
// }
//   render(){
//     return(
//       <div>
        
//         <Cart count={this.state.count}
//               name={this.props.name}
//               price={this.props.price}
//         />  

//         <div className="product">
//           <h2>產品: {this.props.name}</h2>
//           <h2>價錢:${this.props.price}</h2>
          
          
//           <button type="button" 
//           onClick={this.countPlusOneHandler.bind(this)} 
//           >買</button>
//         </div>
       
//         </div>
//     )
// }
// }

// const comment = {
//   name:{
//     first:"筆",
//     second:"尺"
//   },
//   price:{
//     first:"10",
//     second:"20"
//   }
// }

// class Shop extends React.Component{
//   render(){
//     return(
//       <div> 
//         <h1>好學生文具商城</h1> 
        
//         <Product 
//           name={comment.name.first} 
//           price={comment.price.first}/>
         
//         </div>
//      ) }
// }
// ReactDOM.render(<Shop/>,document.getElementById("root"))

// -------------------


// class Shop extends React.Component{
//   constructor(props){
//         super(props)
//         this.state={
//             count:0
//         }
//     }
//   handler(e){
//       let count=this.state.count;
//       count=count+1;
//         this.setState({count:count})
//     }  
//   render(){
//       return(
//     <div> 
//       <button type="button"  
//               className="test_Button"
//               onClick={this.handler.bind(this)} 
//               >test</button>
//       <h1>好學生文具商城  {this.state.count} </h1> 



//       <div className="content_list">     
//         <ul className="comments">
//           <li className="comment mgBroad">
//                 <div>
//                   <h1>商品A</h1>
//                       <p className="product">紅色原子筆</p>
//                       <p className="price">NT$10</p>
//                       <button type="button"  className="purchase_Button">買</button><hr/>
//                 </div>
//                 <div>
//                     <h1>商品B</h1>
//                         <p className="product">尺</p>
//                         <p className="price">NT$20</p>
//                         <button type="button"  className="purchase_ButtonB">買</button><hr/>
//                     </div>
                
//                 <h1>購物車</h1>
//                 <table className="target">
//                   <thead>
//                     <tr>
//                     <td>商品</td>
//                     <td>價錢</td>
//                     <td>數量</td>
//                     </tr>
//                   </thead>
//                 </table>
//           </li>
//         </ul>
//       </div>
//     </div>
//        ) }
//   }
//   ReactDOM.render(<Shop/>,document.getElementById("root"))
import ItemList from './ItemList.jsx'
import CreateBar from './CreateBar.jsx'

class App extends React.Component{  
  constructor(props){
    super(props);
    this.state={todoLists: []  };
}
	addTodosSubmit(term) {		
		this.setState({
			todoLists: [...this.state.todoLists, term ]}
    // ,()=>{  console.log(this.state)} 
    );
  }
  deleteTodosSubmit(content){
		this.setState({
			todoLists: this.state.todoLists.filter(item => {
				return item !== content
			})
    }
    // ,()=>{  console.log(this.state)} 
    );
	}

  render(){
    return(
      <div>
        <CreateBar 
        onSubmit={this.addTodosSubmit.bind(this)}/>
       <h1>購物車</h1>
       
        <ItemList 
					todoLists={this.state.todoLists}
          onDelete={this.deleteTodosSubmit.bind(this)}
          />
          <hr/>
      </div>
    )   
  }
}
ReactDOM.render(<App/>,document.getElementById("root"))