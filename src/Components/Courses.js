function Courses() {

        const phoneNumber = "+201003123576";
        const sendMessage = (message) => {
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, "_blank");
        };

    return (
        <div className="container my-5" id='cources'>
            <div className="row text-center">
                <div className="col-4 col-md-4 col-sm-3"></div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <h1 className="darkblue fw-bold rounded sectionehead p-3">OUR COURSES</h1>
                </div>
                <div className="col-4 col-md-4 col-sm-3"></div>
            </div>
            <div className="row">
                <div className="col-lg-2 col-md-5 col-sm-12 my-5">
                    <div className="card position-relative" style={{ width: '17rem' }}>
                        <img src="/programming.jpeg" alt="programming course for kids" height={'235rem'} />
                        <div className="position-absolute top-50 start-50 translate-middle" >
                            <img
                                src="/logo2.jpeg"
                                className=" border border-black"
                                style={{ maxWidth: '60%', borderRadius: '60%' }}
                                alt="logo"
                            />
                        </div>
                        <div className="card-body" style={{ height: '16rem' }} >
                            <h5 className="card-title fw-bold" style={{color:"#021a2e"}}><br /><br />Programming for Kids</h5>
                                <ul className="darkblue text-start">
                                    <li>Scratch : optional</li>
                                    <li>Duration : 1 month</li>
                                    <li>Python : intemediate level </li>
                                    <li>Duration : 3 months</li>
                                </ul>
                            <button type="button" onClick={() => sendMessage("I want to enroll in the Programming for Kids course.")} className="btn py-2 fw-bold coursebtn border border-black" style={{color:"#f2a74c",backgroundColor:"#0f3a5d"}}>Enroll now</button>
                        </div>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-lg-2 col-md-5 col-sm-12 my-5 ">
                    <div className="card position-relative" style={{ width: '17rem' }}>
                        <img src="/structure.jpeg" className="card-img-top border border-bottom" alt="structured programming" height={'235rem'} />
                        <div className="position-absolute top-50 start-50 translate-middle" >
                            <img
                                src="/logo2.jpeg"
                                className=" border border-black"
                                style={{ maxWidth: '60%', borderRadius: '60%' }}
                                alt="logo"
                            />
                        </div>
                        <div className="card-body" style={{ height: '16rem' }} >
                            <h5 className="card-title fw-bold" style={{color:"#021a2e"}}><br /><br />Structured Programming</h5>
                                <ul className="darkblue text-start">
                                    <li>Basics of Python</li>
                                    <li>Logical Problem Solving</li>
                                    <li>Real-Life Applications</li>
                                    <li>Duration : 3 months</li>
                                </ul>
                            <button type="button" onClick={() => sendMessage("I want to enroll in the Structured programming course.")} className="btn py-2 fw-bold coursebtn border border-black" style={{color:"#f2a74c",backgroundColor:"#0f3a5d"}}>Enroll now</button>
                        </div>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-lg-2 col-md-5 col-sm-12 my-5">
                    <div className="card position-relative" style={{ width: '17rem' }}>
                        <img src="/german.jpeg" className="card-img-top" alt="german" height={'235rem'} />
                        <div className="position-absolute top-50 start-50 translate-middle" >
                            <img
                                src="/logo2.jpeg"
                                className=" border border-black"
                                style={{ maxWidth: '60%', borderRadius: '60%' }}
                                alt="logo"
                            />
                        </div>
                        <div className="card-body" style={{ height: '16rem' }} >
                            <h5 className="card-title fw-bold" style={{color:"#021a2e"}}><br /><br />Deutsch language</h5>
                                <ul className="darkblue text-start">
                                    <li>Master German Basics</li>
                                    <li>Improve Speaking Skills</li>
                                    <li>Learn Grammar Rules</li>
                                    <li>Build Vocabulary Fast</li>
                                </ul>
                            <button type="button" onClick={() => sendMessage("I want to enroll in the Deutsch language course.")} className="btn py-2 fw-bold coursebtn  border border-black" style={{color:"#f2a74c",backgroundColor:"#0f3a5d"}}>Enroll now</button>
                        </div>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-lg-2 col-md-5 col-sm-12 my-5">
                    <div className="card position-relative" style={{ width: '17rem' }}>
                        <img src="/english.jpeg" className="card-img-top" alt="english" height={'235rem'} />
                        <div className="position-absolute top-50 start-50 translate-middle" >
                            <img
                                src="/logo2.jpeg"
                                className=" border border-black"
                                style={{ maxWidth: '60%', borderRadius: '60%' }}
                                alt="logo"
                            />
                        </div>
                        <div className="card-body" style={{ height: '16rem' }} >
                            <h5 className="card-title fw-bold" style={{color:"#021a2e"}}><br /><br />English:American Accent</h5>
                                <ul className="darkblue text-start">
                                    <li>Master Pronunciation</li>
                                    <li>Listen Actively</li>
                                    <li>Speak Like Native</li>
                                    <li>Build Vocabulary Fast</li>
                                </ul>
                            <button type="button" onClick={() => sendMessage("I want to enroll in the English (American Accent) course.")} className="btn py-2 fw-bold coursebtn border border-black" style={{color:"#f2a74c",backgroundColor:"#0f3a5d"}}>Enroll now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <button type="button" className="btn bg-black text-white py-2">LEARN MORE</button>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )

}
export default Courses;