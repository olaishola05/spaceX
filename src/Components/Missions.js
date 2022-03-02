/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';

function Missons() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  const storeData = useSelector((state) => state.missions);
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
              <di className="title">{mission.mission_name}</di>
              <div>{mission.description}</div>
              <div className="btn-container">
                <button type="button" className="memberBtn">
                  Not a member
                </button>
              </div>
              <div className="btn-container">
                <button type="button" className="missionBtn">
                  Join Mission
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
