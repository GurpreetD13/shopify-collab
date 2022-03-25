import './Collabs.scss';
import { Component} from 'react';
import CollabImage1 from '../../assets/images/Collab-image-1.png';
import CollabImage2 from '../../assets/images/Collab-image-2.png';
import CollabImage3 from '../../assets/images/Collab-image-3.png';
import CollabImage4 from '../../assets/images/Collab-image-4.png';
import CollabImage5 from '../../assets/images/Collab-image-5.png';
import CollabImage6 from '../../assets/images/Collab-image-6.png';
import areaChart from '../../assets/images/SimpleAreaChart.png';
import donutChart from '../../assets/images/SimpleDonutChart.png';

import videoPoster from '../../assets/images/Collaboration-video-frame.png';

class Collabs extends Component {
state = {
    selected: "Collabs__nav-graphs"
}

selectMenu = (e) => {
    this.setState({
        selected: e.target.id
    });
}

render () {
    return (
        <div className="Collabs">
            <ul className="Collabs__nav"> 
                <li onClick={this.selectMenu} id="Collabs__nav-info" className={`Collabs__nav-item ${this.state.selected === "Collabs__nav-info" && "Collabs__nav-item--active"}`}>Prints by Akira</li>
                <li onClick={this.selectMenu} id="Collabs__nav-tips" className={`Collabs__nav-item ${this.state.selected === "Collabs__nav-tips" && "Collabs__nav-item--active"}`}>Possible Benefits</li>
            </ul>

            {this.state.selected === "Collabs__nav-info" ?
            (<div className="Collabs__content">
                <div className='Collabs__info'>
                    <h3 className='Collabs__info-header'>Products</h3>
                    <ul className='Collabs__info-images'>
                        <li><img src={CollabImage1} alt="art print" /></li>
                        <li><img src={CollabImage2} alt="art print" /></li>
                        <li><img src={CollabImage3} alt="art print" /></li>
                        <li><img src={CollabImage4} alt="art print" /></li>
                        <li><img src={CollabImage5} alt="art print" /></li>
                        <li><img src={CollabImage6} alt="art print" /></li>
                    </ul>
                    <div className="Collabs__info-location Collabs__info-item">
                        <h4 className="Collabs__info-sub-header">Location</h4>
                        <p className='Collabs__info-text'>Tokyo, Japan</p>
                    </div>
                    <div className="Collabs__info-attributes Collabs__info-item">
                    <h4 className="Collabs__info-sub-header">Store Attributes</h4>
                        <p className='Collabs__info-text'>Fun, inviting, creative, energetic, diverse</p>
                    </div>
                    <div className="Collabs__info-message Collabs__info-item">
                    <h4 className="Collabs__info-sub-header">Message</h4>
                        <p className='Collabs__info-text'>Hey from Japan! I’m looking to collaborate with unique art stores to boost my sales. Let’s connect if you’re ready to collaborate! </p>
                    </div>
                </div>
                <div className='Collabs__tips'>
                    <video className='Collabs__tips-video' poster={videoPoster}>
                    </video>
                    <header className='Collabs__tips-header'>
                        <h3 className='Collabs__tips-title'>Tips for a successful collaboration.</h3>
                        <span className='Collabs__tips-menu' />
                    </header>
                    <p className='Collabs__tips-text'>
                    You have a product, now it’s time to increase sales. Watch this video to learn some tips and tricks for a successful collaboration. 
                    </p>
                    <button className='Collabs__tips-button'>Learn more</button>
                </div>
            </div>) : (
            <div className="Collabs__graphs">
                <div className='Collabs__graph1'>
                    <p className='Collabs__graph1-title'>Date range</p>
                    <div className='Collabs__graph1-input'>Season 3 (2022)</div>
                    <img className='Collabs__graph1-chart' src={areaChart} alt="Sample area chart" />
                    <h4 className='Collabs__graph1-legend'>Season 3 Sales growth trend</h4>
                </div>
                <div className='Collabs__graph2'>
                    <img className='Collabs__graph2-chart' src={donutChart} alt="Sample area chart" />
                    <h4 className='Collabs__graph2-legend'>Season 3 Sales growth trend</h4>
                </div>
            </div>)
}   
        <div className="CTA__wrap">
         <button className="CTA">Start a Conversation</button>
        </div>

        </div>
    );
}
}

export default Collabs;
