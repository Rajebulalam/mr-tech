import React from 'react';
import './Banner.css';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

const Banner = () => {

    const sliderInformation = [
        {
            id: '01',
            title: 'Website Building',
            content: "Everyone wants to grow their business or service, and business grows when customers grow and customers grow when they see it.",
            image: "https://i.ibb.co/N7yZgnv/webdevelopment.png",
            imageAlt: "Web Development"
        },
        {
            id: '02',
            title: 'Digital Marketing',
            content: "Everyone wants to grow their business or service, and business grows when customers grow and customers grow when they see it.",
            image: "https://i.ibb.co/FmzF4zG/digital.png",
            imageAlt: "Digital Marketing"
        },
        {
            id: '03',
            title: 'Business Consultency',
            content: "Everyone wants to grow their business or service, and business grows when customers grow and customers grow when they see it.",
            image: "https://i.ibb.co/wBsnkVQ/business.png",
            imageAlt: "Business Consultancy"
        }
    ];

    return (
        <section className='bannerPart'>
            <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto py-10'>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    centerSlide='true'
                    fade='true'
                    grabCursor='true'
                    autoplay={{
                        delay: 2000,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, A11y]}
                    className="mySwiper"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        // 767: {
                        //     slidesPerView: 2,
                        // },
                        // 1140: {
                        //     slidesPerView: 3,
                        // }
                    }}
                >

                    <div>
                        {
                            sliderInformation.map(data =>
                                <SwiperSlide className='bannerSlide'>
                                    <div key={data.id} className='slide-content md:flex items-center px-6'>
                                        <div className='px-4 w-full'>
                                            <h2 className='text-5xl font-bold mb-4 text-primary'> {data.title} </h2>
                                            <p className='mb-4 text-lg'> {data.content} </p>
                                            <Link className='btn btn-primary text-accent hover:text-neutral m-0 py-0' to='/'>Know more</Link>
                                        </div>
                                        <div className='w-full'>
                                            <img className='h-[450px]' src={data.image} alt={data.imageAlt} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                    </div>
                </Swiper>

            </div>
        </section>
    );
};

export default Banner;