import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

export class Home extends Component {
  displayName = Home.name

  render() {
    return (
      <div>
            <h1>Welcome to the one stop for all your concert Need!!!</h1>
            <br />
            <Carousel>
                <Carousel.Item>
                    <img width={1400} height={500} alt="900x500" src="http://www.nolameetings.com/wp-content/uploads/2017/02/superdome-4-1024x576.jpg" />
                    <Carousel.Caption>
                        <h3>Concert in Southland</h3>
                        <p>Book your first concert to southland with us</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={1400} height={500} alt="900x500" src="https://wallpaperscraft.com/image/london_height_buildings_sky_skyscrapers_687_1920x1080.jpg" />
                    <Carousel.Caption>
                        <h3>Trip to Europe</h3>
                        <p>Make your trip to London for awesome concert </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={1400} height={500} alt="900x500" src="https://wallpapercave.com/wp/4AmjRsr.jpg" />
                    <Carousel.Caption>
                        <h3>Party Lover?</h3>
                        <p>Get up and go to the city that never sleeps</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>;
      </div>
    );
  }
}
