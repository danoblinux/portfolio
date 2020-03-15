import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={4}>
                        <img 
                            src="https://lh3.googleusercontent.com/-mlcbmiZYtp4/W1r98wS-AJI/AAAAAAAAATE/rW_0wyZn9vAsJXLkkId9lRmXY7x7N1LnACEwYBhgL/w140-h140-p/anonymous-avatar-icon-15.jpg"
                            alt="avatar"
                            className="avatar-image"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Developer</h1>
                            <hr/>
                            <p>java | spring | html/css | javascript | react | NodeJS | Express</p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;