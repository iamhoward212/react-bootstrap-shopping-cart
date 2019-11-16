import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import JumpOutGoToPay from "./jumpOutGoToPay.jsx"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class InfoForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            validated:false,
        }
        
        this.cities=Object.keys(this.props.taiwanPostalCodes);
        // this.anchorRef = React.createRef()
        this.handleShowJumpOutGoToPay=this.props.handleShowJumpOutGoToPay.bind(this);
        // this.handleCloseJumpOutGoToPay=this.props.handleCloseJumpOutGoToPay
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
                <option key={city} value={city}>{city}</option>
            
        )
            })
    }
    getDistrictOptions=(districts)=>{
        return districts.map(district=>{
            return(
            <option key={district} value={district}>{district}</option>
            
            )
        })
    }
    
    render(){
        const validated=this.state.validated;
        
        const setValidated=()=>{
            this.setState({validated:true})
            
        }
        const handleSubmit = event => {
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            }else{
                
                this.handleShowJumpOutGoToPay();
                event.preventDefault();
                event.stopPropagation();
            }
            
            setValidated(true);
        };
        const cityOptions=this.getCityOptions(this.cities);
        
        const {taiwanPostalCodes,fullAddress}=this.props
        const {city,district,postalCode,address,fullName,phoneNumber,email}=fullAddress
        const cityData=taiwanPostalCodes[city]
        const districts=Object.keys(cityData)
        const districtOptions=this.getDistrictOptions(districts)
                
        return(
    <Container>
        <Row>
            <Col xs={12} md={2}></Col>
            <Col xs={12} md={8}>
            <h1 className="infoTitle">訂單資訊</h1>
            <Form noValidate validated={validated} 
              onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>姓名</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="請輸入您的姓名"
                  value={fullName} 
                  name="fullName"
                  onChange={this.inputHandler}
        
                />
        
                <Form.Control.Feedback type="invalid" >
                    請填寫姓名。
                  </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>電話</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="請輸入您的電話"
                  value={phoneNumber} 
                  name="phoneNumber"
                  onChange={this.inputHandler}  
        
                />
        
                <Form.Control.Feedback type="invalid">
                    請填寫電話。
                  </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>電郵地址</Form.Label>
                <Form.Control type="email" placeholder="請輸入您的電郵地址" 
                    required
                    value={email} 
                    name="email"
                    onChange={this.inputHandler}  
                />
                 
                 <Form.Control.Feedback type="invalid">
                     請填寫完整的電郵地址，電郵地址中需包含"@"。
                  </Form.Control.Feedback>
                 
                
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom03" >
                <Form.Label>城市</Form.Label>
                
                <Form.Control as="select" className="citySelector" 
                    onChange={this.inputHandler} 
                    value={city} 
                    name="city">
                    {cityOptions}
                </Form.Control>
                <Form.Control.Feedback>請選擇城市。</Form.Control.Feedback> 
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>鄉/鎮/市/區</Form.Label>
                <Form.Control 
                    required
                    as="select" 
                    className="districtSelector" 
                    onChange={this.inputHandler} 
                    value={district} name="district"
                >
                    {districtOptions}
                </Form.Control>
                
                  <Form.Control.Feedback>請選擇 鄉/鎮/市/區。</Form.Control.Feedback> 
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>郵遞區號</Form.Label>
                <Form.Control required type="text" placeholder="" required  value={postalCode}  name="postalCode"  disabled={true}/>
                
              </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="12" controlId="validationCustom06" 
                    
                >
                    <Form.Label>地址</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="請輸入您的地址"
                        value={address} name="address"
                        onChange={this.inputHandler} 
                    />  
                    <Form.Control.Feedback type="invalid">
                     請填寫地址。
                    </Form.Control.Feedback>
                

                </Form.Group>
            </Form.Row>
            
            <Button type="success">送出</Button>
            
            
            <JumpOutGoToPay
            
                handleCloseJumpOutGoToPay={this.props.handleCloseJumpOutGoToPay.bind(this)}
                showJumpOutGoToPay={this.props.showJumpOutGoToPay}
            />
          </Form>
            </Col>
            <Col xs={12} md={2}></Col>
        </Row>
    </Container>
        
        )
        
    }
}

export default InfoForm;