import {Link} from 'react-router-dom'
import MeetupContext from '../../context/MeetupContext'

import Header from '../Header'
import './index.css'



const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Home = props => {
  return (
    <MeetupContext.Consumer>
      {value => {
        const {isRegistered, name, topic} = value
        
        const topicName = topicsList.find(each => each.id === topic)
        const displayName = topicName.displayText
        return (
          <div className="home-container">
            <Header />
            <div className="main-container">
              {isRegistered ? (
                <div className="text-container">
                  <h1>Hello {name}</h1>
                  <p>Welcome to {displayName}</p>
                </div>
              ) : (
                <div className="text-container">
                  <h1>Welcome to Meetup</h1>
                  <p>Please register for the topic</p>
                  <Link to='/register'>
                  <button
                    type="button"
                    className="reg-btn"
                  >
                    Register
                  </button>
                  </Link>
                </div>
              )}
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
                className="meetup"
              />
            </div>
          </div>
        )
      }}
    </MeetupContext.Consumer>
  )
}

export default Home
