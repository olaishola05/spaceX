import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';

function Missons() {
  const dispatch = useDispatch();
  const missions = [
    {
      mission: 'spacex',
      description:
        'In this activity, your team will prepare a Kanban board with a GitHub project. We prepared a template that you need to copy. All tasks in the template board have assigned workload and a category. Your job will be to split the tasks in a way that gives each member a chance to work with the tasks from all categories and so that the estimated time is divided fairly between all members. In order to copy the Kanban board quickly, you will use a special script prepared for you.',
    },
  ];

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  return (
    <div className="wrapper">
      <div className="missions-container">
        <div className="missions-bar">
          <div>Mission</div>
          <div>Description</div>
          <div>Status</div>
          <div />
        </div>

        <div className="missions-data">
          <div>{missions[0].mission}</div>
          <div>{missions[0].description}</div>
          <div>
            <button type="button">Heloo</button>
          </div>
          <div>
            <button type="button">Heloo</button>
          </div>

          <div>{missions[0].mission}</div>
          <div>{missions[0].description}</div>
          <div>
            <button type="button">Heloo</button>
          </div>
          <div>
            <button type="button">Heloo</button>
          </div>

          <div>{missions[0].mission}</div>
          <div>{missions[0].description}</div>
          <div>
            <button type="button">Heloo</button>
          </div>
          <div>
            <button type="button">Heloo</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Missons;
