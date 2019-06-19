import React, { PureComponent } from 'react'
import '../css/lib/Flickity.css'
import '../css/components/Carousel.css'
import Flickity from 'react-flickity-component'

import img1 from '../images/gallery/IMG_0660.jpeg'
import img2 from '../images/gallery/IMG_0761.jpeg'
import img3 from '../images/gallery/IMG_0787.jpeg'
import img4 from '../images/gallery/IMG_0042.jpeg'
import img5 from '../images/gallery/IMG_0965.jpeg'
import img6 from '../images/gallery/IMG_0975.jpeg'
import img7 from '../images/gallery/IMG_1059.jpg'
import img8 from '../images/gallery/IMG_0065.jpeg'
import img9 from '../images/gallery/IMG_1119.jpeg'
import img10 from '../images/gallery/IMG_1144.jpeg'
import img11 from '../images/gallery/IMG_1147.jpg'
import img12 from '../images/gallery/IMG_1166.jpeg'
import img13 from '../images/gallery/IMG_1211.jpeg'
import img14 from '../images/gallery/IMG_7866.jpg'
import img15 from '../images/gallery/IMG_1456.jpeg'
import img16 from '../images/gallery/IMG_0113.jpeg'
import img17 from '../images/gallery/IMG_1282.jpeg'
import img18 from '../images/gallery/IMG_1317.jpeg'
import img19 from '../images/gallery/IMG_0116.jpeg'
import img20 from '../images/gallery/IMG_0117.jpeg'
import img21 from '../images/gallery/IMG_0128.jpg'
import img22 from '../images/gallery/IMG_0163.jpeg'
import img23 from '../images/gallery/IMG_0139.jpeg'
import img24 from '../images/gallery/IMG_0134.jpeg'
import img25 from '../images/gallery/IMG_0146.jpeg'

class Carousel extends PureComponent {
  render () {
    const flickityOptions = {
      initialIndex: Math.round(Math.random() * 25),
      wrapAround: true,
      lazyLoad: true
    }

    return (
      <section className='carousel-wrapper'>
        <h2 className='light'>A Glimpse So Far</h2>
        <div className='container'>
          <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
          >
            <div className='carousel-image-cell'><img src={img1} alt='Our first Saturday together at the Swamp' /><p>Our first Saturday together at the Swamp</p></div>
            <div className='carousel-image-cell'><img src={img2} alt={`Hannah's 2017 Christmas Choir`} /><p>Hannah's 2017 Christmas Choir</p></div>
            <div className='carousel-image-cell'><img src={img3} alt='Visiting Hannah over Christmas break at the Orlando Wetlands Park' /><p>Visiting Hannah over Christmas break at the Orlando Wetlands Park</p></div>
            <div className='carousel-image-cell'><img src={img4} alt='James!' /><p>James!</p></div>
            <div className='carousel-image-cell'><img src={img5} alt='The geologist finds coal in Tennesse' /><p>The geologist finds coal in Tennesse</p></div>
            <div className='carousel-image-cell'><img src={img6} alt='Cabin spring vacationing in North Carolina' /><p>Cabin spring vacationing in North Carolina</p></div>
            <div className='carousel-image-cell'><img src={img7} alt='...flower' /><p>...flower</p></div>
            <div className='carousel-image-cell'><img src={img8} alt='Stoker family Top Golfing' /><p>Stoker family Top Golf-ing</p></div>
            <div className='carousel-image-cell'><img src={img9} alt='Visiting the largest oak tree in Florida' /><p>Visiting the largest oak tree in Florida</p></div>
            <div className='carousel-image-cell'><img src={img10} alt='Hiking in South Carolina with Matt and Steph' /><p>Hiking in South Carolina with Matt and Steph</p></div>
            <div className='carousel-image-cell'><img src={img11} alt='Appalachian waterfalls!' /><p>Appalachian waterfalls</p></div>
            <div className='carousel-image-cell'><img src={img12} alt='Beach weekend in Sarasota, Florida' /><p>Beach weekend in Sarasota, Florida</p></div>
            <div className='carousel-image-cell'><img src={img13} alt='Touring Kennedy Space Center with Michelle and Reese' /><p>Touring Kennedy Space Center with Michelle and Reese</p></div>
            <div className='carousel-image-cell'><img src={img14} alt='Graduation announcement photo shoot' /><p>Graduation announcement photo shoot</p></div>
            <div className='carousel-image-cell'><img src={img15} alt='Finally!' /><p>Finally!</p></div>
            <div className='carousel-image-cell'><img src={img16} alt='First flight ever — en route to Colorado' /><p>First flight <strong>ever</strong> — en route to Colorado</p></div>
            <div className='carousel-image-cell'><img src={img17} alt='😍' /><p>😍</p></div>
            <div className='carousel-image-cell'><img src={img18} alt='Hammocking in view of Quandary Peak' /><p>Hammocking in view of Quandary Peak</p></div>
            <div className='carousel-image-cell'><img src={img19} alt='Engaged!' /><p>Engaged!</p></div>
            <div className='carousel-image-cell'><img src={img20} alt='Taking a proper engagement photo at Kanapaha Gardens' /><p>Taking a proper engagement photo at Kanapaha Gardens</p></div>
            <div className='carousel-image-cell'><img src={img21} alt='Lovely professional engagement photos by Mich Stoker' /><p>Lovely professional engagement photos by Mich Stoker</p></div>
            <div className='carousel-image-cell'><img src={img22} alt='Hammocking at West Side Park' /><p>Hammocking at West Side Park</p></div>
            <div className='carousel-image-cell'><img src={img23} alt='Chicago Christmas trip – ice skating in Millenium Park' /><p>Chicago Christmas trip – ice skating in Millenium Park</p></div>
            <div className='carousel-image-cell'><img src={img24} alt='View from inside the Art Institute' /><p>View from inside the Art Institute</p></div>
            <div className='carousel-image-cell'><img src={img25} alt='Standing (outside) the top of Hancock Tower' /><p>Standing (outside) the top of Hancock Tower</p></div>
          </Flickity>
        </div>
      </section>
    )
  }
}

export default Carousel
