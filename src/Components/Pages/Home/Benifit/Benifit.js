import React from 'react';
import benifitimg from '../../../image/home-page-img/benefit-bg.jpg';
import './Benifit.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight,faBullseye,faPersonArrowUpFromLine,faShieldHalved,faMarsAndVenusBurst} from '@fortawesome/free-solid-svg-icons';

const Benifit = () => {
    return (
        <div className=''style={{backgroundImage: `url(${benifitimg})`, backgroundRepeat: "no-repeat", backgroundSize:"cover",backgroundPosition:"center",marginBottom:"100px",padding:"50px 0"}}>
            <div className='container'>
                <div className='benifit-content'>
                    <h1>Get Benefits of Using Our Latest Product.</h1>
                    <p>A number of 2D and 3D vision systems exist to improve robotic accuracy and flexibility, with wide-ranging applications. Industrialized vision systems can be used in robotic welding for seam tracking to improve accuracy. Other advanced vision systems can be used in combination with advanced machine learning algorithms to help robots grasp objects they’ve encountered only just a few times or never at all. Visions systems dramatically improve the capabilities of robots.</p>
                    <div className='row align-items-center'>
                        <div className='col-12 col-md-6 d-flex align-items-center'>
                        <h4 className='pe-2'><FontAwesomeIcon className='benifit-icon' icon={faBullseye} /></h4>
                            <h4 > Complete Technology Partner</h4>
                        </div>
                        <div className='col-12 col-md-6 d-flex align-items-center'>
                            <h4 className='pe-2'><FontAwesomeIcon className='benifit-icon' icon={faPersonArrowUpFromLine} /></h4>
                            <h4 >Backed By 100% Customer References</h4>
                        </div>
                        <div className='col-12 col-md-6 d-flex align-items-center'>
                            <h4 className='pe-2'><FontAwesomeIcon className='benifit-icon' icon={faShieldHalved} /></h4>
                            <h4 > Fast, Scalable, Reliable</h4>
                        </div>
                        <div className='col-12 col-md-6 d-flex align-items-center'>
                        <h4 className='pe-2'><FontAwesomeIcon className='benifit-icon' icon={faMarsAndVenusBurst} /></h4>
                        <h4 > The Emerging Tech Exparts</h4>
                        </div>
                    </div>
                    <button className='common-button'>
                Know More<FontAwesomeIcon icon={faAngleDoubleRight} />
                </button>
                </div>
            </div>
        </div>

    );
};

export default Benifit;