import Banner from "./Banner";
import SectionOne from "./ExtraSection/SectionOne";

 
const Home = () => {
    return (
        <div>
           <div className="">
           <Banner/>
           </div>
           <div>
            <SectionOne/>
           </div>
        </div>
    );
};

export default Home;