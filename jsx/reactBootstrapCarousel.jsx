import Carousel from 'react-bootstrap/Carousel'

class DemoBootstrapCarousel extends React.Component{
    render(){
        return(
<div id="sectionCarousel">
<div className="container">
  
  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.pexels.com/photos/710743/pexels-photo-710743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>好學生文具線上商城</h3>
        <p>馬上點選"優惠活動"，即刻領取優惠卷</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.pexels.com/photos/710743/pexels-photo-710743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>好學生文具線上商城</h3>
        <p>馬上點選"優惠活動"，即刻領取優惠卷</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.pexels.com/photos/710743/pexels-photo-710743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>好學生文具線上商城</h3>
        <p>馬上點選"優惠活動"，領取優惠卷</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>            
</div></div>          
        )
    }
}
export default DemoBootstrapCarousel;
// ReactDOM.render(<DemoBootstrapCarousel/>,document.getElementById("root"))