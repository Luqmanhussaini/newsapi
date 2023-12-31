import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {


  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  country = "in";
  pageSize = 15;
  apiKey = "0106c3169235414da8e3cb0175710e23";


  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path="/"><News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} key="general" country={this.country} category="general" /></Route>

            <Route exact path="/business"><News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} key="business" country={this.country} category="business" /></Route>
            <Route exact path="/entertainment"><News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} key="entertainment" country={this.country} category="entertainment" /></Route>
            <Route exact path="/general"><News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country={this.country} key="general" category="general" /></Route>
            <Route exact path="/health"><News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country={this.country} key="health" category="health" /></Route>
            <Route exact path="/science"><News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country={this.country} key="science" category="science" /></Route>
            <Route exact path="/sports"><News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country={this.country} key="sports" category="sports" /></Route>
            <Route exact path="/technology"><News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country={this.country} key="technology" category="technology" /></Route>


          </Switch>
        </Router>
      </div>
    )
  }
}

