import React, { Component } from "react";
import { getID } from "../services/fetchID";
import { getStoryData } from "../services/storyData";
import { OneNews } from "../OneNews/OneNews";
import "./ListOfNews.css"
class ListOfNews extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ids: [],
            news: [],
            isLoading: true
        }
    }
    componentDidMount() {
        getID().then(ids => this.setState({ ids }));
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.ids.length !== this.state.ids.length){
            const promiseList = this.state.ids.map(id => getStoryData(id));
            Promise.all(promiseList).then(newsList => this.setState({
                news: newsList,
                isLoading: false,
            }));
        }
    }
    render () {
        if(this.state.isLoading) return <h2>Loading...</h2>;  
        return (
            <div>
                <ol className="mainOl">
                {this.state.news.map(single => <OneNews single={single} />)}
                </ol>
            </div>
       )
    }
}

export { ListOfNews }