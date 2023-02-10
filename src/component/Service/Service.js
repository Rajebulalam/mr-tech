import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
import web from '../../assets/images/web3.png';
import marketing from '../../assets/images/marketing.png';
import business from '../../assets/images/business Icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Service = () => {

    // Web Development Content
    // Empower your online presence with professional web development services. Expert design, robust functionality, and seamless user experience. Get ahead of the competition today!

    const services = [
        {
            id: '01',
            icon: web,
            title: "Web Development",
            content: "Build a strong online presence with our web development services. Get a professional website designed with cutting-edge technology, user-friendly interface, and responsive design. Drive success for your business now!",
            imgAlt: "webDevelopmentImageIcon"
        },
        {
            id: '02',
            icon: marketing,
            title: "Digital Marketing",
            content: "Maximize your brand's potential with our digital marketing solutions. Target your audience with precision, drive traffic and boost sales with strategy-driven campaigns. Get ahead in the digital age now!",
            imgAlt: "marketingImageIcon"
        },
        {
            id: '03',
            icon: business,
            title: "Business Consultancy",
            content: "Unlock your business's full potential with expert consultancy services. Discover new opportunities, optimize operations, and achieve sustainable growth with our tailored solutions. Invest in your future today!",
            imgAlt: "businessImageIcon"
        }
    ];

    return (
        <section className='pb-8 service-wrapper'>
            <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto'>
                <h3 className='text-center text-4xl font-extrabold pb-2 text-primary'>Our Services</h3>
                <p style={{ color: '#aaa' }} className='text-center pb-8 text-lg'>Take our services to boost your business into the nest level</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 lg:gap-7 pt-4'>
                    {
                        services.map(service =>
                            <div key={service.id} className='p-5 pb-8 rounded text-center shadow-lg bg-white'>
                                <img className='h-[80px] mt-3 mx-auto rounded-lg p-3 bg-white shadow-2xl
                                ' src={service.icon} alt={service.imgAlt} />
                                <h3 className='text-3xl font-bold my-4 py-3 text-primary'> {service.title} </h3>
                                <p className='pb-8 text-lg'> {service.content} </p>
                                <Link className='px-6 text-lg border border-primary text-secondary rounded-md py-2 font-medium hover:bg-primary hover:text-accent' to='/'>Click Here <FontAwesomeIcon className='pl-1' icon={faArrowRight}></FontAwesomeIcon> </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;