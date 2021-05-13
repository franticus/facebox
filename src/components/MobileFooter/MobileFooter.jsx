import React from 'react';
import classes from './MobileFooter.module.css'
import {NavLink} from "react-router-dom";

const MobileFooter = () => {
    return (
        <nav className={classes.MobileFooter}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.active}>
                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" activeClassName={classes.active}>
                    <i className="fa fa-heart" aria-hidden="true"></i></NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.active}>
                    <i className="fa fa-comment" aria-hidden="true"></i>
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" activeClassName={classes.active}>
                    <i className="fa fa-music" aria-hidden="true"></i>
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" activeClassName={classes.active}>
                    <i className="fa fa-gavel" aria-hidden="true"></i>
                </NavLink>
            </div>
        </nav>
    );
};

export default MobileFooter;
