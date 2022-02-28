import React from 'react';

function Profile() {
  const missions = ['Telstar', 'SES', 'AsiaSat', 'ABS'];
  const rockets = ['Falcon 9', 'Falcon Heavy', 'Starship'];
  return (
    <div className="profile-main">
      <div className="missions">
        <h1>My Missions</h1>
        <ul>
          {missions.map((mission) => (
            <li key={mission}>{mission}</li>
          ))}
        </ul>
      </div>
      <div className="rockets">
        <h1>My Rockets</h1>
        <ul>
          {rockets.map((rocket) => (
            <li key={rocket}>{rocket}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
