import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import FeatureDrop from './FeatureDrop';


const PriceCard = (props) => {
    const [isShown, setIsShown] = useState(false);
    const handclick = () => {
        setIsShown(current => !current);
    }

    return (<>
        <div className="TagDataBox">
            <p className="gmail marginLeft">{props.gmail}</p>
            <p className="use marginLeft">{props.use}</p>
            <div className="dataFloat">
                <p className="cost marginLeft">{props.cost}</p>
                <a className="btn btn-primary buy" href={props.address}>{props.BuyNow}</a>
            </div>

            <div className="MobileFeature">
                <div className="FeatureDataout" style={{ display: isShown ? 'block' : 'none' }}>
                    <FeatureDrop FeatureData={"Discord Setup"} />
                    <FeatureDrop FeatureData={"Hosting"} />
                    <FeatureDrop FeatureData={"Maintenance"} />
                    <FeatureDrop FeatureData={"support"} />
                    <FeatureDrop FeatureData={"Posting to twitter"} />
                    <FeatureDrop FeatureData={"Multiple collections"} />
                    <FeatureDrop FeatureData={"Twitter Post Customization "} />
                    <FeatureDrop FeatureData={"Discord bot customization"} />
                    <FeatureDrop FeatureData={"multiple Marketplaces"} />

                </div>

                <div className="showFeature">
                    <ArrowDropDownIcon className='ArrowDown marginFeature' onClick={handclick} style={{ display: isShown ? 'block' : 'none' }} />
                    <ArrowDropUpIcon className='ArrowUp marginFeature' onClick={handclick} style={{ display: isShown ? 'none' : 'block' }} />
                    <p className='marginFeature'>show features</p>
                </div>
            </div>


        </div>
    </>)
}

export default PriceCard