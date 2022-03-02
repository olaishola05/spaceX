import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const missions = useSelector((state) => state.missions);
  const filters = missions.filter((mission) => mission.reserved === true);
  const rockets = ['Falcon 9', 'Falcon Heavy', 'Starship'];

  return (
    <div className="profile-main">
      <div className="missions">
        <h1 className="profile-header">My Missions</h1>
        <ul>
          {filters.map((mission) => (
            <li key={mission.mission_id} className="list">
              {mission.mission_name}
            </li>
          ))}
        </ul>
      </div>
      <div className="rockets">
        <h1 className="profile-header">My Rockets</h1>
        <ul>
          {rockets.map((rocket) => (
            <li key={rocket} className="list">
              {rocket}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
