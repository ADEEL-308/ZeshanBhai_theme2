import { React, useState } from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const FaqCard = (props) => {
    const [isShown, setIsShown] = useState(false);
    const handclick = () => {
        setIsShown(current => !current);
    }
    return (
        <>
            <div id="faqMain">
                <div id="FaqQuestion">
                    <p>{props.Question}</p>
                    <ExpandLessIcon id="faqIcon" onClick={handclick} style={{ display: isShown ? 'block' : 'none' }} />
                    <ExpandMoreIcon id="faqIconMore" onClick={handclick} style={{ display: isShown ? 'none' : 'block' }} />
                </div>
                <p id='faqAnswer' style={{ display: isShown ? 'block' : 'none' }}>{props.Answer}</p>
            </div>
        </>
    )
}

export default FaqCard
