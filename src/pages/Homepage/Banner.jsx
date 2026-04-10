import heroImage from '../../assets/images/hero.png'

const Banner = () => {
    return (
        <div className='min-h-[70vh] bg-gray-50'>
            <div className='container mx-auto px-2 pt-10 text-center'>
                <h2 className='text-5xl font-bold leading-14'>We Build <br /><span className='bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent'>Productive</span> Apps</h2>
                <p className='mt-3 text-gray-400 text-sm max-w-[80%] lg:max-w-[50%] mx-auto'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex items-center justify-center gap-3 mt-5'>
                    <button className='btn'>Google Play</button>
                    <button className='btn'>App Store</button>
                </div>
                <img className='mt-8 mx-auto' src={heroImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;