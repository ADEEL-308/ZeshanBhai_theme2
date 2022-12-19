import Carousel from 'react-bootstrap/Carousel';

function ImgSlider() {
    return (
        <Carousel>
            <Carousel.Item>
                <div className="SliderInner">
                    <img
                        className="d-block SliderImage responsive"
                        src="./Images/HeaderImage/image1.png"
                        alt=""
                    />
                </div>
                {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <div className="SliderInner">
                    <img
                        className="d-block SliderImage responsive"
                        src="./Images/HeaderImage/image2.png"
                        alt=""
                    />
                </div>

                {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <div className="SliderInner">
                    <img
                        className="d-block SliderImage responsive"
                        src="./Images/HeaderImage/image3.png"
                        alt=""
                    />
                </div>

                {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    );
}

export default ImgSlider;