import Button from '@material/react-button';
// import AddressPicker from './AddressPicker.jsx'
// import ReceiptType from './ReceiptType.jsx';
import React from 'react'
import TaiwanPostalCode from './TaiwanPostalCode.json'
import {Cell, Grid, Row} from '@material/react-layout-grid';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import InfoForm from "./infoForm.jsx"

class MainInfo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
    // <div className="info">
    //     <div className="container">
    <div className="sectionInfo">
        {/* <form>
           <Grid>
                <Row>
                    <Cell desktopColumns={3}phoneColumns={0} tabletColumns={1}></Cell>
                    <Cell desktopColumns={6}phoneColumns={4} tabletColumns={6} className="boxRecieptType">
                        <ReceiptType
                            receipt={this.props.receipt}
                            handler={this.props.handler}
                            
                        />
                        
                    </Cell>
                    <Cell desktopColumns={3}phoneColumns={0} tabletColumns={1}></Cell>
                </Row>
                <br/>
                <Row>
                    <Cell desktopColumns={3}phoneColumns={0} tabletColumns={1}></Cell>
                    <Cell desktopColumns={6}phoneColumns={4} tabletColumns={6} className="boxAddressPicker">
                        <AddressPicker
                            handler={this.props.handler}
                            fullAddress={this.props.fullAddress}
                            taiwanPostalCodes={TaiwanPostalCode}
                        />
                        
                    </Cell>
                    <Cell desktopColumns={3}phoneColumns={0} tabletColumns={1}></Cell>
                </Row>
                <br/>
                <Row>
                    <Cell desktopColumns={3}phoneColumns={0} tabletColumns={1}></Cell>
                    <Cell desktopColumns={6}phoneColumns={4} tabletColumns={6}>
                    <Link to="/report">
                        <Button outlined
                            type="submit" 
                            disabled={this.props.aboutDisabled}
                            >
                                
                                
                                金流付款
                        </Button></Link>
                    </Cell>
                    
                    <Cell desktopColumns={3}phoneColumns={0} tabletColumns={1}></Cell>
                </Row>
                </Grid>
        </form> */}
        <InfoForm
         handler={this.props.handler}
         fullAddress={this.props.fullAddress}
         taiwanPostalCodes={TaiwanPostalCode}
         showJumpOutGoToPay={this.props.showJumpOutGoToPay}
         handleShowJumpOutGoToPay={this.props.handleShowJumpOutGoToPay.bind(this)}
         handleCloseJumpOutGoToPay={this.props.handleCloseJumpOutGoToPay.bind(this)}
        />
     </div>
    // </div>
        )
    }
}
export default MainInfo;