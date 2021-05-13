import React from 'react';
import classes from "../News.module.css";

const NewsItem = (props) => {

    return (
        <div className={classes.NewsWrapper}>

            <div className={classes.PostContainer}>
                <div className={classes.ApiImg}>
                    <img
                        className={classes.img}
                        src={props.imgSrc}
                        alt="cat"/>
                </div>
                <div className={classes.ApiPostFooter}>
                    <span>Нравится</span>
                    <span>Комментарии</span>
                    <span>Поделиться</span>
                </div>
            </div>

        </div>
    );
};

export default NewsItem;
