import React, {Component} from 'react';
import {connect} from "react-redux";
import News from "./News";
import {addCatsPostCreator} from "../../redux/news-reducer";
import {withRouter} from "react-router-dom";
import * as axios from "axios";

class NewsContainer extends Component {

    componentDidMount() {
    }

    onClickCats = (src) => {
        let tenCats = setInterval(() => {
        axios.get('https://aws.random.cat/meow')
            .then(response => {
                this.props.addCatsPostCreator(response.data.file)
            });
        }, 1000)
        setTimeout(() => {
            clearInterval(tenCats)
        }, 5000)
    }

    render() {
        return (
            <News {...this.props}
                  onClickCats={this.onClickCats}
                  catsData={this.props.catsData}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        catsData: state.newsPage.catsData,
    }
}

let withUrlNewsComponent = withRouter(NewsContainer)

export default connect(mapStateToProps, {addCatsPostCreator})(withUrlNewsComponent)