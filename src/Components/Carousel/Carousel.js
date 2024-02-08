import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Carousel.css'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
const PreviousButton=(props)=>{
    const {className,onClick}=props
    return(
<div className={className} onClick={onClick} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
   <ArrowBackIos style={{color:'gray',fontSize:'20px'}}/> 
</div>
    )
}

const NextButton=(props)=>{
    const {className,onClick}=props
    return(
        <div className={className} onClick={onClick} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            <ArrowForwardIos style={{color:'gray',fontSize:'20px'}}/>
        </div>
    )
}

const Carousel=()=>{
    return(
        <div style={{margin:'30px'}}>
<Slider autoplay autoplaySpeed={2000} dots infinite 
prevArrow={<PreviousButton/>}
nextArrow={<NextButton/>}
>
    <div>
        <img src='../images/Carousel/banner-img.webp' alt='' style={{width:'100%',height:'40vh'}}/>
    </div>
    <div>
        <img src='../images/Carousel/banner-img2.webp' alt='' style={{width:'100%',height:'40vh'}}/>
    </div>
    <div>
        <img src='../images/Carousel/banner-img3.webp' alt='' style={{width:'100%',height:'40vh'}}/>
    </div>
    <div>
        <img src='../images/Carousel/banner-img4.webp' alt='' style={{width:'100%',height:'40vh'}}/>
    </div>
    <div>
        <img src='../images/Carousel/banner-img5.webp' alt='' style={{width:'100%',height:'40vh'}}/>
    </div>
</Slider>
        </div>
    )
}

export default Carousel