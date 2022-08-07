import './hotel.css'
import Navbar from '../../component/navbar/Navbar'
import Header from '../../component/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationDot,
  faCircleXmark,
  faCircleArrowLeft,
  faCircleArrowRight,
} from '@fortawesome/free-solid-svg-icons'
import MailList from '../../component/mailList/MailList'
import Footer from '../../component/footer/Footer'
import { useState } from 'react'

const Hotel = () => {
  //slider
  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)

  const photos = [
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTq1w0xszkmmVMMf169usHTPyNRXigvdvhVg&usqp=CAU',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTq1w0xszkmmVMMf169usHTPyNRXigvdvhVg&usqp=CAU',
    },

    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTq1w0xszkmmVMMf169usHTPyNRXigvdvhVg&usqp=CAU',
    },

    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHOQO1I_S2WXzZaIpg_eixvh5LjQRd-Psjng&usqp=CAU',
    },

    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHOQO1I_S2WXzZaIpg_eixvh5LjQRd-Psjng&usqp=CAU',
    },

    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHOQO1I_S2WXzZaIpg_eixvh5LjQRd-Psjng&usqp=CAU',
    },
  ]

  const handleOpen = (i) => {
    setSlideNumber(i)
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSlideNumber
    if (direction === 'l') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }
    setSlideNumber(newSlideNumber)
  }

  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className='hotelContainer'>
        {open && (
          <div className='slider'>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className='close'
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className='arrow'
              onClick={() => handleMove('l')}
            />
            <div className='sliderWrapper'>
              <img src={photos[slideNumber].src} alt='' className='sliderImg' />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className='arrow'
              onClick={() => handleMove('r')}
            />
          </div>
        )}
        <div className='hotelWrapper'>
          <button className='bookNow'>Reserve or Book Now!</button>
          <h1 className='hotelTitle'> Peace Hotel</h1>
          <div className='hotelAddress'>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Tanke Ilorin, kwara state</span>
          </div>
          <span className='hotelDistance'>
            Excellent location - 500m from center
          </span>
          <span className='hotelPriceHighlight'>
            Book a stay over #49,500 at this property and get a free airport
            taxi
          </span>
          <div className='hotelImages'>
            {photos.map((photo, i) => (
              <div className='hotelImgWrapper'>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=''
                  className='hotelImg'
                />
              </div>
            ))}
          </div>
          <div className='hotelDetails'>
            <div className='hotelDetailsTexts'>
              <h1 className='hotelTitle'>Stay in the heart of Ilorin</h1>
              <p className='hotelDesc'>
                The hotel offers a complete experience with common areas that
                allow you to meet new people in a unique atmosphere. Lounge
                area, Ping Pong table, table soccer, darts & Boiler room: we
                told you, it’s not a hotel like the others, it’s a sharing
                hotel. welcomes you in a real cosmopolitan, pulsing milieu, at
                the same time offering peace and intimate retirement, just in
                the heart of the city centre. Timeless elegance tailored for the
                demands of our time; exceptional combination of magnificent
                architecture and divine cuisine, in perfect harmony. A
                Michelin-starred restaurant and a beautifully restored town
                palace joined forces for you!
              </p>
            </div>
            <div className='hotelDetailsPrice'>
              <h1>Perfect for 5-night stay</h1>
              <span>
                Located in the real heart of Ilorin, this property has an
                excellent location of 9.0!
              </span>
              <h2>
                <b># 150,000</b> (nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel
