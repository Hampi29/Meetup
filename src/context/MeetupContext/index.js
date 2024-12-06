import React from 'react'

const MeetupContext = React.createContext({
  isRegistered: false,
  registering: () => {},
  name: null,
  topic: 'ARTS_AND_CULTURE',
  errorMsg: false,
  onChangeName: () => {},
  onChangeTopic: () => {},
})

export default MeetupContext
