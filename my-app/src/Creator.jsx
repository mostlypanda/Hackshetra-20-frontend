import React from 'react';
import App from './App.jsx';
import BackgroundFrame from './MainComponents/BackgroundFrame.jsx';
import FormUser from './MainComponents/UserForm.jsx';
import * as Scroll from "react-scroll/modules/index";
import Home from './components/Home';
import LoginAdmin from './components/LoginAdmin';
import Admin from './components/Admin';
import LoginStudent from './components/LoginStudent';

    import {
        BrowserRouter,
        Route,
        Switch,
        Link,
    } from 'react-router-dom'



class Main extends React.Component{
      render(){
        return(
            <div className='backgroundMain'>
                <BackgroundFrame />
                
                <div className='formFrame'>
                    <FormUser/>
                </div>
                </div>
        )
    }
}

class AppQuiz extends React.Component{

    componentDidMount() {
        Scroll.animateScroll.scrollTo(0);
    }
    render(){
        return(
            <div>
                <div className='logoConatiner'>
                <div className='logo' >
                    <div>Q/RE<br/>ACT</div>
                </div>
            </div>
                <div className='backgroundFrame'><App /></div>
            </div>
        )
    }
}

class NotFound extends React.Component{
        render(){
            return(
                <h1 className='notFound'>404 <br/> Nothing is here</h1>
            )
        }
}

export default class AppMain extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        Scroll.animateScroll.scrollTo(0);
    }

    render(){

        return(
            <BrowserRouter>
                <div>
                    
                    <Switch>
                        <Route  exact path="/" component={Home} />
                        <Route  path="/quiz" component={Main} />
                        <Route path="/login/admin" component={LoginAdmin} />
                        <Route path="/login/student" component={LoginStudent} />
                        <Route path="/admin" component={Admin} />
                        <Route path="/app" component={AppQuiz} />
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}