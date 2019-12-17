import React from 'react';
import css from '../../dist/styles.css';

const Selfcheckin = () => {
    return(
        <div className={css['self-checkin']}>
            <div className={css.icon}><i className="fas fa-bell fa-xs"></i></div>
            <div className={css['self-checkin-box']}>
                <div className={css['self-checkin-title']}>Self check-in</div>
                <div className={css['self-checkin-content']}>Easily check yourself in with the keypad.</div>
            </div>
        </div>
    );
}

export default Selfcheckin;