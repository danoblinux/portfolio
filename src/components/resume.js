import React, {Component} from 'react';

class Resume extends Component{
    render(){
        return(
            <div>
                <video className="video" autoPlay loop muted >
                    <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4"/>
                </video>
            </div>
        )
    }
}

export default Resume;