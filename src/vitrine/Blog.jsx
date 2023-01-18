import Cards from "../Components/Cards";
import './Blog.css'

function Blog ()  {
    return(
        <div>
            <div>
                <div className="card">
                    <div className="card-header">
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>BLOG</p>
                            <footer className="footer">is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book. It has survived not only five centuries, but also
                                the leap into electronic typesetting, remaining essentially unchanged. It was
                                popularised in the 1960s with the release of Letraset sheets containing Lorem
                                Ipsum passages, and more recently with desktop publishing software like Aldus
                                PageMaker including versions of Lorem Ipsum.</footer>
                        </blockquote>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="card col-md-12 p-3">
                        <div className="row ">
                            <div className="col-md-4">
                                <img className="w-100" src="https://via.placeholder.com/900x600"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-block">
                                    <h6 className="card-title">Card Title</h6>
                                    <p className="card-text text-justify">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Blog