import Alert from 'react-bootstrap/Alert';

class CuponAlert extends React.Component{
    constructor(props){
        super(props)
        // this.state={
        //     show:false,
        // }
    }
    // closeHandler=()=>{
    //     this.setState({show:false})
    // }
    // openHandler=()=>{
    //     this.setState({show:true})
    // }
    render(){
        // let show=this.state.show;
        let cuponAlert=this.props.cuponAlert;
        // if(checkCupon==false){
            
        // }
        return(
            <div>
                {/* <button type="button"
                    onClick={this.openHandler}
                >
                    開啟
                </button> */}
                <Alert 
                show={cuponAlert}
                variant="danger" 
                // onClose={this.closeHandler} dismissible
                >
                <Alert.Heading>
                    Sorry，您所輸入的優惠卷代碼不正確，請重新輸入，謝謝。
                </Alert.Heading>
                    {/* <p>
                    test
                    </p> */}
                </Alert>
            </div>
        )
    }
}

export default CuponAlert;