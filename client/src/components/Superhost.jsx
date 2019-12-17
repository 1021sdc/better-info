import React from 'react';
import css from '../../dist/styles.css';

const Superhost = () => {
    return(
        <div className={css.isSuperhost}>
            <div className={css.icon}><i className="fas fa-medal fa-xs"></i></div>
            <div className={css['host-info']}>
                <div className={css['host-title']}><b>Superhost</b></div>
                <div className={css['host-content']}>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</div>
            </div>
        </div>
    );
}

export default Superhost;