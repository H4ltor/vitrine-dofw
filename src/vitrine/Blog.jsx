import './Blog.css'

function Blog ()  {
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
                            Notre blog est actuellement en cours de construction et ne sera pas disponible immédiatement.
                            Cependant, nous sommes ravis de pouvoir bientôt partager avec vous des articles inspirants, des réflexions sur la mode et sur les enjeux sociétaux qui nous tiennent à cœur.
                            Restez connecté pour être informé de la sortie de notre blog et découvrez nos dernières actualités mode ainsi que nos coups de cœur. Nous avons hâte de partager notre passion pour la mode avec vous !
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog