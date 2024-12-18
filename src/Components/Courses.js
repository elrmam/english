import React from 'react';
import { Link } from 'react-router-dom';

function Courses() {
  
    return (
        <div className="container my-5" id='cources'>
            <div className="row justify-content-center text-center">
                <div className="col-lg-6 col-md-8 col-sm-12">
                    <h1 className="darkblue fw-bold rounded sectionehead p-3">OUR COURSES</h1>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-3 col-md-4 col-sm-6 my-3 d-flex justify-content-center">
                    <div className="card position-relative" style={{ width: '17rem' }}>
                        <img src="/programing.jpg" className="card-img-top" alt="german" height={'235rem'} />
                        <div className="card-body mb-5" style={{ height: '16rem' }} >
                            <h5 className="card-title fw-bold rounded" style={{color:"#021a2e"}}>Programming<br/>Courses</h5>
                            <br/>
                            <ul className="darkblue text-start">
                                <li>scratch</li>
                                <li>Python</li>
                                <li>Structured Prog</li>
                            </ul>
                            <br/>
                            <Link className="footlink" style={{color:"#f2a74c"}} to="/courses" onClick={() => window.scrollTo(0, 0)}>
                                <button type="button" className="btn py-2 fw-bold coursebtn border border-black" style={{color:"#f2a74c",backgroundColor:"#0f3a5d"}}>LEARN MORE</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 my-3 d-flex justify-content-center">
                    <div className="card position-relative" style={{ width: '17rem' }}>
                        <img src="/languages.jpg" className="card-img-top" alt="english" height={'235rem'} />
                        <div className="card-body mb-5" style={{ height: '16rem' }} >
                            <h5 className="card-title fw-bold rounded" style={{color:"#021a2e"}}>Language<br/>Courses</h5>
                            <br/>
                            <ul className="darkblue text-start">
                                <li>Deutsch </li>
                                <li>French</li>
                                <li>English</li>

                            </ul>
                            <br/>
                            <Link className="footlink" style={{color:"#f2a74c"}} to="/courses" onClick={() => window.scrollTo(0, 0)}>
                                <button type="button" className="btn py-2 fw-bold coursebtn border border-black" style={{color:"#f2a74c",backgroundColor:"#0f3a5d"}}>LEARN MORE</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Courses;
