import {connect} from "react-redux";
import News from "./News";
import {addCatsPostCreator} from "../../redux/news-reducer";

const mapStateToProps = (state) => {
    return {
        catsData: state.newsPage.catsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickCats: () => {
            dispatch(addCatsPostCreator())
        }
    }
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News)

export default NewsContainer;
