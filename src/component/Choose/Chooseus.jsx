
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 1000,   // Animation duration in milliseconds
    offset: 200,      // Offset (in pixels) from the top of the viewport to start the animation
    delay: 200,       // Delay (in milliseconds) before animations start
    easing: 'ease',   // Easing type ('linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out')
  });

const Chooseus = () => {
    return (
        <div className='container w-11/12 mx-auto mt-12 bg-gray-300 p-7'>
            <div  className='flex flex-col-reverse lg:flex-row justify-center items-center gap-8'>
                <div data-aos="fade-up">
                    <h3 className='text-4xl font-bold mb-5'>WHY CHOOSE US?</h3>
                    <p className='text-base'>We believe that every event should be as unique as the people behind it. Our personalized approach ensures that your event reflects your personality and style.Our team is dedicated to the smallest details, from choosing the perfect color scheme to selecting the finest vendors. We leave nothing to chance.We have a vast network of trusted vendors and partners, ensuring you have access to the best in the industry, from florists and caterers to photographers and entertainers.We work within your budget to create a spectacular event without compromising on quality.Let us handle the logistics and coordination while you focus on enjoying your special day. We aim to make the planning process stress-free and enjoyable.</p>
                </div>
                <div data-aos="fade-down">
                    <img src="https://i.ibb.co/B4DZCzm/al-elmes-ULHx-Wq8reao-unsplash.jpg" className='' alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Chooseus;