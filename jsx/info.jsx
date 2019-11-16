import React from 'react'
import MainInfo from "./maininfo.jsx"

class Info extends React.Component{
    constructor(props){
        super(props)
        this.state={
            receipt:{
                receiptType:2,
                taxId:"",
                receiptOption:[],
                fullName:"",
                phoneNumber:"",
            },
            fullAddress:{
                city:"新竹市",
                district:"",
                postalCode:"",
                address:""
            }
         }
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
    <div>
        <MainInfo
            receipt={this.state.receipt}
            handler={this.infoHandler}
            fullAddress={this.state.fullAddress}
            aboutDisabled={!this.isReady()}
            />        
        </div>
        )
    }
}
export default Info;
// ReactDOM.render(<Info/>,document.getElementById('root'))
