import React from 'react';
import classes from './News.module.css'
import NewsItem from "./NewsItem/NewsItem";

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

    let onClickCats = () => {
        props.onClickCats()
    }

    return (
        <div className={classes.NewsWrapper}>
            <h1>API Лента</h1>
            <div>
                {catsElement}
            </div>
            <button onClick={onClickCats}>Ещё пост</button>
        </div>
    );
}

export default News;
