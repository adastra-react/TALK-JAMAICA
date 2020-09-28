import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Home.css';
import { Link } from "react-router-dom";
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone';
import HowToRegTwoToneIcon from '@material-ui/icons/HowToRegTwoTone';
import LaptopWindowsTwoToneIcon from '@material-ui/icons/LaptopWindowsTwoTone';

function Home() {
    return (
        <div className="home">
          
            <Header />
                    <div className="splash-constainer">
                        <div className="splash">
                            <div className="get-started-cont">
                            <h1 className="splash-head">Web chat app</h1>
                                <p className="splash-subhead">Lets talk with out jamaican men</p>
                                <Link to="/login">
                                     <button className="get-started-btn">Get Started</button>
                                </Link>
                            </div>   
                        </div>
                    </div>

                    <div className="about">
                        <div className="about-text-cont">
                            <h1>What are we about</h1>
                        </div>

                        <div className="card-cont">
                            <div className="card">
                                <div>
                                    <InfoTwoToneIcon className="card-icon"/>
                                </div>
                                <div>
                                    <p>Lorem ipsum, dolor s
                                        it amet consectetur
                                         adipisicing elit. Amet, sunt.</p>
                                </div>
                            </div>

                            <div className="card">
                                <div>
                                    <HowToRegTwoToneIcon className="card-icon"/>
                                </div>
                                <div>
                                    <p>Lorem ipsum, dolor s
                                        it amet consectetur
                                         adipisicing elit. Amet, sunt.</p>
                                </div>
                            </div>
                            

                            <div className="card">
                                <div>
                                    <LaptopWindowsTwoToneIcon className="card-icon"/>
                                </div>
                                <div>
                                    <p>Lorem ipsum, dolor s
                                        it amet consectetur
                                         adipisicing elit. Amet, sunt.</p>
                                </div>
                            </div>
                            <div className="card">
                                <div>
                                    <ContactMailTwoToneIcon className="card-icon"/>
                                </div>
                                <div>
                                    <p>Lorem ipsum, dolor s
                                        it amet consectetur
                                         adipisicing elit. Amet, sunt.</p>
                                </div>
                            </div>
                            
                            
                            
                        </div>
                    </div>
             <Footer/>
        
            
        </div>
    )
}

export default Home




// export default class Home extends Component {
//     render() {
//         return (

//             <div>
//                 <Header />
//                  <div className="splash-constainer">
//                     <div className="splash">
//                         <h1 className="splash-head">Web chat app</h1>
//                         <p className="splash-subhead">Lets talk with out jamaican men</p>
//                     </div>
//                 </div>
//             <Footer/>
//             </div>
            
           
//         )
//     }
// };
