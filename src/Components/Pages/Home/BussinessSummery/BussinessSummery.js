import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarAlt,faCarSide,faGear,faRocket} from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import BusinessSummery1 from '../../../image/home-page-img/BusinessSummery-1.jpg';
import BusinessSummery2 from '../../../image/home-page-img/BusinessSummery-2.png';
import './BussinessSummery.css'

const BussinessSummery = () => {
    return (
        <div className='BussinessSummery'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <div className='BusinessSummery-content'>
                            <h3>About Business Summery</h3>
                            <h2>Konow more about our bussiness</h2>
                        </div>
                        <div className='row'>
                                <div className='col-12 col-md-6'>
                                    <div className='BusinessSummery-icon'>
                                    <FontAwesomeIcon icon={faCarAlt} />
                                    </div>
                                   <div className='BusinessSummery-project'>
                                    <h3> <CountUp end={27000} duration={5}/>+</h3>
                                    <p>Happy Customer </p>
                                   </div>
                               </div>
                                <div className='col-12 col-md-6'>
                                <div className='BusinessSummery-icon'>
                                    <FontAwesomeIcon icon={faCarAlt} />
                                    </div>
                                   <div className='BusinessSummery-project'>
                                    <h3> <CountUp end={27000} duration={5}/>+</h3>
                                    <p>Reviews </p>
                                   </div>
                                </div>
                                <div className='col-12 col-md-6'>
                                <div className='BusinessSummery-icon'>
                                    <FontAwesomeIcon icon={faCarAlt} />
                                    </div>
                                   <div className='BusinessSummery-project'>
                                    <h3> <CountUp end={27000} duration={5}/>+</h3>
                                    <p>Tools</p>
                                   </div>
                                </div>
                                <div className='col-12 col-md-6'>
                                <div className='BusinessSummery-icon'>
                                    <FontAwesomeIcon icon={faCarAlt} />
                                    </div>
                                   <div className='BusinessSummery-project'>
                                    <h3> <CountUp end={27000} duration={5}/>+</h3>
                                    <p>Annual revenue</p>
                                   </div>
                                </div>
                            </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='BussinessSummery-img'>
                            <img className='img-fluid' src={BusinessSummery1} alt="" />
                            <img className='img-fluid' src={BusinessSummery2} alt="" />
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default BussinessSummery;