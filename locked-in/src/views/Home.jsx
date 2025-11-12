import React, { useEffect } from 'react'
import bbCurl from '../assets/bbcurl.jpeg'
import wtf from '../assets/wtf.webp'
import coaching from '../assets/coaching.jpeg'
import ReviewsGrid from '../components/ReviewsGrid.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
    useEffect(() => {
        AOS.init({
          duration: 1000,     
          once: true,       
          offset: 100,      
        });
    }, []);
    return (
        <div className="flex justify-center w-screen flex-col h-auto bg-zinc-950 items-center">
            {/* hero */}
            <div data-aos="fade" className=" relative flex w-screen h-[90vh]  items-center justify-center bg-[url(./assets/hero-header.jpg)] bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-black/60 h-full " />
                <div className="relative z-10 flex flex-col items-center text-center px-4">
                    <span className="text-green-500 text-3xl md:text-5xl font-bold text-shadow-md text-center font-sans">
                        Achieve the body that you <br /> thought was impossible.
                    </span>
                    <span className='text-white drop-shadow-md text-sm w-[400px] md:text-lg mt-4 text-center md:w-[550px] font-regular font-sans text-shadow-md'>
                        Expert coaching & personalized programs will keep you motivated every step of the way.
                    </span>
                    <button className="block px-4 py-2 mt-5 text-white no-underline active:bg-green-900 bg-green-700 rounded-md transition duration-300 shadow-md">
                        Start Free Trial!
                    </button>
                </div>
            </div>

            <div data-aos="fade-up" className="container gap-2 mt-10 p-4 bg-zinc-950 self-center items-center justify-center flex flex-col-reverse md:flex-row ">
                <div className="flex  p-4 grow w-full flex-col ">
                    <p className='font-bold text-3xl md:text-6xl text-white shadow-md'> <span className='text-green-600'>Built</span> for Strength, <br /> <span className='text-green-600'>Fueled</span> by Purpose.</p>
                    <span className='text-white mt-4 text-justify'>We’re more than workouts we’re a movement toward a stronger body, sharper mind, and unstoppable lifestyle. Every rep, every run, every drop of sweat is a step toward becoming your best self. Whether you’re just starting your journey or pushing past your limits, we’re here to guide, motivate, and move with you because fitness isn’t just a goal, it’s a way of life.
                    </span>
                </div>
                <div className="flex grow w-full flex-col  ">
                    <img src={bbCurl}  alt="img-about " className='w-full h-auto object-contain rounded-lg' />
                </div>
            </div>
            <section data-aos="fade-up" className="container text-white  items-center justify-center mt-1 py-4 px-4 " id='services'>
                <p className='font-bold text-2xl md:text-4xl text-white text-center my-4'><span className='text-green-700'>What</span> we offer</p>
                <div className=" items-center justify-center mt-1 bg-zinc-950 grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className=" bg-green-900 shadow-md h-[250px] w-fill rounded-md md:w-full p-2 flex items-center justify-center flex-col gap-2">
                        <i className="fa-solid fa-dumbbell text-white text-2xl"></i>
                        <span className="text-white font-medium">Strength Training</span>
                    </div>
                    <div className=" bg-green-900 shadow-md h-[250px] w-fill rounded-md md:w-full p-2 flex items-center justify-center flex-col gap-2">
                        <i className="fa-solid fa-heart-pulse text-white text-2xl"></i>
                        <span className="text-white font-medium">Cardio Programs</span>
                    </div>
                    <div className=" bg-green-900 shadow-md h-[250px] w-fill rounded-md md:w-full p-2  flex items-center justify-center flex-col gap-2">
                        <i className="fa-solid fa-person-running text-white text-2xl"></i>
                        <span className="text-white font-medium">Personal Training</span>
                    </div>
                    <div className="  bg-green-900 shadow-md h-[250px] w-fill rounded-md md:w-full p-2  flex items-center justify-center flex-col gap-2">
                        <i className="fa-solid fa-chart-line text-white text-2xl"></i>
                        <span className="text-white font-medium">Progress Tracking</span>
                    </div>
                </div>
            </section>

            <div data-aos="fade-up" className="container -1 mt-1 p-4 bg-zinc-950 self-center gap-1 items-center justify-center flex flex-col md:flex-row ">
                <div className="flex   grow w-full flex-col ">
                    <img src={wtf}  alt="img-about" className='w-full h-auto object-contain rounded-lg' />
                </div>
                <div className="flex  p-4 grow w-full flex-col ">
                    <p className='font-bold text-3xl md:text-5xl text-white'><span className='text-green-700'>Everything</span> You Need in One Fitness Destination</p>
                    <span className='text-white mt-4 text-justify'>
                        Experience a premium fitness environment built for comfort, performance, and results. 
                        From modern equipment to relaxing recovery zones, our gym provides all the essentials 
                    you need for an exceptional workout experience.  
                    </span>
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-4 w-full mt-5 items-center justify-center bg-zinc-950">
                        <div className="flex items-center gap-2 p-2">
                            <i className="fa-solid fa-dumbbell text-green-700 text-2xl"></i>
                            <span className="text-white font-medium">State-of-the-Art Equipment</span>
                        </div>

                        <div className="flex items-center gap-2 p-2">
                            <i className="fa-solid fa-shower text-green-700 text-2xl"></i>
                            <span className="text-white font-medium">Clean Showers & Lockers</span>
                        </div>

                        <div className="flex items-center gap-2 p-2">
                            <i className="fa-solid fa-person-running text-green-700 text-2xl"></i>
                            <span className="text-white font-medium">Spacious Training Area</span>
                        </div>

                        <div className="flex items-center gap-2 p-2">
                            <i className="fa-solid fa-wifi text-green-700 text-2xl"></i>
                            <span className="text-white font-medium">Free Wi-Fi Access</span>
                        </div>

                        <div className="flex items-center gap-2 p-2">
                            <i className="fa-solid fa-mug-hot text-green-700 text-2xl"></i>
                            <span className="text-white font-medium">Lounge & Refreshment Bar</span>
                        </div>

                        <div className="flex items-center gap-2 p-2">
                            <i className="fa-solid fa-car text-green-700 text-2xl"></i>
                            <span className="text-white font-medium">Secure Parking Area</span>
                        </div>
                    </div>
                </div>
            </div>

            <section data-aos="fade-up" className="container  items-center text-white justify-center mt-1 p-4 flex flex-col" id='prices'>
                <p className='text-center text-2xl md:text-5xl font-bold mb-3'>Our <span className='text-green-700'>Membership</span> Plans</p>
                <span className='text-center'>
                    No hidden fees. No long-term contracts. Just affordable access to top-quality equipment, classes, and facilities.
                </span>
                <div className=" items-center justify-center bg-zinc-950 grid grid-cols-2 md:grid-cols-4 gap-3 w-full mt-5 text-white">
                    <div className=" h-[450px] w-fill bg-zinc-900 rounded-xl md:w-full p-2 flex items-center justify-center flex-col shadow-lg">
                        <p className='font-bold text-xl md:text-3xl mt-8'>BASIC</p>
                        <p className='font-regular text-md md:text-md'>P999/ month</p>
                        <div className="mt-4 flex flex-col gap-1 mx-3">
                            <div className="flex gap-2 items-center ">
                                <i class="fa-solid fa-circle-check text-green-500"></i>
                                <span className='text-white font-medium'>24/7 access</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <i class="fa-solid fa-circle-check text-green-500"></i>
                                <span className='text-white font-medium'>Locker room access</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <i class="fa-solid fa-circle-check text-green-500"></i>
                                <span className='text-white font-medium'>Selected gym access</span>
                            </div>
                        </div>
                        <div className='flex grow'/>
                        <button className="w-full px-4 py-2 mt-5 text-white no-underline -none focus:-none active:bg-green-900 bg-green-700 rounded-xl ">
                            Get started
                        </button>
                    </div>
                    <div className=" h-[450px] w-fill bg-zinc-900 rounded-xl md:w-full p-2 flex items-center justify-center flex-col shadow-lg">
                        <p className='font-bold text-xl md:text-3xl mt-8'>STANDARD</p>
                        <p className='font-regular text-md md:text-md'>P1,499/ month</p>
                        <div className="mt-4 flex flex-col gap-1 mx-3">
                            <div className="flex gap-2 items-center ">
                                <i class="fa-solid fa-circle-check text-green-500"></i>
                                <span className='text-white font-medium'>24/7 access</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <i class="fa-solid fa-circle-check text-green-500"></i>
                                <span className='text-white font-medium'>Locker room access</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <i class="fa-solid fa-circle-check text-green-500"></i>
                                <span className='text-white font-medium'>Selected gym access</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <i class="fa-solid fa-circle-check text-green-500"></i>
                                <span className='text-white font-medium'>1 group class</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <i class="fa-solid fa-circle-check text-green-500"></i>
                                <span className='text-white font-medium'>1 Personal trainer</span>
                            </div>
                        </div>
                        <div className='flex grow'/>
                        <button className="w-full px-4 py-2 mt-5 text-white no-underline -none focus:-none active:bg-green-900 bg-green-700 rounded-xl ">
                            Get started
                        </button>
                    </div>
                    <div className=" h-[450px] w-fill bg-zinc-900 rounded-xl md:w-full p-2 flex items-center justify-center flex-col shadow-lg">
                        <p className='font-bold text-xl md:text-3xl mt-8'>PREMIUM</p>
                        <p className='font-regular text-md md:text-md'>P1,999/ month</p>
                        <div className="mt-4 flex flex-col gap-1 mx-3">
                            <div className="flex gap-2 items-center ">
                                <i class="fa-solid fa-circle-check text-green-500"></i>
                                <span className='text-white font-medium'>24/7 access</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <i class="fa-solid fa-circle-check text-green-500"></i>
                                <span className='text-white font-medium'>Locker room access</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <i class="fa-solid fa-circle-check text-green-500"></i>
                                <span className='text-white font-medium'>Full gym access</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <i class="fa-solid fa-circle-check text-green-500"></i>
                                <span className='text-white font-medium'>Priority booking</span>
                            </div>
                        </div>
                        <div className='flex grow'/>
                        <button className="w-full px-4 py-2 mt-5 text-white no-underline -none focus:-none active:bg-green-900 bg-green-700 rounded-xl ">
                            Get started
                        </button>
                    </div>
                    <div className=" h-[450px] w-fill bg-zinc-900 rounded-xl md:w-full p-2 flex items-center justify-center flex-col shadow-lg">
                        <p className='font-bold text-xl md:text-3xl mt-8'>ELITE</p>
                        <p className='font-regular text-md md:text-md'>P2,500/ month</p>
                        <div className="mt-4 flex flex-col gap-1 mx-3">
                            <div className="flex gap-2 items-center ">
                                <i class="fa-solid fa-circle-check text-green-500"></i>
                                <span className='text-white font-medium'>All Premium perks</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <i class="fa-solid fa-circle-check text-green-500"></i>
                                <span className='text-white font-medium'>Unlimited classes</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <i class="fa-solid fa-circle-check text-green-500"></i>
                                <span className='text-white font-medium'>Designated Coach</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <i class="fa-solid fa-circle-check text-green-500"></i>
                                <span className='text-white font-medium'>Recovery & sauna access</span>
                            </div>
                        </div>
                        <div className='flex grow'/>
                        <button className="w-full px-4 py-2 mt-5 text-white no-underline -none focus:-none active:bg-green-900 bg-green-700 rounded-xl ">
                            Get started
                        </button>
                    </div>
                </div>
            </section>
            <section data-aos="fade-up" className="container -1 mt-1 p-4 bg-zinc-950 self-center items-center justify-center gap-5 flex flex-col-reverse md:flex-row " id='faqs'>
                <div className="flex py-4 grow w-full flex-col gap-2 items-center ">
                    <p className='font-bold text-2xl md:text-5xl text-white text-start'><span className='text-green-700'>Everything</span> You Need to Know</p>
                    <span className='text-white text-justify mb-4'>
                        We’ve got answers to help you start your fitness journey with confidence.
                    </span>
                    <div className="collapse collapse-plus bg-green-700">
                        <input type="checkbox" /> 
                        <div className="collapse-title text-white font-semibold">
                            How do I start my membership?
                        </div>
                        <div className="collapse-content text-sm">
                            You can sign up online by clicking the “Start Free Trial!” button or visit us at the gym to register in person. Once you’ve joined, you’ll receive full access to our training facilities and programs.
                        </div>
                     </div>
                     <div className="collapse collapse-plus bg-zinc-900">
                        <input type="checkbox" /> 
                        <div className="collapse-title text-white font-semibold">
                            Do I need to be fit before I start?
                        </div>
                        <div className="collapse-content text-sm">
                            Not at all! Our programs are designed for all fitness levels from beginners to athletes. Your coach will tailor your workouts based on your current fitness and goals.
                        </div>
                     </div>
                     <div className="collapse collapse-plus bg-green-700">
                        <input type="checkbox" /> 
                        <div className="collapse-title text-white font-semibold ">
                            What types of training do you offer?
                        </div>
                        <div className="collapse-content text-sm">
                            We offer a variety of training styles including strength training, cardio, HIIT, functional workouts, and personalized coaching. You can choose what fits your goals best.
                        </div>
                     </div>
                     <div className="collapse collapse-plus bg-zinc-900">
                        <input type="checkbox" /> 
                        <div className="collapse-title text-white font-semibold ">
                            Do you provide nutrition or meal guidance?
                        </div>
                        <div className="collapse-content text-sm">
                            Yes! We include nutrition plans and tips to help you maximize your performance and reach your fitness goals faster.
                        </div>
                     </div>
                     <div className="collapse collapse-plus bg-green-700">
                        <input type="checkbox" /> 
                        <div className="collapse-title text-white font-semibold bg-green-700">
                            Can I cancel or pause my membership?
                        </div>
                        <div className="collapse-content text-sm">
                            Absolutely. You can pause or cancel anytime — just contact our support team or visit the front desk. We make it simple and flexible for your convenience.
                        </div>
                     </div>
                </div>
                <div className="flex   grow w-full flex-col  ">
                    <img src={coaching}  alt="img-about " className='w-full h-auto object-contain rounded-lg' />
                </div>
            </section>
            <div data-aos="fade" className="container  items-center text-white justify-center mt-1 p-2 flex flex-col py-10 ">
                <ReviewsGrid/>
            </div>
        </div>
    )
}
