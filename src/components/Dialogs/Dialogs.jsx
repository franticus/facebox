import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog_items}>
                <NavLink to="/dialogs/1"
                         className={classes.dialog + ' ' + classes.active }
                >
                    Настя
                </NavLink>
                <NavLink to="/dialogs/2"
                         className={classes.dialog}
                >
                    Женик
                </NavLink>
                <NavLink to="/dialogs/3"
                         className={classes.dialog}
                >
                    Вареник
                </NavLink>
                <NavLink to="/dialogs/4"
                         className={classes.dialog}
                >
                    Путин
                </NavLink>
                <NavLink to="/dialogs/5"
                         className={classes.dialog}
                >
                    Лука
                </NavLink>
                <NavLink to="/dialogs/6"
                         className={classes.dialog}
                >
                    Саган
                </NavLink>
                <NavLink to="/dialogs/7"
                         className={classes.dialog}
                >
                    Стася
                </NavLink>
                <NavLink to="/dialogs/8"
                         className={classes.dialog}
                >
                    Надя
                </NavLink>
            </div>
            <div className={classes.dialog_message}>
                <NavLink to="/dialogs/11" className={classes.message}>
                    Я очень тебя люблю)....
                </NavLink>
                <NavLink to="/dialogs/22" className={classes.message}>
                    Ты кому звонишь сынок....
                </NavLink>
                <NavLink to="/dialogs/33" className={classes.message}>
                    Бабушка Аня....
                </NavLink>
                <NavLink to="/dialogs/44" className={classes.message}>
                    Лука лох....
                </NavLink>
                <NavLink to="/dialogs/55" className={classes.message}>
                    Путин лох....
                </NavLink>
                <NavLink to="/dialogs/66" className={classes.message}>
                    Люблю Стасю....
                </NavLink>
                <NavLink to="/dialogs/77" className={classes.message}>
                    Саган лох....
                </NavLink>
                <NavLink to="/dialogs/88...." className={classes.message}>
                    Чё живот растёт ёпт....
                </NavLink>
            </div>
        </div>
    );
};

export default Dialogs;
