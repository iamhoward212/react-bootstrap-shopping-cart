import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://images.pexels.com/photos/710743/pexels-photo-710743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/710743/pexels-photo-710743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/710743/pexels-photo-710743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}

//  export default DemoCarousel;
 ReactDOM.render(<DemoCarousel/>,document.getElementById("root"))