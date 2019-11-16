class FooterBootstrap extends React.Component{
    render(){
        return(
<div>
    <footer id="main_footer" className="jumbotron">
    <div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-6">
                <div className="row">
                <div className="footer-logo">
                    <i className="fas fa-user-graduate logo"></i>
                </div>
                    {/* <div className="col-xs-12 col-sm-3">
                            <a className="navbar-brand" href="#">
                            <img src="./image/Logo2.png"/>
                        </a>
                    </div> */}
                    

                                    
            <div className="col-xs-6 col-sm-3">
                <div className="link_list"> 
                    <h5 className="_title">作品集1</h5>
                    
                </div>
            </div>
            <div className="col-xs-6 col-sm-3">
                <div className="link_list"> 
                    <h5 className="_title">作品集2</h5>
                
                    </div>
                </div>
        <div className="clearfix visible-xs-block"></div>

        <div className="col-xs-6 col-sm-3">
            <div className="link_list"> 
                <h5 className="_title">社群平台</h5>
                <ul>
                    <li >Facebook</li>
                    <li >Instagram</li>
                    <li >Youtube</li>
                </ul>
            </div>
        </div>
    </div>
</div>
            <div className="col-xs-12 col-sm-6">
                <div className="social_icons_block">
                    <div className="social_icons">
                            <span className="glyphicon glyphicon-home" aria-hidden="true"></span>  
                    </div>
                    <div className="social_icons">
                            <span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>  
                    </div>
                    <div className="social_icons">
                            <span className="glyphicon glyphicon-search" aria-hidden="true"></span>  
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
    <div className="row">
        <div className="col-xs-12">
            <div className="subs">
                <div className="sub_block">
                    <span class="_item">指南</span>
                    <span class="_item">使用條款</span>
                    <span class="_item">銷售條款</span>
                    <span class="_item">隱私權政策</span>
                </div>
                <div  className="sub_block2">
                    <p className="_item" >聯絡方式: </p>
                    <p className="_item" >EMAIL: iamhoward212@gmail.com</p>
                </div>
            </div>
            
        </div>
                        </div>
                   </div>
              </footer>          
            </div>
        )
    }
}
export default FooterBootstrap;