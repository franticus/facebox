import React from 'react';
import classes from './News.module.css'
import NewsItem from "./NewsItem/NewsItem";
import {addCatsPostCreator} from "../../redux/news-reducer";

const News = (props) => {
    let catsElement = props.catsData.map((elem, index) => {
        return (
            <NewsItem key={index}
                      id={elem.id}
                      imgSrc={elem.imgSrc}
                      dispatch={props.dispatch}
            />
        )
    })

    let onclickCats = () => {
        let feedsCAts = setInterval(() => {
            props.dispatch(addCatsPostCreator())
        }, 1000)
        setTimeout(() => {
            clearInterval(feedsCAts)
        }, 10000)
    }

    let onclickCatsDown = () => {
        window.scrollBy(0, 100000);
    }
    let onclickCatsUp = () => {
        window.scrollBy(0, -100000);
    }

    return (
        <div className={classes.NewsWrapper}>
            <button onClick={onclickCatsDown}>Вниз</button>
            <h1>API Лента Котов</h1>
            <div>
                {catsElement}
            </div>
            <button onClick={onclickCats}>Ещё котов!</button>
            <button onClick={onclickCatsUp}>Вверх!</button>
        </div>
    );
}

export default News;
