import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import pic1 from '../images/slider/hackerrank.png'
import pic2 from '../images/slider/codersrank.png'
import pic3 from '../images/slider/github.png'
import pic4 from '../images/slider/j2logo.png'
import pic5 from '../images/slider/codewars.png'
import pic6 from '../images/slider/linkedin.png'
import pic7 from '../images/slider/python.png'
import pic8 from '../images/slider/sololearn.png'
import pic9 from '../images/slider/stackoverflow.png'
import pic10 from '../images/slider/vscode.png'
import pic11 from '../images/slider/sublimetext3.png'
import pic12 from '../images/slider/w3school.png'
import pic13 from '../images/slider/proveyourworth.png'

function Slider(props) {
    var items = [
        {
            name: "Hackerrank",
            pic: < img src={pic1} alt='hackerrank' />
        },
        {
            name: "Codersrank",
            pic: < img src={pic2} alt='codersrank' />
        },
        {
            name: "Github",
            pic: < img src={pic3} alt='github' />
        },
        {
            name: "J2Logo",
            pic: < img src={pic4} alt='j2logo' />
        },
        {
            name: "Codewars",
            pic: < img src={pic5} alt='codewars' />
        },
        {
            name: "Linkedin",
            pic: < img src={pic6} alt='linkedin' />
        },
        {
            name: "Python",
            pic: < img src={pic7} alt='python' />
        },
        {
            name: "SoloLearn",
            pic: < img src={pic8} alt='sololearn' />
        },
        {
            name: "Stackoverflow",
            pic: < img src={pic9} alt='stackoverflow' />
        },
        {
            name: "VSCode",
            pic: < img src={pic10} alt='vscode' />
        },
        {
            name: "SublimeText3",
            pic: < img src={pic11} alt='sublimetext3' />
        },
        {
            name: "W3school",
            pic: < img src={pic12} alt='W3school' />
        },
        {
            name: "Proveyourworth",
            pic: < img src={pic13} alt='Proveyourworth' />
        }
    ]

    return (
        <div className='sliderSize'>
            <Carousel>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </div>
    )
}

function Item(props) {
    return (
        <Paper className='insidePic'>

            <p >{props.item.pic}</p>
        </Paper >
    )
}
export default Slider