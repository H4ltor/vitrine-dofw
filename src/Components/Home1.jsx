import "./Home1.css";
import logo from "../assets/logo.png";
import toulouse from "../assets/toulouse.png";
import groupe from "../assets/group.png";
function Home1() {
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="card border-0 col-md-auto">
                        <div className="card-body">
                            Dynasty of wo/men
                        </div>
                    </div>
                    <div className="media">
                        <video className="video" controls width="100%">
                            <source src="chemin/vers/la/video.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="card border-0 col-md-auto p-5">
                        <div className="card-body" id="intro">
                            Bienvenue chez Dynasty Of Wo/men, une marque de vêtements créée à Toulouse et fondée par Emeraude, une créatrice passionnée ! Notre marque est plus qu'un simple label de mode - nous sommes un mouvement, un engagement et un mode de vie.

                            Merci de votre visite sur notre site web. Nous avons hâte de vous voir porter nos vêtements et de faire partie de notre mouvement !
                        </div>
                    </div>
                    <div className="card col-md-12 p-5 border-0">
                        <div className="row ">
                            <div className="col-md-8">
                                <div className="card-block">
                                    <h6 className="card-title font-italic">Dynasty of wo/men</h6>
                                    <p className="card-text text-justify">
                                        Nous croyons en l'inclusivité, la multi-culturalité, la transparence et l'humanité. Ces valeurs sont profondément enracinées dans notre ADN, et se reflètent dans chaque produit que nous proposons. Nous sommes fiers de lutter contre l'appropriation culturelle en mettant en avant l’appréciation culturelle et de sensibiliser les consciences sur l'importance de prendre en compte et d'accepter les cultures des personnes qui nous entourent. Nous croyons que la mode peut être un outil puissant pour célébrer ces cultures et promouvoir l'échange interculturel.
                                        Notre première collection mettra en avant un pays d'Asie que nous aimons et respectons profondément. Nous sommes impatients de vous présenter nos créations, qui célèbrent la beauté et la richesse de cette culture unique.
                                        Chez Dynasty Of Wo/men, nous croyons que chaque T-shirt peut raconter une histoire. Nous espérons que nos produits vous inspireront et vous permettront de raconter votre propre histoire - une histoire qui célèbre l'unicité de chaque individu et la richesse de chaque culture.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img className="w-100" src={logo} style={{ width: "329px", height: '379px', padding: "12px" }} />
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-12 p-3 border-0">
                        <div className="row ">
                            <div className="col-md-4">
                                <img className="w-100" src={toulouse} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-block">
                                    <h6 className="card-title text-right font-italic">AU COEUR DE LA VILLE ROSE</h6>
                                    <p className="card-text text-justify">
                                        Dynasty Of Wo/men est née à Toulouse, une ville connue pour son dynamisme et sa richesse culturelle.
                                        Inspirée par la diversité et la créativité de cette ville rose, la marque s'est donnée pour mission de promouvoir la multi-culturalité et l'inclusivité à travers ses vêtements. En étant basée à Toulouse, Dynasty Of Wo/men est fière de contribuer à la scène locale de la mode, en travaillant avec des partenaires et des artisans pour créer des produits durables et éthiques.
                                        Nous sommes fiers d'être une entreprise basée à Toulouse et de contribuer à la vitalité et à l'épanouissement de cette ville extraordinaire.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-12 p-3 border-0">
                        <div className="row ">
                            <div className="col-md-8">
                                <div className="card-block">
                                    <h6 className="card-title font-italic">EQUIPE</h6>
                                    <p className="card-text text-justify">
                                        L'équipe de Dynasty Of Wo/men est composée de talents créatifs et techniques issus d'horizons divers, tous animés par la même passion pour la mode et l'engagement social.
                                        Ensemble, nous travaillons en étroite collaboration pour créer des vêtements de qualité, tout en incarnant les valeurs de la marque : inclusivité, multi-culturalité, transparence et humanité. Nous sommes une équipe soudée et orientée vers un seul objectif : faire de Dynasty Of Wo/men une référence dans la mode, en créant des vêtements qui ont un impact positif sur la société et en offrant une expérience de qualité à chacun de nos clients.
                                        Chez Dynasty Of Wo/men, nous sommes fiers de notre équipe diversifiée et dévouée, qui travaille avec passion et engagement pour faire avancer notre mission.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img className="w-100" src={groupe} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Home1