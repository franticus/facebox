import React from 'react';
import classes from './UsersPage.module.css'
import userImg from '../../assets/img/user_male.png'
import * as axios from "axios";

class UsersPageC extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return (
            <div className={classes.UsersPageWrapper}>
                <div className={classes.title}>
                    <h1>Найти друзей</h1>
                </div>
                {
                    this.props.users.map(u => <div className={classes.usersWrapper} key={u.id}>
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
                                    this.props.follow(u.id)
                                }}>Подписаться</button>
                                : <button onClick={() => {
                                    this.props.unfollow(u.id)
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
        )
    }
}

export default UsersPageC;
