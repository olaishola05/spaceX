/* eslint-disable react/jsx-curly-newline */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, reserveMission, leaveMission } from '../redux/missions/missions';

function Missons() {
  const dispatch = useDispatch();

  const storeData = useSelector((state) => state.missions);
  useEffect(() => {
    if (storeData.length === 0) {
      dispatch(fetchMissions());
    }
  }, []);

  const toggleReserve = (id, mission) => {
    const check = mission.reserved ? dispatch(reserveMission(id)) : dispatch(leaveMission(id));
    return check;
  };

  return (
    <div className="wrapper">
      <div className="missions-container">
        <div className="missions-bar">
          <div>
            <p>Mission</p>
          </div>
          <div>
            <p>Description</p>
          </div>
          <div>
            <p>Status</p>
          </div>
          <div />
        </div>

        <ul>
          {storeData.map((mission) => (
            <li className="missions-data" key={mission.mission_id}>
              <div className="title">{mission.mission_name}</div>
              <div>{mission.description}</div>
              <div className="btn-container">
                <button type="button" className={mission.reserved ? 'activeMember' : 'memberBtn'}>
                  {mission.reserved ? 'Active Member' : 'Not a member'}
                </button>
              </div>
              <div className="btn-container">
                <button
                  type="button"
                  className={mission.reserved ? 'leaveMission' : 'missionBtn'}
                  onClick={() => toggleReserve(mission.mission_id, mission)}
                >
                  {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Missons;
