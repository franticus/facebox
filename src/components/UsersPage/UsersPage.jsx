import React from 'react';
import classes from './UsersPage.module.css'
import userImg from '../../assets/img/user_male.jpg'
import * as axios from "axios";


const UsersPage = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items)
                })
        }
    }


    return (
        <div className={classes.UsersPageWrapper}>

            <button onClick={getUsers}>Get</button>

            <h1>Найти друзей</h1>
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
    );
};

export default UsersPage;
