/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
import axios from 'axios';

const FETCH_MISSIONS_SUCCESS = 'spacex/missions/FETCH_MISSIONS_SUCCESS';
const FETCH_MISSIONS_FAIL = 'space/missions/FETCH_MISSIONS_FAIL';
const URL = 'https://api.spacexdata.com/v3/missions';
const RESERVE_MISSION = 'spacex/missions/RESERVE_MISSION';
const LEAVE_MISSION = 'spacex/missions/LEAVE_MISSION';

const initialState = [];

const fetchSuccess = (missions) => ({
  type: FETCH_MISSIONS_SUCCESS,
  payload: missions,
});

const fetchFailed = (payload) => ({
  type: FETCH_MISSIONS_FAIL,
  payload,
});

export const reserveMission = (payload) => ({
  type: RESERVE_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

const getItemsFromResponse = (response) => {
  const info = [];
  response.forEach((item) => {
    const { mission_id, mission_name, description } = item;
    info.push({ mission_id, mission_name, description });
  });
  return info;
};

export const fetchMissions = () => async (dispatch) => {
  try {
    const response = await axios({
      method: 'get',
      url: URL,
    });

    dispatch(fetchSuccess(getItemsFromResponse(response.data)));
  } catch (err) {
    dispatch(fetchFailed(err.toString()));
  }
};

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS_SUCCESS:
      return [...action.payload];

    case FETCH_MISSIONS_FAIL:
      return [];

    case RESERVE_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: !mission.reserved };
      });

    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: !mission.reserved };
      });

    default:
      return state;
  }
};

export default missionReducer;
