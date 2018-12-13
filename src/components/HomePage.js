import React, { Component } from 'react';
import { connect } from 'react-redux';
import homePage from '../imgs/home-page.jpeg';
import pizza from '../imgs/calamari.jpg';
import julian from '../imgs/veal_and_peppers.jpeg';


// Carousel is using bootstrap
// Bulma does not have a carousel

class HomePage extends Component {
    render () {
        return (
            <section>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>

                {/* Images for Carousel */}
                    <div className="carousel-inner">
                        {/* Image 1 */}
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={homePage} alt="First slide" />
                        </div>
                        {/* Image 2 */}
                        <div className="carousel-item">
                            <img className="d-block w-100" src={pizza} alt="Second slide" />
                        </div>
                        {/* Image 3 */}
                        <div className="carousel-item">
                            <img className="d-block w-100" src={julian} alt="Third slide" />
                        </div>
                    </div>
                {/* End Images for Carousel */}
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                </div>
            </section>
        )
    }
}

export default connect()(HomePage);
