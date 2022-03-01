import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const rocketStore = useSelector((state) => state.rocket);
  const { rockets } = rocketStore;

  const rocketReserved = rockets.filter((item) => item.reserved);

  const missions = ['Telstar', 'SES', 'AsiaSat', 'ABS'];

  return (
    <div className="profile-main">
      <div className="missions">
        <h1 className="profile-header">My Missions</h1>
        <ul>
          {missions.map((mission) => (
            <li key={mission}>{mission}</li>
          ))}
        </ul>
      </div>
      <div className="rockets">
        <h1 className="profile-header">My Rockets</h1>
        <ul>
          {rocketReserved.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
