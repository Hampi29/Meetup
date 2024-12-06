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

const Register = props => {
  return (
    <MeetupContext.Consumer>
      {value => {
        const {
          name,
          topic,
          errorMsg,
          registering,
          onChangeName,
          onChangeTopic,
        } = value
        const onRegister = event => {
          event.preventDefault()

          if (name === '') {
            registering()
          } else {
            registering()
            const {history} = props
            history.replace('/')
          }
        }
        const onName = event => {
          onChangeName(event.target.value)
        }
        const onTopic = event => {
          onChangeTopic(event.target.value)
        }

        return (
          <div>
            <Header />
            <div className="register-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
                className="register-image"
              />
              <div>
                <h1>Let us join</h1>
                <form className="right-container" onSubmit={onRegister}>
                  <label for="name">NAME</label>
                  <br />
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={onName}
                    className="input-container"
                  />
                  <br />
                  <label for="topics">TOPICS</label>
                  <br />
                  <select
                    id="topics"
                    value={topic}
                    className="input-container"
                    onChange={onTopic}
                  >
                    {topicsList.map(each => (
                      <option value={each.id}>{each.displayText}</option>
                    ))}
                  </select>
                  <button type="submit" className="reg-btn">
                    Register Now
                  </button>
                  {errorMsg ? (
                    <p className="error-msg">Please enter your name</p>
                  ) : null}
                </form>
              </div>
            </div>
          </div>
        )
      }}
    </MeetupContext.Consumer>
  )
}

export default Register
