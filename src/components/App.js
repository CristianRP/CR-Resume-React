import React, { PropTypes } from 'react';
import Education from './Education';
import Profile from './Profile';
import Skills from './Skills';
import Work from './Work';
import WorkItem from './WorkItem';
import logo from '../logo.svg';
import '../App.css';

const App = props => {
  const profileData = props.jsonObject.basics;
  const aboutData = profileData.summary; // empty for the moment ( I need to think )
  const workData = props.jsonObject.work;
  const skillsData = props.jsonObject.skills;
  const educationData = props.jsonObject.education;

  return (
      <div className="container">
        <div className="row">
          <aside className="col-md-4">
            <Profile profileData={profileData} />
          </aside>
          <main className="col-md-8">
            <div className="inner">
              <Work workData={workData} />
              <Skills skillsData={skillsData} />
              <Education educationData={educationData}/>
            </div>
          </main>
        </div>
      </div>
  )
};

App.propTypes = {
  jsonObject: PropTypes.object.isRequired
}

export default App;
