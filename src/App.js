import './App.css';
import * as React from "react";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";
import Login from "./Components/Login";
import Appointment from "./Components/Appointment";
import Cookies from "universal-cookie";
import SignUp from "./Components/SignUp";
import './fonts/static/SourceSans3-Regular.ttf'
import './fonts/static/SourceSans3-LightItalic.ttf'
import './fonts/static/SourceSans3-Medium.ttf'


class App extends React.Component {

  state = {
    isLoggedIn: false
  }

  // componentDidMount() {
  //   const cookies = new Cookies();
  //   if (cookies.get("logged_in")) {
  //     this.setState({
  //       isLoggedIn: false,
  //       token : cookies.get("logged_in")
  //     })
  //   }
  // }

  render() {
    return (
        <div>
          <BrowserRouter>
            {
              this.state.isLoggedIn ?
                  <div style={{display: "flex", alignItems: "start", marginTop: "50px"}}>
                    <Route path={"/home"} component={Appointment}/>
                  </div>
                  :
                  <div>

                    <Route path={"/"} component={Login} exact={true}/>
                    <Route path={"/signup"} component={SignUp}/>
                  </div>
            }
          </BrowserRouter>
          <div className="font-face-gm2">
            Project By Saar Eli Barak Bitan And Dato
          </div>

        </div>
    )
  }

}

export default App;
