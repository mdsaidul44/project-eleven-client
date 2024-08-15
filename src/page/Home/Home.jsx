import { useEffect } from "react";
import Banner from "../Banner";
import SectionOne from "../ExtraSection/SectionOne";
import TopFood from "../topFood/TopFood";

 
const Home = () => {

    useEffect(()=>{
        document.title  = "Home | Home"
    },[])
    
    return (
        <div>
           <div>
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