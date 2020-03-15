import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://lh3.googleusercontent.com/-mlcbmiZYtp4/W1r98wS-AJI/AAAAAAAAATE/rW_0wyZn9vAsJXLkkId9lRmXY7x7N1LnACEwYBhgL/w140-h140-p/anonymous-avatar-icon-15.jpg"
                            alt="avatar"
                            className="avatar-image"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Developer</h1>
                            <hr/>
                            <p>java | spring | c++ | sql | html | css | javascript | react </p>
                            <div className="social-links" rel="noopener noreferrer" target="_blank">
                                <a href="https://github.com/danoblinux">
                                    <i className="fa fa-github" area-hidden="true"></i>
                                </a>

                                <a href="https://www.linkedin.com/in/daniel-bubanec-ba9b9b1a4/">
                                    <i className="fa fa-linkedin" area-hidden="true"></i>
                                </a>

                                <a href="https://www.youtube.com/channel/UCyU-L-y4Ay3ntC7oKDcYV5g?view_as=subscriber">
                                    <i className="fa fa-youtube" area-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;