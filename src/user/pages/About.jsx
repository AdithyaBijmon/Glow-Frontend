import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'

const About = () => {
  return (
    <>
      <Header />

      <div className='relative bg-[url(https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/BXoCcli6Gjgt702lg/videoblocks-trendy-barber-cuts-bearded-mans-hair-with-a-clipper-in-barbershop-mens-hairstyling-and-hair-cutting-in-salon-grooming-the-hair-with-trimmer-hairdresser-doing-haircut-in-retro-hair-salon-tracking_huj19xwci_thumbnail-1080_05.png)] bg-cover w-full bg-center h-100'>

      <div className='absolute bg-black/50 w-full h-100'></div>

      <div className='absolute inset-0 flex justify-center items-center h-100 flex-col'>
        <h1 className='text-4xl font-bold text-white'>About Us</h1>
         <div className='bg-yellow-500 w-25 h-1 my-2'></div>
        </div>

      </div>



      <div className='md:grid grid-cols-2 gap-10 md:mx-40 mx-10  my-20'>
        {/* image,border and box */}
        <div className='md:px-30'>
          <div className=' bg-[url(https://i2-prod.mirror.co.uk/article32501533.ece/ALTERNATES/s1200c/1_GettyImages-1469265810.jpg)] w-full h-90 bg-cover bg-center border-20 border-yellow-500 '>
          </div>
          {/* <div style={{marginBottom:'500px'}} className=" border-4 border-yellow-500 h-90"></div> */}

        </div>
        {/* About heading and description */}
        <div>
          <h4 className='font-semibold text-md text-yellow-500 md:text-left text-center mt-3 md:mt-0'>OUR STORY</h4>
          <h1 className='font-bold md:text-5xl text-3xl md:text-left text-center'>The Faces  Behind the Chair</h1>
          <p className='text-justify my-5'>Our journey began with a simple idea: to create a space where expertise meets a genuine love for what we do. Every cut, color, and style is a testament to our dedication.</p>

          <p className='text-justify'>More than just a salon, we've built a home for our community. We created this space to be a relaxing escape where you can unwind, be yourself, and leave feeling refreshed.</p>

        </div>

      </div>



      <Footer />
    </>
  )
}

export default About