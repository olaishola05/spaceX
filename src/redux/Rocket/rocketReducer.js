const FETCH_ROCKECTS_SUCCESS = 'spaceX/Rockect/FETCH_ROCKECTS_SUCCESS';
const FETCH_ROCKECTS_REQUEST = 'spaceX/Rockect/FETCH_ROCKECTS_REQUEST';
const FETCH_ROCKECTS_FAILURE = 'spaceX/Rockect/FETCH_ROCKECTS_FAILURE';
const UPDATE_RESERVE = 'spaceX/Rockect/UPDATE_RESERVE';

const intialState = {
  loading: false,
  rockets: [],
  error: '',
};

const fetchRocketsRequest = () => ({
  type: FETCH_ROCKECTS_REQUEST,
});

const fetchRocketSuccess = (payload) => ({
  type: FETCH_ROCKECTS_SUCCESS,
  payload,
});

const fetchRocketsFailure = (payload) => ({
  type: FETCH_ROCKECTS_FAILURE,
  payload,
});

export const updateReserve = (payload) => ({
  type: UPDATE_RESERVE,
  payload,
});

const reducerRocker = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_ROCKECTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ROCKECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        rockets: [...action.payload],
      };
    case FETCH_ROCKECTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_RESERVE:
      return {
        ...state,
        rockets: [
          ...state.rockets.map((item) => {
            if (action.payload === item.id) {
              return {
                ...item,
                reserved: !item.reserved,
              };
            }
            return { ...item };
          }),
        ],
      };
    default:
      return { ...state };
  }
};

export const fecthRockets = () => async (dispatch) => {
  dispatch(fetchRocketsRequest());
  try {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    const data = await response.json();
    const final = data.map((item) => ({
      id: item.id,
      description: item.description,
      name: item.rocket_name,
      image: item.flickr_images,
    }));

    dispatch(fetchRocketSuccess(final));
  } catch {
    const errorMsg = 'Cant load from API now';
    dispatch(fetchRocketsFailure(errorMsg));
  }
};

export default reducerRocker;
