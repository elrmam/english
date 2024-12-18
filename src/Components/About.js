import { Link } from 'react-router-dom';

function About(){

    return(
            <div className="container mb-5 mt-5 about">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <h1 className="darkblue fw-bold rounded sectionehead mt-5 mb-5 p-3 text-center">ABOUT US</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 text-start">
                        <div className="row ms-2">
                            <p className="fw-bold fs-4 darkblue"> Kernel Academy is a leading educational institution located in New Damietta.
                                <br/>We specialize in offering diverse courses in programming and languages, taught by expert instructors in a professional and supportive environment.
                                <br/>Our focus is on fostering innovation, developing practical skills, and ensuring that every student reaches their goals through interactive and engaging learning experiences.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src="/academy.jpg" className="card-img-top " alt="discribsion"  style={{ height: "25rem" }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-1 col-sm-4"></div>
                    <div className="col-lg-3 col-sm-4">
                    <Link className="footlink" style={{color:"#f2a74c"}} to="/Aboutus" onClick={() => window.scrollTo(0, 0)}>
                        <button type="button" className="btn bg-black text-white mb-5 mt-4 py-2">LEARN MORE</button>
                    </Link>
                    </div>
                    <div className="col-lg-8 col-sm-4"></div>
                </div>
            </div>
    )

}
export default About;