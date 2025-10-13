import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { faBars, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

const Home = () => {

    const [menu, setMenu] = useState(false)
    const [testimonialPag1, setTestimonialPag1] = useState(true)
    const [testimonialPag2, setTestimonialPag2] = useState(false)
    const [testimonialPag3, setTestimonialPag3] = useState(false)



    return (
        <>

            {/* Home top contact header */}
            <div className='md:flex hidden'>
                <div className='w-full p-1 bg-black '>
                    <div className='flex justify-between mx-15'>
                        <p className='text-sm'><span className='text-gray-300'>Phone no :</span> <span className='text-white'>+91 9878675675 </span>  <span className='text-gray-300 ms-1'> or email us :</span> <span className='text-white'>glow@gmail.com</span></p>

                        <div className='text-white flex'>
                            <FontAwesomeIcon icon={faFacebookF} />
                            <FontAwesomeIcon className='mx-4' icon={faInstagram} />
                            <FontAwesomeIcon icon={faXTwitter} />

                        </div>



                    </div>
                </div>
            </div>

            {/* Hero section */}

            <div className='bg-[url(https://images.unsplash.com/photo-1580618672591-eb180b1a973f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2Fsb258ZW58MHx8MHx8fDA%3D)] bg-cover md:bg-top bg-center w-full md:h-175 h-155 relative'>

                <div className='absolute w-full bg-black/60 md:h-175 h-155'></div>

                <div className='absolute z-10 text-white inset-0   '>

                    {/* User home page header */}

                    <div className='md:flex justify-between items-center md:px-30 my-5 px-5'>
                        <div className='flex justify-between '>
                            <h1 className='font-bold text-4xl '>Glow.</h1>

                            {/*small devices menu bar */}
                            <FontAwesomeIcon onClick={() => setMenu(!menu)} icon={faBars} className='text-3xl md:!hidden' />
                        </div>
                        <ul className={menu ? 'md:flex items-center md:mt-0 mt-3 md:text-base text-xl text-center' : 'md:flex hidden items-center  cursor-pointer'}>
                            <Link to={'/'}><li className='text-gray-300 hover:text-white'>Home</li></Link>
                            <Link to={'/about'}><li className='md:mx-10 md:my-0 my-2 text-gray-300 hover:text-white'> About</li></Link>
                            <Link to={'/services'}><li className='text-gray-300 hover:text-white'> Services</li></Link>
                            <Link to={'/contact'}><li className='md:mx-10 md:my-0 my-2 text-gray-300 hover:text-white'> Contact</li></Link>
                            <Link to={'/login'}><li><button className='px-5 py-2 bg-yellow-500 text-black font-bold hover:bg-yellow-400 cursor-pointer'>Login</button></li></Link>
                        </ul>
                    </div>

                    {/* Hero section headings */}

                    <h3 className='text-yellow-500 md:text-2xl text-xl md:mt-50 mt-35 md:mx-30 mx-5'>WELCOME  TO  GLOW</h3>
                    <h2 className='md:text-6xl text-4xl font-bold md:mx-30 mx-5 md:mt-10 mt-5'>Timeless Beauty.</h2>
                    <h1 className='md:text-8xl text-5xl font-bold md:mx-45 mx-15'>Modern style.</h1>
                    <div className='md:block flex justify-center mt-10 '><button className='md:px-30 px-10 py-4 bg-yellow-500 text-black font-bold md:mx-46 mx-10 hover:bg-yellow-400'>Book an Appointment</button></div>

                </div>

            </div>

            {/* About section */}

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


            {/* Services section */}

            <div className='md:mx-40 mx-10 my-20'>
                <h4 className='font-semibold text-md text-yellow-500 text-center mt-3 md:mt-0'>OUR SERVICES</h4>
                <h1 className='font-bold md:text-5xl text-3xl text-center'>From head to toe, we've <br className='hidden md:inline' /> got you covered</h1>

                <div className="md:grid grid-cols-3 gap-5 my-10">
                    <div className="shadow w-full p-3">
                        <img className='w-full h-80 object-cover' src="https://www.bodycraft.co.in/hubfs/Imported_Blog_Media/beautiful-keratin-treated-hair-1-1.jpg" alt="" />
                        <h3 className='text-center text-xl text-yellow-500 mt-3 font-bold'>Smoothening</h3>
                    </div>
                    <div className="shadow w-full p-3 md:my-0 my-5">
                        <img className='w-full h-80 object-cover' src="https://img.freepik.com/free-photo/young-bearded-man-hairdresser-salon_1163-2019.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                        <h3 className='text-center text-xl text-yellow-500 mt-3 font-bold'>Hair Cut</h3>
                    </div>
                    <div className="shadow w-full p-3">
                        <img className='w-full h-80 object-cover' src="https://m.media-amazon.com/images/I/61qd8hwOc9L._UF1000,1000_QL80_.jpg" alt="" />
                        <h3 className='text-center text-xl text-yellow-500 mt-3 font-bold' >Manicure</h3>
                    </div>
                </div>

                <div className='flex justify-center'><button className='bg-yellow-500 px-4 py-2 text-black font-bold  mt-5 cursor-pointer hover:bg-yellow-400'>Explore more</button></div>
            </div>

            {/* Discount */}
            <div className='bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 w-full h-50 flex justify-center items-center my-20 flex-col p-5'>

                <h2 className='text-3xl font-bold'>Get 20% Off</h2>
                <p className='text-xl text-white my-3 text-center'>Join our community for members-only offers and updates</p>

                <div className='flex justify-center'><button className='bg-white px-4 py-2 text-black font-bold  mt-5 cursor-pointer'>Contact Us</button></div>

            </div>

            {/* Testimonial section */}

            <div className='md:mx-40 mx-10 my-20'>
                <h4 className='font-semibold text-md text-yellow-500 text-center mt-3 md:mt-0'>TESTIMONIAL</h4>
                <h1 className='font-bold md:text-5xl text-3xl text-center'>Real stories from people who<br className='hidden md:inline' /> love their new look</h1>

                {/* Testimonial details */}
                <div className='w-full shadow-xl  flex justify-center items-center flex-col my-10 p-5 relative '>
                    <img style={{width:'120px',height:'120px'}} className='rounded-full my-3 object-cover' src={testimonialPag1 ? "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=3017" : testimonialPag2 ? "https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?semt=ais_hybrid&w=740&q=80" : "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="} alt="" />
                    <h3 className='text-yellow-500 text-xl font-semibold'>{testimonialPag1 ? 'James Steve' : testimonialPag2 ? 'Ayona Martin' : 'Julia Samuvel'}</h3>
                    <p className='font-semibold text-lg'>“Friendly  services  and i  loved it.”</p>

                    <div className='absolute bg-yellow-500 md:w-15 md:h-15 w-10 h-10 rounded-full flex justify-center items-center' style={{ left: '-25px', top: '-20px' }} ><FontAwesomeIcon className='text-2xl ' icon={faQuoteLeft} /></div>
                </div>

                {/* Testimonial pagination */}

                <div className='flex justify-center items-center '>
                    <button onClick={() => { setTestimonialPag1(true); setTestimonialPag2(false); setTestimonialPag3(false) }} className={testimonialPag1 ? 'w-3 h-3 bg-yellow-500 rounded-full mx-5 cursor-pointer' : 'w-3 h-3 bg-gray-400 rounded-full mx-5 cursor-pointer'}></button>
                    <button onClick={() => { setTestimonialPag1(false); setTestimonialPag2(true); setTestimonialPag3(false) }} className={testimonialPag2 ? 'w-3 h-3 bg-yellow-500 rounded-full mx-5 cursor-pointer' : 'w-3 h-3 bg-gray-400 rounded-full mx-5 cursor-pointer'}></button>
                    <button onClick={() => { setTestimonialPag1(false); setTestimonialPag2(false); setTestimonialPag3(true) }} className={testimonialPag3 ? 'w-3 h-3 bg-yellow-500 rounded-full mx-5 cursor-pointer' : 'w-3 h-3 bg-gray-400 rounded-full mx-5 cursor-pointer'}></button>
                </div>
            </div>

            <Footer />




        </>
    )
}

export default Home