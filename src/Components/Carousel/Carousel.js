import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Carousel.css'
const Carousel=()=>{
    return(
        <div style={{margin:'30px'}}>
<Slider>
    <div>
        <img src='../images/Carousel/banner-img.webp' alt='' style={{width:'100%',height:'50vh'}}/>
    </div>
    <div>
        <img src='../images/Carousel/banner-img2.webp' alt='' style={{width:'100%',height:'50vh'}}/>
    </div>
    <div>
        <img src='../images/Carousel/banner-img3.webp' alt='' style={{width:'100%',height:'50vh'}}/>
    </div>
    <div>
        <img src='../images/Carousel/banner-img4.webp' alt='' style={{width:'100%',height:'50vh'}}/>
    </div>
    <div>
        <img src='../images/Carousel/banner-img5.webp' alt='' style={{width:'100%',height:'50vh'}}/>
    </div>
</Slider>
        </div>
    )
}

export default Carousel