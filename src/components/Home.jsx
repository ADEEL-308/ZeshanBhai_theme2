import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftSlide from './LeftSlide';
import LeftDetail from './LeftDetail';
// import GreyFont from './GreyFont';
import FontImage from './FontImage';
import CheckBox from './CheckBox';
import FaqCard from './FaqCard';
import PriceCard from './PriceCard';
import BlueButton from './BlueButton';
import TransparentButton from './TransparentButton';
import PlatFormImage from './PlatFormImage';
import CheckIcon from '@mui/icons-material/Check';
import ImgSlider from './ImgSlider';








const Home = () => {
    return (<>
        <main>
            <section className="Upper" id='Upper'>
                <Container>
                    <Row>
                        <Col sm={12} lg={6} md={12}>
                            <div className="leftUpper">
                                <div className="leftInner">
                                    <h1>Never miss a sale or listing again with our integrated bot for Discord, Telegram, and Twitter</h1>
                                    <p>Stay ahead of the game with real-time alerts and notifications on your collections across multiple marketplaces.</p>
                                    <div className="leftButton">

                                        <div className="me-4">
                                            <BlueButton

                                                Bbutton="Join Discord"
                                            />
                                        </div>
                                        <div className="ms-4">
                                            <TransparentButton
                                                tbutton="Feature"
                                                address="#Features"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} lg={6} md={12}>
                            <div className="HeaderImage">
                                <ImgSlider />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* <section className="platformSection">
                <Container>
                    <Row>
                        <Col lg={12} sm={12} md={12}>
                            <div className="PlatformHead mb-5">
                                <h1>
                                    Platforms we Provide
                                </h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>

                        <Col lg={2} md={12} sm={12}>

                        </Col>
                        <Col lg={2} md={12} sm={12}>
                            <div className="platformOuter">
                                <TelegramIcon />
                            </div>
                        </Col>
                        <Col lg={2} md={12} sm={12}>
                            <WhatsAppIcon />
                        </Col>
                        <Col lg={2} md={12} sm={12}>
                            <EmailIcon />
                        </Col>
                        <Col lg={2} md={12} sm={12}></Col>
                        <Col lg={2} md={12} sm={12}></Col>


                    
                    </Row>
                </Container>
            </section> */}
            <section className="StickerArea mb-5">
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className="StickerHeader mt-5 mb-5">
                                <h1>
                                    Covering all the market places and all your platforms.
                                </h1>

                            </div>
                        </Col>
                        <Col lg={12} md={12} sm={12}>

                            <div className="PlatformImageAdjust mt-4">
                                <PlatFormImage
                                    PlatformImage={"./Images/platForms/icons8-discord.svg"}

                                />
                                <PlatFormImage
                                    PlatformImage={"./Images/platForms/icons8-gmail-logo.svg"}

                                />
                                <PlatFormImage
                                    PlatformImage={"./Images/platForms/icons8-telegram-app.svg"}

                                />
                                <PlatFormImage
                                    PlatformImage={"./Images/platForms/icons8-whatsapp.svg"}

                                />
                                <PlatFormImage
                                    PlatformImage={"./Images/platForms/icons8-twitter.svg"}

                                />
                                {/* <FontImage
                                    marketPlaceImages={"./Images/platForms/discord-mark-blue.svg"}
                                />
                                <FontImage
                                    marketPlaceImages={"./Images/platForms/icons8-gmail-logo.svg"}
                                />
                                <FontImage
                                    marketPlaceImages={"./Images/platForms/icons8-telegram-app.svg"}
                                />
                                <FontImage
                                    marketPlaceImages={"./Images/platForms/icons8-whatsapp.svg"}
                                />

                                <FontImage
                                    marketPlaceImages={"./Images/platForms/Logo blue.svg"}
                                /> */}



                            </div>
                        </Col>
                        {/* <Col lg={2} md={2} sm={2}>

                        </Col> */}
                        {/* <Col lg={2} md={2} sm={2}>
                        </Col> */}

                        {/* <Col lg={6} md={12} sm={12}>
                            <div className="ImageAdjust">
                                
                            </div>
                        </Col> */}
                        {/* <Col lg={2} md={2} sm={2}>

                        </Col>
                        <Col lg={2} md={2} sm={2}>
                        </Col> */}




                    </Row>
                </Container>
            </section>
            <section className="StickerArea mb-5">
                <Container>
                    <Row>

                        <Col lg={12} md={12} sm={12}>

                            <div className="ImageAdjust mt-4">
                                <FontImage
                                    marketPlaceImages={"./Images/marketPlaces/alpha-art-icon-white2.png"}
                                />
                                <FontImage
                                    marketPlaceImages={"./Images/marketPlaces/digital-eyes-300x47.png"}
                                />
                                <FontImage
                                    marketPlaceImages={"./Images/marketPlaces/magic-eden-icon-1-300x49.png"}
                                />
                                <FontImage
                                    marketPlaceImages={"./Images/marketPlaces/opensea-logo-300x73.png"}
                                />

                                <FontImage
                                    marketPlaceImages={"./Images/marketPlaces/paintswap-new-300x73.png"}
                                />

                                <FontImage
                                    marketPlaceImages={"./Images/marketPlaces/solanart-icon.png"}
                                />

                            </div>
                        </Col>
                        {/* <Col lg={2} md={2} sm={2}>

                        </Col> */}
                        {/* <Col lg={2} md={2} sm={2}>
                        </Col> */}

                        {/* <Col lg={6} md={12} sm={12}>
                            <div className="ImageAdjust">
                                
                            </div>
                        </Col> */}
                        {/* <Col lg={2} md={2} sm={2}>

                        </Col>
                        <Col lg={2} md={2} sm={2}>
                        </Col> */}




                    </Row>
                </Container>
            </section>
            <section className="midSection mt-5" id='Features'>
                <Container>
                    <Row>
                        <Col sm={12} md={12} lg={6}>
                            <div className="LeftOuter mt-5">
                                <LeftSlide
                                    leftSideHead="Easily integrate our bots into your Discord community server in just a minute."
                                />
                                <LeftDetail
                                    upperheading="Sale and Listing Bot for Discord and Twitter."

                                    upperDetail="Keep track of your collection in real-time with our sale and listing bot. Get instant notifications without any delays."
                                />
                                <LeftDetail
                                    upperheading="Stats Bot for Discord and tweeter "

                                    upperDetail="Keep your community informed and engaged by showing off your collection stats with our stats bot. Stay up-to-date and impress your followers with real-time data."
                                />
                                <LeftDetail
                                    upperheading="Twitter Sale and Listing"

                                    upperDetail="Keep your Twitter audience engaged and informed with every detail about your community by automated posting."
                                />
                                <LeftDetail
                                    upperheading="100% Customizable Messages"

                                    upperDetail="Take control of your messages and notifications with  personalized content. You decide what to display on your Discord and Twitter,"
                                />



                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={6}>
                            <div className="DetailimageOuter">
                                <div className="RightImage shadow-lg">
                                    <img src="./Images/DisplayImages/Screen Shot 2022-12-13 at 5.39.55 PM.png" alt="" srcset="" className='responsive' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="midSection2 mt-5">
                <Container>
                    <Row>

                        <Col sm={12} md={12} lg={6}>
                            <div className="RDetailimageOuter">
                                <div className="RightImage shadow-lg">
                                    <img src="./Images/DisplayImages/Screen Shot 2022-12-13 at 6.09.13 PM.png" alt="" srcset="" className='responsive' />
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={6}>
                            <div className="LeftOuter">
                                <LeftSlide
                                    leftSideHead="Stay Alert and Snag the Best Opportunities with Our Tool "
                                />
                                <LeftDetail
                                    upperheading="Whale Tracker Notifier"

                                    upperDetail="Keep track of the biggest players in the market with our whale tracker notifier. Get real-time notifications of what they are buying and selling. "
                                />
                                <LeftDetail
                                    upperheading="Create Custom Alerts"

                                    upperDetail="Get Notified When Your Target NFTs are Listed at the Right Price"
                                />
                                <LeftDetail
                                    upperheading="Underfloor listed nft "

                                    upperDetail="Receive alerts when an NFT is listed below Collection floor price."
                                />


                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="midSection3">
                <Container>
                    <Row>
                        <Col sm={1} md={1} lg={4}>
                            <div className="review">
                                <img src="./Images/reviewImages/review1.png" alt="/" className='responisve' />
                            </div>
                        </Col>

                        <Col sm={1} md={1} lg={4}>
                            <div className="review">
                                <img src="./Images/reviewImages/review2.png" alt="/" className='responisve' />
                            </div>
                        </Col>

                        <Col sm={1} md={1} lg={4}>
                            <div className="review">
                                <img src="./Images/reviewImages/review1.png" alt="/" className='responisve' />
                            </div>
                        </Col>
                        {/* <GreyFont
                            greyHead="Works with other tools"
                            greyDetail="Gmail works great with desktop clients like Microsoft Outlook, Apple Mail and Mozilla Thunderbird, including contact and event sync."
                        />
                        <GreyFont
                            greyHead="Works with other tools"
                            greyDetail="Gmail works great with desktop clients like Microsoft Outlook, Apple Mail and Mozilla Thunderbird, including contact and event sync."
                        /> */}

                    </Row>
                </Container>
            </section>

            <section className="PricingData mt-5 mb-5" id='Pricing'>
                <Container>
                    <Row>
                        <Col>

                            <div className="PriceTagFloat">
                                <div className="TagNameFlex">
                                    <div className="business">

                                        <p>business</p>
                                    </div>
                                    <div className="personal">

                                        <p>Personal</p>
                                    </div>
                                </div>


                            </div>
                            <div className="PriceDataOuter">
                                <div className="priceDataInner">
                                    <PriceCard
                                        gmail="Custom alerts bot"
                                        use="For Personal use"
                                        cost="Cost"
                                        BuyNow="Buy Now"
                                        address="https://discord.gg/SW534FBF"

                                    />
                                    <PriceCard
                                        gmail="Stats bot"
                                        use="For Personal use"
                                        cost="Cost"
                                        BuyNow="Buy Now"
                                        address="https://discord.gg/SW534FBF"
                                    />
                                    <PriceCard
                                        gmail="Sale and Listing "
                                        use="For Personal use"
                                        cost="Cost"
                                        BuyNow="Buy Now"
                                        address="https://discord.gg/SW534FBF"
                                    />


                                </div>
                            </div>

                            <div id="CheckBoxDis">
                                <CheckBox
                                    checkBox1="Discord Setup"
                                    icon={<CheckIcon id="checkColor" />}
                                />
                                <CheckBox
                                    checkBox1="Hosting"
                                    icon={<CheckIcon id="checkColor" />}
                                />
                                <CheckBox
                                    checkBox1="Maintenance"
                                    icon={<CheckIcon id="checkColor" />}

                                />

                                <CheckBox
                                    checkBox1="support"
                                    icon={<CheckIcon id="checkColor" />}

                                />
                                <CheckBox

                                    checkBox1="Posting to twitter"
                                    icon={<CheckIcon id="checkColor" />}
                                />
                                <CheckBox

                                    checkBox1="Multiple collections"
                                    icon={<CheckIcon id="checkColor" />}
                                />
                                <CheckBox
                                    checkBox1="Twitter Post Customization "
                                    icon={<CheckIcon id="checkColor" />}
                                />
                                <CheckBox
                                    checkBox1="Discord bot customization"
                                    icon={<CheckIcon id="checkColor" />}
                                />
                                <CheckBox
                                    checkBox1="multiple Marketplaces"
                                    icon={<CheckIcon id="checkColor" />}
                                />
                                <div className='CheckBoxOuter' >
                                    <div className="CheckBox1"
                                        id='Check1Bottom'>
                                        <p>Multiple platforms i.e. Telegram</p>
                                    </div>
                                    <div className="CheckBox2">
                                        <CheckIcon id="checkColor" />
                                    </div>
                                    <div className="CheckBox3">
                                        <CheckIcon id="checkColor" />

                                    </div>
                                    <div className="CheckBox4">
                                        <CheckIcon id="checkColor" />

                                    </div>
                                </div>

                            </div>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="Note1">
                                *Enhance your Twitter posts with customizable elements such as a personalized token name, price, and links, as well as fun additions like hashtags, smileys, and other relevant links.

                            </p>
                            <p className="Note2">
                                **Make your Discord posts stand out with the ability to customize the bot's name, left side colors, and footer text. Check out the screenshot for inspiration.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='FaqSection mt-5 mb-5'>
                <Container>
                    <Row>
                        <Col sm={1} lg={4} md={5}>
                            <div className="FaqHeading">
                                <h1>
                                    Find the answers you need
                                </h1>
                                <div className="FaqHelpCenter">
                                    <h3 className='faqFlexItems'>Need more help?</h3>
                                    <p className='faqFlexItems'>We have answered many faq in our Discord server faqs. You can join by clicking here.</p>

                                    <a href="https://discord.gg/SW534FBF" className='btn btn-primary HelpButton faqFlexItems'>
                                        Click Here!
                                    </a>

                                </div>
                            </div>
                        </Col>
                        <Col sm={1} lg={2} md={1}></Col>
                        <Col sm={1} lg={6} md={6}>
                            <div className="cardTop">
                                <FaqCard
                                    Question="Can you tell me more about the NFTNOTICE?"

                                    Answer="nftnotice help NFT project founders to track sales and new listings, which can help grow their communities. We also offer a Twitter module to help promote NFT projects on social media by posting stats and listing on Twitter, "

                                />

                                <FaqCard
                                    Question=" Which marketplaces are supported by your bots? "

                                    Answer="Please create a ticket and we will install and configure the bot for you. Our pricing can be found in the pricing channel."


                                />
                                <FaqCard
                                    Question="How do we add the bot?"

                                    Answer="Please create a ticket and we will install and configure the bot for you. Our pricing can be found in the pricing channel."
                                />
                                <FaqCard
                                    Question="Can the appearance of the Discord postings be customized?"

                                    Answer="Yes, the avatar picture and name of the bot can be easily changed by modifying the associated Webhook details. "
                                />

                                <FaqCard
                                    Question="Do I need my own API key for Opensea to use your bots?"

                                    Answer="No, you don't need your own key. Key is the part of our services."
                                />
                            </div>

                        </Col>
                    </Row>
                </Container>

            </section>
            <section className="LastSection">
                <Container fluid>
                    <Row>
                        <Col lg={12} md={12} sm={12}>

                            <div className="Last_sectionImage">
                                <div className="lastOuter">

                                    <h2 className='margin_lastsec headMargin'>looking for a custom NFT bot service.</h2>
                                    <h3 className='margin_lastsec para_margin'>Join Discord server and create a ticket.</h3>
                                    <div className=" last_button">
                                        <BlueButton

                                            Bbutton="Join Discord"
                                            address="https://discord.gg/SW534FBF"
                                        />
                                    </div>


                                </div>
                                <img src="../Images/wave.png" alt="" srcset="" className='responsive' />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </main>
    </>)
}

export default Home;