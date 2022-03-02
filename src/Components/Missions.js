/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';

function Missons() {
  const dispatch = useDispatch();
  // const missions = [
  //   {
  //     mission: 'spacex',
  //     description:
  //       'In this activity, your team will prepare a Kanban board with a GitHub project. We prepared a template that you need to copy. All tasks in the template board have assigned workload and a category. Your job will be to split the tasks in a way that gives each member a chance to work with the tasks from all categories and so that the estimated time is divided fairly between all members. In order to copy the Kanban board quickly, you will use a special script prepared for you.',
  //   },
  // ];

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
