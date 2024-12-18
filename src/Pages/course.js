function Course() {
    const phoneNumber = "+201003123576";
    const sendMessage = (message) => {
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <div className="container-fluid mb-5 " id='cources'>
            <div className="row text-center coursesbackgound">
                <div className="col-12 my-5">
                    <h1 className="yellow fw-bold">Explore Our Courses</h1>
                    <br/>
                    <p className="fs-4 text-white darkblue">
                        At our academy, we offer a wide range of courses <br/> to help you build skills in programming, languages, and more.
                        <br/>Whether you are a beginner or looking to enhance your expertise,<br/> we have the right course for you.
                    </p>
                </div>
            </div>
            <div className="row justify-content-center text-center">
                <div className="col-lg-6 col-md-8 col-sm-12">
                    <h1 className="darkblue fw-bold rounded mt-5 sectionehead">Programming COURSES</h1>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-3 col-md-4 col-sm-6 my-3 d-flex justify-content-center">
                    <div className="card position-relative" style={{ width: '17rem' }}>
                        <img src="/programming.jpeg" alt="programming course for kids" height={'235rem'} />
                        <div className="card-body mb-5" style={{ height: '16rem' }} >
                            <h5 className="card-title fw-bold rounded" style={{color:"#021a2e"}}>Scratch</h5>
                            <br/>
                            <ul className="darkblue text-start">
                                <li>Fun Programming</li>
                                <li>Code & Play</li>
                                <li>Making Games</li>
                                <li>Duration : 15 hours</li>
                            </ul>
                            <br/>
                            <button type="button" onClick={() => sendMessage("I want to enroll in the Programming for Kids course.")} className="btn py-2 fw-bold coursebtn border border-black" style={{color:"#f2a74c",backgroundColor:"#0f3a5d"}}>Enroll now</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 my-3 d-flex justify-content-center">
                    <div className="card position-relative" style={{ width: '17rem' }}>
                        <img src="/programming.jpeg" alt="programming course for kids" height={'235rem'} />
                        <div className="card-body mb-5" style={{ height: '16rem' }} >
                            <h5 className="card-title fw-bold rounded" style={{color:"#021a2e"}}>Python</h5>
                            <br/>
                            <ul className="darkblue text-start">
                                <li>Master Python</li>
                                <li>Solve Problems</li>
                                <li>Build Skills</li>
                                <li>Duration : 25 hours</li>
                            </ul>
                            <br/>
                            <button type="button" onClick={() => sendMessage("I want to enroll in the Programming for Kids course.")} className="btn py-2 fw-bold coursebtn border border-black" style={{color:"#f2a74c",backgroundColor:"#0f3a5d"}}>Enroll now</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 my-3 d-flex justify-content-center">
                    <div className="card position-relative" style={{ width: '17rem' }}>
                        <img src="/structure.jpeg" className="card-img-top border border-bottom" alt="structured programming" height={'235rem'} />
                        <div className="card-body mb-5" style={{ height: '16rem' }} >
                            <h5 className="card-title fw-bold rounded" style={{color:"#021a2e"}}>Structured prog.</h5>
                            <br/>
                            <ul className="darkblue text-start">
                                <li>Basics of Python</li>
                                <li>Problem Solving</li>
                                <li>Practical Applications</li>
                                <li>Duration : 3 months</li>
                            </ul>
                            <br/>
                            <button type="button" onClick={() => sendMessage("I want to enroll in the Structured programming course.")} className="btn py-2 fw-bold coursebtn border border-black" style={{color:"#f2a74c",backgroundColor:"#0f3a5d"}}>Enroll now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center text-center">
                <div className="col-lg-6 col-md-8 col-sm-12">
                    <h1 className="darkblue fw-bold rounded sectionehead mt-5 p-3">LANGUAGE COURSES</h1>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-3 col-md-4 col-sm-6 my-3 d-flex justify-content-center">
                    <div className="card position-relative" style={{ width: '17rem' }}>
                        <img src="/german.jpeg" className="card-img-top" alt="german" height={'235rem'} />
                        <div className="card-body mb-5" style={{ height: '16rem' }} >
                            <h5 className="card-title fw-bold rounded" style={{color:"#021a2e"}}>Deutsch</h5>
                            <br/>
                            <ul className="darkblue text-start">
                                <li>German Basics</li>
                                <li>Improve Speaking</li>
                                <li>Learn Grammar</li>
                                <li>Build Vocabulary</li>
                            </ul>
                            <br/>
                            <button type="button" onClick={() => sendMessage("I want to enroll in the Deutsch language course.")} className="btn py-2 fw-bold coursebtn border border-black" style={{color:"#f2a74c",backgroundColor:"#0f3a5d"}}>Enroll now</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 my-3 d-flex justify-content-center">
                    <div className="card position-relative" style={{ width: '17rem' }}>
                        <img src="/english.jpeg" className="card-img-top" alt="english" height={'235rem'} />
                        <div className="card-body mb-5" style={{ height: '16rem' }} >
                            <h5 className="card-title fw-bold rounded" style={{color:"#021a2e"}}>English</h5>
                            <br/>
                            <ul className="darkblue text-start">
                                <li>American Accent</li>
                                <li>Master Pronunciation</li>
                                <li>Listen Actively</li>
                                <li>Build Vocabulary</li>
                            </ul>
                            <br/>
                            <button type="button" onClick={() => sendMessage("I want to enroll in the English (American Accent) course.")} className="btn py-2 fw-bold coursebtn border border-black" style={{color:"#f2a74c",backgroundColor:"#0f3a5d"}}>Enroll now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Course;
