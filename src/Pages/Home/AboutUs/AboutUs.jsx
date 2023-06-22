import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import lego from '../../../assets/yoga6.jpg';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: true, 
    });
  }, []);

  return (
    <div className=''>
      <div>
        <div className='md:flex justify-center items-center m-3 pt-3 bg-slate-300 rounded-2xl shadow-xl'>
          <h2
            className='px-2 m-3 text-xl font-bold'
            data-aos='fade-up'
            data-aos-delay='100'
          >
            Get Exclusive Deals & More!
          </h2>
          <div
            className='px-2 m-3'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            <input
              type='text'
              placeholder='Enter Email Address'
              className='p-2 border bg-slate-100'
            />
            <button type='button' className='btn btn-primary p-2'>
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div
        className='md:flex p-4 gap-4'
        data-aos='fade-up'
        data-aos-delay='300'
      >
        <img
          src={lego}
          alt=''
          className='rounded'
          style={{ height: 'auto', width: '100%', maxWidth: '500px' }}
        />
        <div className=' bg-slate-300 shadow-lg p-3 mb-5 bg-body rounded'>
          <h3 className='text-2xl font-bold text-center mt-8'>Welcome To <span className='text-warning'>Yoga World!</span></h3>
          
          <p className='text-xl font-semibold p-1 text-center'>Be Healthy Be Happy!</p>
          <p className='text-gray-800 m-3 p-5'>
            A dynamic and fluid style of yoga that synchronizes breath with movement. It focuses on building strength, flexibility, and balance.A slow-paced style of yoga that involves holding passive poses for an extended period. It targets the connective tissues and helps improve flexibility and joint mobility.A gentle and soothing practice that uses props to support the body in relaxing poses. It focuses on deep relaxation, stress relief, and healing
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default AboutUs;
