import React from "react";

import bannerBg from "../../assets/images/partials/home/banner_background.jpg";

export default function Home(props) {
    return (
        <div className="home-user">
            <div className="banner">
                <img className="w-100" src={bannerBg} alt=""/>
                <div>
                    <p>The Coffee</p>
                </div>
            </div>
        </div>
    )
}