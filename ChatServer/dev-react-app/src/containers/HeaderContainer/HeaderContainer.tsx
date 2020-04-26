import React from "react"
import { useSelector } from "react-redux";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import SignIn from "./LoginButtons/SignIn/SignIn";
import SignUp from "./LoginButtons/SignUp/SignUp";
import Help from "./Help";
import ProfileButton from "./Profile/ProfileButton";
import styles from './HeaderContainer.scss';
import { styleNames } from "../../services/styleNames";
import { isUserLoggedSelector } from "../../selectors/user-logged.selector";

const sn = styleNames(styles);

const HeaderContainer: React.FC = () => {

    const isUserLogged = useSelector(isUserLoggedSelector);
    let search;
    let signin;
    let signup;
    let profile;
    if (isUserLogged) {
        search = <Search />;
        profile = <ProfileButton />;
    }
    else {
        signin = <SignIn />;
        signup = <SignUp />;
    }
    return (
        <div className={sn('header')}>
            <div className={sn('header-common')}>
                <Logo />
                {search}
                <Help />
            </div>
            <div className={sn('header-sign')}>
                {signin}
                {signup}
                {profile}
            </div>
        </div>
    );
}

export default HeaderContainer;