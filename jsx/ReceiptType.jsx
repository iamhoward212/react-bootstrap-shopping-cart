import Card, {
    CardPrimaryContent,
   } from "@material/react-card";
import {
    Body2,
    Headline6,
    } from '@material/react-typography';
import Radio, {NativeRadioControl} from '@material/react-radio';
import Checkbox from '@material/react-checkbox'
import TextField, {HelperText, Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

class ReceiptType extends React.Component{
    
    // componentDidMount=()=>{
    //     document.getElementById('byMail').value='byMail'
    //     document.getElementById('prompt').value='prompt'
    // }
    
    inputHandler=(e)=>{
        const {name,value}=e.target 
        const {receipt,handler}=this.props
        handler("receipt",{...receipt,[name]:value})
    }
    // checkboxHandler=(e)=>{
    //             const checkboxParent=e.target.closest('.mdc-checkbox') 
    //             const newValue=e.target.value
    //             const name=checkboxParent.getAttribute("attributeName")
    //             const {receipt,handler}=this.props 
    //             let values=receipt[name]
    //             if( values.includes(newValue)){
    //                 values=values.filter(value=>{
    //                     return(value!=newValue)
    //                 })
    //             }else{
    //                 values.push(newValue)
    //             }
    //             if( name=="receiptOption" && !values.includes(newValue)){
    //                 values=[]
    //             }
    //             handler("receipt",{...receipt,[name]:values})
    //         }
            
    render(){
        const {receipt,handler}=this.props
        const {receiptType,taxId,receiptOption,fullName,phoneNumber}=receipt
        return(
            <div><Card><CardPrimaryContent>
                <div style={{padding:"1rem"}}>
                    <Headline6 tag="p">
                        訂單資訊
                    </Headline6>
                    <Body2  tag="div">
                <div>
                
                    <span>姓名</span>
                    <TextField 
                    helperText={<HelperText>請輸入您的姓名!</HelperText>}
                    // outlined label='姓名'
                // leadingIcon={<MaterialIcon role="button" icon="person"/>}
                    >
                    <Input
                        name="fullName"
                        style={{"marginLeft":"1rem"}}
                        value={fullName}
                        onChange={this.inputHandler} 
                        />
                    </TextField> <br/><br/>
                    <span>電話</span>
                    <TextField 
                    helperText={<HelperText>請輸入您的電話!</HelperText>}
                    // outlined label='電話'
                // leadingIcon={<MaterialIcon role="button" icon="phone"/>}
                    >
                    <Input
                        name="phoneNumber"
                        style={{"marginLeft":"1rem"}}
                        value={phoneNumber}
                        onChange={this.inputHandler} 
                        // onChange={this.textInputHandler.bind(this)}
                        // value={this.state.name}
                        />
                    </TextField><br/>
                    
                    <br/>
                </div>
                {/* <div className="mailOption">
                    <Headline6 tag="p">
                        郵寄選項
                    </Headline6>
                    <React.Fragment>
                        <Checkbox
                        name="receiptOption[]" 
                        nativeControlId="byMail" 
                        attributeName="receiptOption"
                        checked={receiptOption.includes("byMail")}
                        onChange={this.checkboxHandler}
                        />
                        <label htmlFor="byMail" >實體寄送(+$30)</label>
                    </React.Fragment><br/>
                    <React.Fragment>
                        <Checkbox
                        name="receiptOption[]" 
                        nativeControlId="prompt"
                        attributeName="receiptOption"
                        checked={receiptOption.includes("prompt")}
                        onChange={this.checkboxHandler}
                        disabled={
                            !receiptOption.includes("byMail")
                        }
                        />
                        <label htmlFor="prompt" >限時掛號(+$60)</label>
                    </React.Fragment>


                </div>  */}
                  </Body2>
                 </div>
                </CardPrimaryContent>
              </Card>
            </div>


        )
    }
}
export default ReceiptType;
