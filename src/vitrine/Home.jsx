import Cards from "../Components/Cards";
import './Home.css'

export default function Home() {
     return(
         <div>
             <div className="media">
             <div className="home-title"> <h3>Dynasty of wo/men</h3>
             </div>
             {/*<video className="video" controls width="100%">
                 <source src="chemin/vers/la/video.mp4" type="video/mp4" />
             </video>*/}
             </div>
             <Cards/>
         </div>
     )
}
