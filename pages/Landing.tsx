import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/legacy/image';
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md'


function Landing() {
  return (
    <div className='min-h-screen'>

      <Carousel 
      additionalTransfrom={0}
      arrows={false}
      autoPlay
      autoPlaySpeed={10000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={100}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 1,
          partialVisibilityGutter: 40
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 1,
          partialVisibilityGutter: 30
        }
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={2}
      swipeable>
        <div className=" bg-no-repeat  bg-cover bg-center  bg-black  " style={{ backgroundImage: 'url(pjbg1.svg)'}}>
          <div className='text-2xl lg:text-6xl font-bold p-12 lg:p-28 text-white'>
            Get 20% OFF! <br /> When You Purchase above $100 <br />
            <button className='text-black font-bold text-sm lg:text-xl outline-white outline hover:outline-none outline-offset-4 rounded-full p-1 lg:p-3 mt-4 bg-white ' type='button' title='shop now'>Shop Now!</button>
          </div>
        </div>
        <div className=" bg-no-repeat  bg-cover bg-center  bg-black  " style={{ backgroundImage: 'url(pjbg2.svg)'}}>
          <div className='text-2xl lg:text-6xl font-bold p-12 lg:p-28 text-white'>
            Millinery needs?? <br />
            you are at the right place! <br />
            <button className='text-black font-bold text-sm lg:text-xl outline-white outline hover:outline-none outline-offset-4 rounded-full p-1 lg:p-3 mt-4 bg-white' type='button' title='shop now'>Shop Now!</button>
          </div>
        </div>
        <div className=" bg-no-repeat  bg-cover bg-center  bg-black  " style={{ backgroundImage: 'url(pjbg3.svg)'}}>
          <div className='text-2xl lg:text-6xl font-bold p-12 lg:p-28 text-white'>
            Get your tickets<br />
            for Bethel Revival's live album recording! <br />
            <button className='text-black font-bold text-sm lg:text-xl outline-white outline hover:outline-none outline-offset-4 mt-4 rounded-full p-1 lg:p-3 bg-white ' type='button' title='shop now'>Shop Now!</button>
          </div>
        </div>
      </Carousel>



    </div>
  )
}

export default Landing