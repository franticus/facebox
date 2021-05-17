import React from "react";
import classes from './UsersPage.module.css'
import userImg from '../../assets/img/user_male.png'

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={classes.UsersPageWrapper}>
        <div className={classes.title}>
            <h1>Найти друзей</h1>
        </div>
        <div className={classes.pagination}>
            {pages.slice(0, 10).map((p, i) => {
                return <button
                    key={i}
                    onClick={() => {props.onPageChanged(p)}}
                    className={props.currentPage === p ? classes.activePageNum : null}>{p}</button>
            })} . . .

        </div>
        {
            props.users.map(u => <div className={classes.usersWrapper} key={u.id}>
            <span>
                <div>
                    <img className={classes.userPhoto}
                         src={u.photos.small != null
                             ? u.photos.small
                             : userImg}
                         alt="avatar"/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.follow(u.id)
                        }}>Подписаться</button>
                        : <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Отписаться</button>}
                </div>
            </span>
                <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.city"}</div>
                    <div>{"u.location.country"}</div>
                </span>
            </span>
            </div>)
        }
    </div>
}

export default Users;