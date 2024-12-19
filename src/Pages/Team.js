function Team(){
    
    return(
        <div className="container-fluid mb-5 " id='cources'>
            <div className="row text-center coursesbackgound mb-5">
                <div className="col-12 my-5">
                    <h1 className="yellow fw-bold">Dedicated Team Behind Your Success</h1>
                    <br/>
                    <p className="fs-4 text-white darkblue">
                        At Kernel Academy, our instructors combine professional expertise
                        <br/>with an unwavering dedication to student success. 
                        <br/>Together, we cultivate an engaging and supportive learning environment
                        <br/>where every student has the opportunity to excel and achieve their goals.
                    </p>
                </div>
            </div>
            <div className="row justify-content-center text-center">
                <div className="col-lg-6 col-md-8 col-sm-12">
                    <h1 className="darkblue fw-bold rounded mt-5 mb-5 sectionehead">Our Team</h1>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-12 my-3 d-flex justify-content-center">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <img src="/ahmed.png" className="circular-image mb-2" alt="discribsion" />
                        </div>
                        <div className="col-12">
                            <h2 className="darkblue">Eng / Ahmed Reda</h2>
                        </div>
                        <div className="col-12 ">
                            <h5 className="lightblue">ITI Graduate (Web Development) </h5>
                        </div>
                        <div className="col-12">
                            <h5 className="lightblue">Academy Founder</h5>
                        </div>
                        <div className="col-12">
                            <h5 className="lightblue">Programming Instructor</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 my-3 d-flex justify-content-center">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <img src="/moataz.png" className="circular-image mb-2" alt="discribsion" />
                        </div>
                        <div className="col-12">
                            <h2 className="darkblue">Eng / Moataz Eladawey</h2>
                        </div>
                        <div className="col-12 ">
                            <h5 className="lightblue">Faculty of Computers and AI</h5>
                        </div>
                        <div className="col-12">
                            <h5 className="lightblue">Programming Instructor</h5>
                        </div>
                    </div>
                </div>    
                <div className="col-lg-4 col-md-6 col-sm-12 my-3 d-flex justify-content-center">
                <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <img src="/frue.png" className="circular-image mb-2" alt="discribsion" />
                        </div>
                        <div className="col-12">
                            <h2 className="darkblue">Frue / Eman Lotfy</h2>
                        </div>
                        <div className="col-12 ">
                            <h5 className="lightblue">Faculty of Arts</h5>
                        </div>
                        <div className="col-12">
                            <h5 className="lightblue">German Instructor</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
 
    )
}

export default Team;