import React from 'react';
import css from '../../dist/styles.css';

const GreatCheckin = () => {
    return(
        <div className={css['checkin-experience']}>
            <div className={css.icon}><i className="fas fa-key fa-xs"></i></div>
            <div className={css['checkin-info']}>
                <div className={css['checkin-title']}>Great check-in experience</div>
                <div className={css['checkin-content']}>100% of recent guests gave the check-in process a 5-star rating.</div>
            </div>
        </div>
    );
}

export default GreatCheckin;