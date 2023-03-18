import React, { Component } from "react";
import { miliToHours } from "../../utilities/getHours";
import { getComments } from "../../utilities/getComments";
import { getShortUrl } from "../../utilities/getShortURL";
import "./OneNews.css";
class OneNews extends Component {
    constructor(props) {
        super (props)
        this.state = {
            story: [],
            newsId: []
        }
    }
    render () {  
        return (
                <li className="title"><span>{this.props.single.title}</span> (<span>{getShortUrl(this.props.single.url)}</span>)
                    <ul className="mainUl">
                        <li className="points"><i class="fas fa-heart"></i>  {this.props.single.score} points</li>
                        <li className="user"><i class="fas fa-user"></i>  {this.props.single.by}</li>
                        <li className="time"><i class="far fa-clock"></i>  {miliToHours(this.props.single.time)}</li>
                        <li className="comments">{getComments(this.props.single.descendants)}</li>
                    </ul>
                </li>
        )
    }
}
export { OneNews };