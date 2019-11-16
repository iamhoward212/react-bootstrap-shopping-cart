class CreateBar extends React.Component{
    constructor(props){
      super(props);
      this.state={ 
          term: ''
        };
  }
  onSubmit(e){
    this.props.onSubmit(this.state.term);
    this.setState({term: ''}
    // ,()=>{console.log(this.props.onSubmit(this.state.term))}
    )
  }
  handler(e){
      this.setState({term: e.target.value}
        // ,()=>{console.log(this.state)}
        )
  }
    render(){
      return(
        <div>
          <input 
              type="text" 
              value={this.state.term}
              onChange={this.handler.bind(this)} />
         
          <button onClick={this.onSubmit.bind(this)}>留言</button>
      </div>
      )
     }} 
     export default CreateBar;  
  
  