import Custom from '../Components/Custom/Custom';
import Faq from '../Components/Faq/Faq';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Home/Header'
import Navbar from '../Components/Navbar/Navbar';
import Testimonial from '../Components/Testimonials/Testimonial';
const AppLandingPage = () => {
  return (
    <div className="w-full relative rounded-[50px] bg-white overflow-hidden flex flex-col items-start justify-start pt-10 pb-[41.3px] pr-[25px] pl-[175px] box-border gap-[115px] leading-[normal] tracking-[normal] text-left text-lg text-black font-clash-display mq750:gap-[57px] mq750:pl-[87px] mq750:box-border mq450:gap-[29px] mq450:pl-5 mq450:box-border">
      <Navbar/>
      <Header />
      <Custom />
      <Testimonial/>
      <Faq />
      <Footer />
    </div>
  );
};

export default AppLandingPage;
