import React from 'react';

import { carouselImages } from '../../helpers/carouselImages';


export const HomeCarousel = () => {
  return (
        <div>
            
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-indicators">

                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>

                </div>
                <div className="carousel-inner">

                    <div className="carousel-item active ">
                    <img src={carouselImages('./vendas__rodilla.png')} className="d-block w-100 img-fluid carousel__img" alt="arm blaster"/>

                        <div className="carousel-caption d-none d-md-block">

                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>

                        </div>
                    
                    </div>
                    <div className="carousel-item">

                        <img src={carouselImages('./vendas__muñeca.png')} className="d-block w-100 img-fluid carousel__img" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">

                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>

                        </div>

                    </div>

                    <div className="carousel-item">

                        <img src={carouselImages('./arm__blaster.png')} className="d-block w-100 img-fluid carousel__img" alt="..."/>

                        <div className="carousel-caption d-none d-md-block">

                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>

                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev carousel__arrows" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">

                    <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>

                </button>

                <button className="carousel-control-next carousel__arrows" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">

                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>

                </button>
            </div>

        </div>
    )
};
