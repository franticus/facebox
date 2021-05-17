import React from 'react';
import classes from "./Preloader.module.css";

const Preloader = () => {
    return <div>
        <div className={classes.ldsHeart_wrapper}>
            <div className={classes.ldsHeart}>
                <div></div>
            </div>
        </div>
    </div>
};

export default Preloader;
