import React from "react";
import coffee from "../../../assets/images/partials/home/listFood_coffee.png";

import album1 from "../../../assets/images/partials/home/album-1.png";
import album2 from "../../../assets/images/partials/home/album-2.png";
import album3 from "../../../assets/images/partials/home/album-3.png";

export default function Home(props) {
    return (
        <div className="home-user">
            <main>
                <section className="banner">
                    <div className="container">
                        <div className="banner__text">
                            <div className="banner__text-title">
                                <span className="banner__text-title-question">Are you thirsty?</span>
                                <span className="banner__text-title-content">Don't wait!</span>
                                <span className="banner__text-title-answer">Let start to order drink now</span>
                            </div>
                            
                            <div className="banner__text-sub">
                                <div className="banner__text-sub-pre">
                                    <span>This Today</span>
                                    <span>Happy hours</span>
                                </div>
                                <div className="banner__text-sub-main">
                                    <span>1+1=3</span>
                                </div>
                            </div>

                            <div className="banner__text-button">
                                <button className="button button-border">Order now</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="choiceAndEnjoy">
                    <div className="container">
                        <div className="choiceAndEnjoy__text">
                            <div className="choiceAndEnjoy__text-title">
                                <h1 className="typography-h1">Choice & enjoy</h1>
                            </div>
                            <p className="choiceAndEnjoy__text-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                        </div>

                        <div className="listFood">
                            <div className="listFood-item">
                                <div className="food-item">
                                    <div className="food-item__image">
                                        <img src={coffee} alt="Image Food"/>
                                    </div>
                                    <div className="food-item__text">
                                        <div className="food-item__text-title">
                                            <h6 className="typography-h6">Lorem ipsum dolor</h6>
                                        </div>
                                        <div className="food-item__text-sub">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                        </div>
                                    </div>
                                    <div className="food-item__button">
                                        <button className="button button-yellow">Order now</button>
                                    </div>
                                </div>
                            </div>

                            <div className="listFood-item">
                                <div className="food-item">
                                    <div className="food-item__image">
                                        <img src={coffee} alt="Image Food"/>
                                    </div>
                                    <div className="food-item__text">
                                        <div className="food-item__text-title">
                                            <h6 className="typography-h6">Lorem ipsum dolor</h6>
                                        </div>
                                        <div className="food-item__text-sub">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                        </div>
                                    </div>
                                    <div className="food-item__button">
                                        <button className="button button-yellow">Order now</button>
                                    </div>
                                </div>
                            </div>

                            <div className="listFood-item">
                                <div className="food-item">
                                    <div className="food-item__image">
                                        <img src={coffee} alt="Image Food"/>
                                    </div>
                                    <div className="food-item__text">
                                        <div className="food-item__text-title">
                                            <h6 className="typography-h6">Lorem ipsum dolor</h6>
                                        </div>
                                        <div className="food-item__text-sub">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                        </div>
                                    </div>
                                    <div className="food-item__button">
                                        <button className="button button-yellow">Order now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="event">
                    <div className="container-fluid">
                        <div className="event__text">
                            <div className="event__text-subtitle">
                                <h6 className="typography-h6">Discover</h6>
                            </div>
                            <div className="event__text-title">
                                <h1 className="typography-h1">Upcoming Events</h1>
                            </div>
                            <p className="event__text-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                        </div>
                    </div>
                </section>

                <section className="album">
                    <div className="container">
                        <div className="album-left">
                            <div className="album-item">
                                <div className="album-item__image">
                                    <img src={album1} alt="album"/>
                                </div>
                                <div className="album-item__content">
                                    <h5 className="typography-h5">Try it today</h5>
                                    <h2 className="typography-h2">Most Popular Pasta</h2>
                                </div>
                            </div>
                        </div>

                        <div className="album-right">
                            <div className="album-item">
                                <div className="album-item__image">
                                    <img src={album2} alt="album"/>
                                </div>
                                
                                <div className="album-item__content">
                                    <h5 className="typography-h5">Try it today</h5>
                                    <h3 className="typography-h3">More fun more taste</h3>
                                </div>
                            </div>

                            <div className="album-item">
                                <div className="album-item__image">
                                    <img src={album3} alt="album"/>
                                </div>
                                
                                <div className="album-item__content">
                                    <h5 className="typography-h5">Try it today</h5>
                                    <h3 className="typography-h3">Fresh & Chili</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}