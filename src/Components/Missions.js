/* eslint-disable react/jsx-curly-newline */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, reserveMission } from '../redux/missions/missions';

function Missons() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  const storeData = useSelector((state) => state.missions);

  const getReserveID = (id) => {
    dispatch(reserveMission(id));
  };

  // const removeMission = (id) => {
  //   dispatch(leaveMission(id));
  // };

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
                <button type="button" className="memberBtn">
                  {mission.reserved === true ? 'Active Member' : 'Not a member'}
                </button>
              </div>
              <div className="btn-container">
                <button
                  type="button"
                  className="missionBtn"
                  onClick={() => getReserveID(mission.mission_id)}
                >
                  {mission.reserved === true ? 'Leave Mission' : 'Join Mission'}
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
