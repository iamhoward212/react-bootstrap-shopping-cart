import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class JumpOutGoToPay extends React.Component{
    constructor(props){
        super(props)
        
    }
    render(){
        
        const showJumpOutGoToPay=this.props.showJumpOutGoToPay
        
        const handleCloseJumpOutGoToPay=this.props.handleCloseJumpOutGoToPay.bind(this)
        
        return(
        <div className="jumpOutGoToPay">
        
            <Modal size="lg" show={showJumpOutGoToPay} onHide={handleCloseJumpOutGoToPay} >
              <Modal.Header closeButton>
                <Modal.Title>通知</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  您的購買資訊已填寫完畢。
              </Modal.Body>
              <Modal.Footer>

                <div className="container">
                  <div className="row">
                     <div className="col-12 col-sm-6">
                        <Link to="/">
                          <Button variant="primary" className="primary continuteToBuy">繼續購物</Button>
                        </Link>
                    </div>
                    <div className="col-12 col-sm-6">
                        <Link to="/report"><Button variant="success" className="primary goCheckout">結帳去</Button></Link>   
                    </div>
                  </div>
                </div>
              </Modal.Footer>
            </Modal>
          </div>
        )
    }
}

export default JumpOutGoToPay;