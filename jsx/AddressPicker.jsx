import Card, {
    CardPrimaryContent,
   } from "@material/react-card";
import TextField, {HelperText, Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Select, {Option} from '@material/react-select';
import React from "react"
import {
    Body2,
    Headline6,
    } from '@material/react-typography';

class AddressPicker extends React.Component{
    constructor(props){
        super(props)
        this.cities=Object.keys(this.props.taiwanPostalCodes)
    }
    handlerRelated=(name,value)=>{
        let mergeObject={}
        const {taiwanPostalCodes,fullAddress}=this.props
        const {city,district,postalCode,address}=fullAddress
        // const {taiwanPostalCodes,fullAddress:{city,district,postalCode,address}}=this.props
        if(  name=="city" && city!=value ){
            mergeObject['district']=""
            mergeObject['postalCode']=""
           
            }else if(name=="district" && city!=value   ){
                const cityData=taiwanPostalCodes[city]
                const postalCode=cityData[value]               
                mergeObject["postalCode"]=postalCode
            }
            return mergeObject
    }
    clearAddress=()=>{
        const name="address"
        const value=""
        const {fullAddress,handler}=this.props 
        const mergeObject=this.handlerRelated(name,value) 
        handler("fullAddress",{...fullAddress,...mergeObject,[name]:value})
    }

    inputHandler=(e)=>{
        const {name,value}=e.target 
        const {fullAddress,handler}=this.props 
        const mergeObject=this.handlerRelated(name,value) 
        handler("fullAddress",{...fullAddress,...mergeObject,[name]:value})
    }


    handler=(e)=>{
        let {name,value}=e.target 
        let mergeObject=this.handlerRelated(name,value)  
            this.setState({...mergeObject,[name]:value},()=>{
                console.log(this.state)
            })
    }
    getCityOptions=(cities)=>{
        return cities.map(city=>{
            return(
                <Option key={city} value={city}>{city}</Option>
            
        )
            })
    }
    getDistrictOptions=(districts)=>{
        return districts.map(district=>{
            return(
            <Option key={district} value={district}>{district}</Option>
            
            )
        })
    }
    render(){
        // const {taiwanPostalCodes,fullAddress:{city,district,postalCode,address}}=this.props
        const {taiwanPostalCodes,fullAddress}=this.props
        const {city,district,postalCode,address}=fullAddress
        const cityOptions=this.getCityOptions(this.cities)
        const cityData=taiwanPostalCodes[city]
        const districts=Object.keys(cityData)
        const districtOptions=this.getDistrictOptions(districts)
        return(
            <div>
                <Card>
                    <CardPrimaryContent>
                    <Headline6 tag="p" className="addressPickerTopic">
                        收件地址
                    </Headline6>
    
                        <div 
                        style={{padding:"1rem"}}
                        className="addressPickerTitle"
                        >
                <Select
                    className="citySelector"
                    // label='城市'
                    value={city} 
                    name="city"
                    onChange={this.inputHandler}
                    outlined
                >
                    {cityOptions}
                    
                </Select>
                <br/>
                <br/>
                
                <Select
                    // label='鄉鎮'
                    value={district} 
                    name="district"
                    onChange={this.inputHandler}
                    outlined
                    
                >
                   {districtOptions}
                    
                </Select>
                <br/><br/>
                <span>郵遞區號</span>
                <TextField className="postalCodeTextField">
                    
                <Input
                    value={postalCode}
                    type="text"
                    name="postalCode"
                    disabled={true}
                 />
                </TextField>
                <br/><br/>
                <span>地址</span>
            <TextField 
                // outlined 
                // label='地址' 
                helperText={<HelperText>請輸入您的地址!</HelperText>}
                // leadingIcon={<MaterialIcon role="button" icon="apartment"/>}
                onTrailingIconSelect={this.clearAddress}
                trailingIcon={<MaterialIcon role="button" icon="delete"/>}
            >
                <Input
                    value={address} 
                    type="text"
                    name="address"
                    onChange={this.inputHandler}
                 />
                </TextField>

                </div>
                 </CardPrimaryContent>
                </Card>
            </div>
        )
    }
}
export default AddressPicker;