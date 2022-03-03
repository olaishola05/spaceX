import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/react';
import PuffLoader from 'react-spinners/PuffLoader';
import { fecthRockets, updateReserve } from '../redux/Rocket/rocketReducer';

function Rockets() {
  const rocketStore = useSelector((state) => state.rocket);
  const { rockets, loading } = rocketStore;
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fecthRockets());
    }
  }, []);

  const handleUpdateReserve = (id) => {
    dispatch(updateReserve(id));
  };

  const rocketCard = rockets.map((item) => (
    <div className="card-rocket" key={item.id}>
      <div className="image-container">
        <img src={item.image[0] || ' '} alt="rocket" className="rocket-image" />
      </div>
      <div className="rocket-info">
        <h2>{item.name || ' '}</h2>
        <p>
          {' '}
          <span className={item.reserved ? 'hide-view' : null}>
            {item.reserved ? 'Reserved' : null}
          </span>
          {item.description || ' '}
        </p>
        <button
          onClick={() => handleUpdateReserve(item.id)}
          type="button"
          className={
            item.reserved
              ? 'button-rocket-is-reserve '
              : 'button-rocket-not-reserve'
          }
        >
          {item.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </div>
  ));

  const override = css`
    display: block;
    margin: 4em auto;
    border-color: red;
  `;
  const color = '#565378';
  return (
    <div className="rocket-card-container">
      {rocketCard}

      <PuffLoader color={color} loading={loading} css={override} size={150} />
    </div>
  );
}

export default Rockets;
