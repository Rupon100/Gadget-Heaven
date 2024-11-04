 
import bannerImage from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='max-w-4xl mx-auto bg-gray-200 rounded p-2 -mt-40'>
            <img className='rounded h-[450px] w-full object-cover' src={bannerImage} alt="banner image" />
        </div>
    );
};

export default Banner;