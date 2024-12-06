import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import MeetupContext from './context/MeetupContext'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {
    isRegistered: false,
    name: '',
    topic: 'ARTS_AND_CULTURE',
    errorMsg: false,
  }

  registering = () => {
    const {name} = this.state
    if (name === '') {
      this.setState({errorMsg: true})
    } else {
      this.setState({isRegistered: true, errorMsg: false})
    }
  }

  onChangeName = name => {
    this.setState({name})
  }

  onChangeTopic = topicId => {
    this.setState({topic: topicId})
  }

  render() {
    const {isRegistered, name, topic, errorMsg} = this.state

    return (
      <MeetupContext.Provider
        value={{
          isRegistered,
          name,
          topic,
          errorMsg,
          registering: this.registering,
          onChangeTopic: this.onChangeTopic,
          onChangeName: this.onChangeName,
        }}
      >
        <>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route component={NotFound} />
          </Switch>
        </>
      </MeetupContext.Provider>
    )
  }
}
export default App
