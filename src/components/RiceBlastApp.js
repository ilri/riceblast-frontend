import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';
import About from './About/About';
import Newsletters from './Media/Newsletters';
import Meetings from './Media/Meetings';
import Stakeholders from './Media/Stakeholders';
import Publications from './Publications/Publications';


export default function RiceBlastApp(){
    return(

        <div>

            <div>
                <Router>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/login' exact component={Login} />
                        <Route path='/about' exact component={About} />
                        <Route path='/media/newsletters' exact component={Newsletters} />
                        <Route path='/media/stakeholder_engagements' exact component={Stakeholders} />
                        <Route path='/media/meetings' exact component={Meetings} />
                        <Route path='/publications' exact component={Publications} />
                    </Switch>
                </Router>
            </div>
        </div>
    )
}