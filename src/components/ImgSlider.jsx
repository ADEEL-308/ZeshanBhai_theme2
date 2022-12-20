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

            </Carousel.Item>
            <Carousel.Item>
                <div className="SliderInner">
                    <img
                        className="d-block SliderImage responsive"
                        src="./Images/HeaderImage/image2.png"
                        alt=""
                    />
                </div>

            </Carousel.Item>
            <Carousel.Item>
                <div className="SliderInner">
                    <img
                        className="d-block SliderImage responsive"
                        src="./Images/HeaderImage/image3.png"
                        alt=""
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <div className="nft_alignment">
                    <div className="nft_outer">
                        <div className="nft_left shadow" >
                            <img src="./Images/DisplayImages/Screen Shot 2022-12-13 at 5.39.55 PM.png" alt="" className='responsive' />
                        </div>
                        <div className="nft_right shadow">
                            <img src="./Images/DisplayImages/Screen Shot 2022-12-13 at 5.39.55 PM.png" alt="" className='responsive' />
                        </div>


                    </div>
                </div>

            </Carousel.Item>
        </Carousel>
    );
}

export default ImgSlider;