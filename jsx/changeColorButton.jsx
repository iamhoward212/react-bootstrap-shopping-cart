class ChangeColorButton extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showPerson: false
        };
        
    }
    showPerson= ()=> {
        this.setState({showPerson:!this.state.showPerson});
      }
    
    
    render(){
        const style = {
            backgroundColor: 'red',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
          };
          
          const classes=['bold'];
          if(this.state.showPerson){
            classes.push('red');
          }
          
          
          let persons = null;
          if (this.state.showPerson) {
            persons = (
              <h1 className={classes.join(' ')}>Hello World! Andy</h1>
            );
            style.backgroundColor='green';
          }
       
        return (
        <div>
            <button
          style={style}
          onClick={this.showPerson}>Switch Name</button>
        {/* 按鈕顯示資料使用js判斷 */}
        {persons}
 
        </div>
                )
    }   
}
 
export default ChangeColorButton;
