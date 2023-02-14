import React from 'react';
import './Project.css';
import { Link } from 'react-router-dom';
import downArrow from '../../assets/images/downarrow.png';
import ReactCurvedText from 'react-curved-text';
import project from '../../assets/images/project.png';
// For Slider
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Project = () => {

    const projects = [
        {
            id: '01',
            image: project,
            imageAlt: 'project image',
            title: "E-commerce Website",
            content: "All of our e-commerce project that are done for our clients with satisfaction and success",
            projects: '50 Projects'
        },
        {
            id: '02',
            image: project,
            imageAlt: 'project image',
            title: "E-commerce Website",
            content: "All of our e-commerce project that are done for our clients with satisfaction and success",
            projects: '50 Projects'
        },
        {
            id: '03',
            image: project,
            imageAlt: 'project image',
            title: "E-commerce Website",
            content: "All of our e-commerce project that are done for our clients with satisfaction and success",
            projects: '50 Projects'
        },
        {
            id: '04',
            image: project,
            imageAlt: 'project image',
            title: "E-commerce Website",
            content: "All of our e-commerce project that are done for our clients with satisfaction and success",
            projects: '50 Projects'
        },
        {
            id: '05',
            image: project,
            imageAlt: 'project image',
            title: "E-commerce Website",
            content: "All of our e-commerce project that are done for our clients with satisfaction and success",
            projects: '50 Projects'
        }
    ];

    return (
        <section style={{ background: '#1E2337' }} className='py-14'>
            <div className='w-full lg:w-11/12 px-6 lg:px-6 mx-auto'>

                {/* Top Part */}
                <div className='flex justify-between items-center'>
                    <div>
                        <h2 className='text-5xl text-white font-bold pb-7'>Our Project</h2>
                        <p style={{ borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }} className='w-[450px] text-slate-200 pl-2 pb-2 rounded-md shadow-md'>Create a custom website for your business with eye-catching banners, responsive design, and intuitive navigation.</p>
                    </div>
                    <div className='relative pt-2'>
                        <p className='text-white text-center curved-text'>
                            <ReactCurvedText width='200'
                                height='120'
                                cx='75'
                                cy='70'
                                rx='40'
                                ry='44'
                                startOffset='48'
                                reversed={true}
                                text='Our project'
                                textProps={{ "style": { "fontSize": "16" } }}
                                textPathProps={{ "fill": "#ffffff" }}
                                tspanProps={null}
                                ellipseProps={null}
                                svgProps={{ "style": { "transform": "rotate(-36deg)" } }} />
                        </p>
                        <div style={{ background: '#FE6313' }} className='w-[80px] h-[80px] rounded-full text-center flex justify-center items-center mx-auto relative'>
                            <span className='bg-white z-10 w-[20px] h-[20px] rounded-full text-white'>-</span>
                            <img className='w-[60px] h-[100px] mt-[90px] absolute' src={downArrow} alt="down-arrow" />
                        </div>
                        <Link className='pt-14 block text-center text-white font-medium hover:text-accent' to='/' >See all</Link>
                    </div>
                </div>

                {/* Bottom Part */}
                <div className='pt-8 project-slider'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        centerSlide='true'
                        fade='true'
                        grabCursor='true'
                        autoplay={{
                            delay: 3000,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation, A11y, Autoplay]}
                        className="mySwiper"
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            767: {
                                slidesPerView: 2,
                            },
                            1140: {
                                slidesPerView: 3,
                            }
                        }}
                    >

                        <div>
                            {
                                projects.map(project =>
                                    <SwiperSlide className='project-slide'>
                                        <div key={project.id} className=''>
                                            <Link className='project-image' to='/'>
                                                <img className='h-[480px] w-full' src={project.image} alt={project.imageAlt} />
                                                <p className='text-accent font-medium text-xl'>{project.content}</p>
                                            </Link>
                                            <div className='flex justify-between text-white py-3'>
                                                <h4 className='font-bold text-xl'> {project.title} </h4>
                                                <Link to='/add' className='text-white hover:text-accent'> {project.projects} </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            }
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Project;