import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import HeaderImage from './headerimage';

class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className="banner">
                            <div className="banner-left">
                                <HeaderImage></HeaderImage>
                            </div>
                            <div className="banner-right">
                                <h1>Software Engineer</h1>
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
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;