import React from 'react';
import css from '../../dist/styles.css';

const GreatLocation = () => {
    return(
        <div className={css['great-location']}>
            <div className={css.icon}><i className="fas fa-map-marker-alt fa-xs"></i></div>
            <div className={css['location-box']}>
                <div className={css['location-title']}>Great location</div>
                <div className={css['location-content']}>95% of recent guests gave the location a 5-star rating.</div>
            </div>
        </div>
    );
}
export default GreatLocation;