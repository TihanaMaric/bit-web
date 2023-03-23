import "./Main.css";
import { ListView } from './ListView/ListView';
import { CardView } from "./CardView/CardView";
import loadingImage from "../Main/assets/loadingScreen.gif";
import noUsersImage from "../Main/assets/noUsersImage.png";

export const Main = ({ isView, users, inputValue }) => {

    let male = 0;
    let female = 0;

    if (users) {
        users.forEach((user) => {
            if (user.gender === 'female') {
                female++
            } else {
                male++
            }
        })
    }

    if (users.length < 14 && inputValue.length < 1) {
        return (
            <div>
                <img className="loadingImage" src={loadingImage} alt="loading..." />

            </div>
        )
    } else if (users.length < 1 && inputValue.length > 0) {
        return (
            <div>
                <img className="noUsersImage" src={noUsersImage} alt="no users..." />
                <p className="noMatch">We couldnt't find any people matching your search</p>
            </div>
        )
    } else {
        if (isView) {
            return (
                <div className='gridmain'>
                    <p className='genderdata mb-0'>Male: {male} Female: {female}</p>
                    {
                        users.map((user, index) => {
                            return <CardView user={user} index={index} key={index} />
                        })
                    }
                </div>
            )
        } else {
            return (
                <div className='main'>
                    <p className='genderdata mb-0 '>Male: {male} Female: {female}</p>
                    {
                        users.map((user, index) => {
                            return <ListView user={user} index={index} key={index} />
                        })
                    }
                </div>
            )
        }
    }
}
