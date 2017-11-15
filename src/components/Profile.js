import React from 'react';

const Profile = props => {
  const profileObject = props.profileData;
  const profileLinks = props.profileData.profiles.map(function (item, index){
    return (
      <li><a className="fa fa-{profileObject.profile[index].keyword} fa-2x" href={profileObject.profiles}></a></li>
    )
  })
  return
    <div>
        <div className="profileImg"><img role="presentation" className="img-circle center-block" src={profileObject.picture} width="200" /></div>
        <h1 className="text-center">{ profileObject.name }</h1>
        <h2 className="text-center">{ profileObject.label } </h2>
        <div className="divider"></div>
        <ul className="list-unstyled contact-links text-center">
          <li><i className="fa fa-lg fa-location-arrow"></i>{profileObject.location.city}, {profileObject.location.region}, {profileObject.location.countryCode}</li>
          <li><i className="fa fa-lg fa-envelope"></i><a href={`mailto:${profileObject.email}`}>{profileObject.email}</a></li>
        </ul>
        <div className="divider"></div>
        <ul className="profileLinks list-inline text-center">
          { profileLinks }
        </ul>
        <p> I built this resume with <a href="https://reactjs.org/">React</a> components and a <a href="https://jsonresume.org/schema/">JSON Resume Schema</a>. The complete source code is hosted in <a href="https://github.com/CristianRP/CR-Resume-React"> Github</a>.</p>
    </div>
};

export default Profile;
