import React from 'react';
import css from '../../dist/styles.css';

const SparkingClean = () => {
    return(
        <div className={css.cleaning}>
            <div className={css.icon}><i className="fas fa-spray-can fa-xs"></i></div>
            <div className={css['cleaning-info']}>
                <div className={css['clean-title']}>Sparkling clean</div>
                <div className={css['clean-content']}>18 recent guests said this place was sparkling clean.</div>
            </div>
        </div>
    );
}

export default SparkingClean;