import React from 'react';
import { Switch, Route} from 'react-router-dom';
import { aboutus,contactus, homepage, blog } from './Pages/'
/* Remove style here. This is just for demo purpose.*/

function Maincontent() {
    return(
        <div className="main-content" >
            <Switch>
                <Route exact path="/" component={homepage} />
                <Route exact path="/aboutus" component={aboutus} />
                <Route exact path="/contactus" component={contactus} />
                <Route exact path="/blog" component={blog} />
            </Switch>
        </div>
    );
}

export default Maincontent;