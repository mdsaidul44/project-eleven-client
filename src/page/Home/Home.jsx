import Banner from "../Banner";
import SectionOne from "../ExtraSection/SectionOne";
import TopFood from "../topFood/TopFood";

 
const Home = () => {
    return (
        <div>
           <div className="">
           <Banner/>
           </div>
           <div>
            <SectionOne/>
           </div>
           <div>
            <TopFood/>
           </div>
        </div>
    );
};

export default Home;