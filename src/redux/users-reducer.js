const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

let initialState = {
    users: [
        // {name: 'Sergey',
        //     id: 124434544,
        //     photos: {
        //     small:null
        //     }, status: null, followed: false},
        // {name: 'Roman',
        //     id: 12345334,
        //     photos: {
        //         small:null
        //     }, status: null, followed: false},
        // {name: 'Anastasia',
        //     id: 123433,
        //     photos: {
        //         small:null
        //     }, status: null, followed: false},
        // {name: 'Random',
        //     id: 843433,
        //     photos: {
        //         small:null
        //     }, status: null, followed: false},
        // {name: 'Dmitry',
        //     id: 1243453444,
        //     photos: {
        //         small:null
        //     }, status: null, followed: false},
        // {name: 'Natalia',
        //     id: 1233254,
        //     photos: {
        //         small:null
        //     }, status: null, followed: false},
        // {name: 'Polina',
        //     id: 12325433,
        //     photos: {
        //         small:null
        //     }, status: null, followed: false},
        // {name: 'Vadim',
        //     id: 8434352543,
        //     photos: {
        //         small:null
        //     }, status: null, followed: false}
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }

}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching})


export default usersReducer;