function Events() {
    const phoneNumber = "+201553576121";
    const sendMessage = (message) => {
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };
    return (
        <div className="container-fluid mb-5 " id='cources'>
            <div className="row text-center coursesbackgound mb-5">
                <div className="col-12 my-5">
                    <h1 className="yellow fw-bold">Discover, Learn, and Grow with Our Events</h1>
                    <br />
                    <p className="fs-4 text-white darkblue">
                        At Kernel Academy, we regularly host exciting events to enhance the learning experience.
                        <br />From coding bootcamps to language workshops, there's always something happening.
                        <br />Check out our upcoming events.
                    </p>
                    <br />
                    <button type="button" onClick={() => sendMessage("I want to check out your upcoming event")} className="btn py-2 fw-bold mx-2 mb-3 herobtn border border-black" style={{ color: "#021a2e", backgroundColor: "#ffffff" }}>Contact Us &nbsp;<img src="/whatsapp.png" alt="Facebook" height={25} width={25} /></button>
                </div>
            </div>
            <div className="row justify-content-center text-center">
                <div className="col-lg-6 col-md-8 col-sm-12">
                    <h1 className="darkblue fw-bold rounded mt-5 mb-5 sectionehead">Upcoming Events</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center mb-3">
                    <div class="card mb-3" style={{ width: '70rem' }}>
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="/structure.jpeg" className="card-img" alt="event" height={'350rem'} />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body ">
                                    <h5 class="card-title fw-bold rounded" style={{ color: "#021a2e" }}>Programming Fundamentals Bootcamp</h5>
                                    <ul className="text-start">
                                        <li><span className="fs-3 darkblue">Date : </span><span className="fs-5 lightblue">25th January 2024</span></li>
                                        <li><span className="fs-3 darkblue">Duration : </span><span className="fs-5 lightblue">10 Days</span></li>
                                        <li><span className="fs-3 darkblue">Description : </span>
                                            <span className="fs-5 lightblue">Join our immersive Programming Fundamentals Bootcamp designed for beginners
                                                Over ten days, you'll master essential coding concepts and kickstart your journey into the world of programming.
                                            </span>
                                        </li>
                                    </ul>
                                    <br />
                                    <button type="button" onClick={() => sendMessage("I want to enroll in the Programming Fundamentals Bootcamp.")} className="btn py-2 fw-bold coursebtn border border-black" style={{ color: "#f2a74c", backgroundColor: "#0f3a5d" }}>Enroll now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center mb-3">
                    <div class="card mb-3" style={{ width: '70rem' }}>
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="/programming.jpeg" className="card-img" alt="event" height={'350rem'} />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body ">
                                    <h5 class="card-title fw-bold rounded" style={{ color: "#021a2e" }}>Python Bootcamp</h5>
                                    <ul className="text-start">
                                        <li><span className="fs-3 darkblue">Date : </span><span className="fs-5 lightblue">25th January 2024</span></li>
                                        <li><span className="fs-3 darkblue">Duration : </span><span className="fs-5 lightblue">10 Days</span></li>
                                        <li><span className="fs-3 darkblue">Description : </span>
                                            <span className="fs-5 lightblue">Introduction to Python programming, 
                                                 you will improve develop problem-solving skills with fun and 
                                                beginner-friendly projects at the end of the bootcamp.
                                            </span>
                                        </li>
                                    </ul>
                                    <br />
                                    <button type="button" onClick={() => sendMessage("I want to enroll in Python Bootcamp.")} className="btn py-2 fw-bold coursebtn border border-black" style={{ color: "#f2a74c", backgroundColor: "#0f3a5d" }}>Enroll now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center mb-3">
                    <div class="card mb-3" style={{ width: '70rem' }}>
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="/programming.jpeg" className="card-img" alt="event" height={'350rem'} />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body ">
                                    <h5 class="card-title fw-bold rounded" style={{ color: "#021a2e" }}>Robots and Arduino Workshop</h5>
                                    <ul className="text-start">
                                        <li><span className="fs-3 darkblue">Date : </span><span className="fs-5 lightblue">25th January 2024</span></li>
                                        <li><span className="fs-3 darkblue">Duration : </span><span className="fs-5 lightblue">10 Days</span></li>
                                        <li><span className="fs-3 darkblue">Description : </span>
                                            <span className="fs-5 lightblue">Explore robotics and electronics with Arduino. 
                                               Learn to build and program robots in this hands-on workshop.
                                            </span>
                                        </li>
                                    </ul>
                                    <br />
                                    <button type="button" onClick={() => sendMessage("I want to enroll in Robots and Arduino Workshop.")} className="btn py-2 fw-bold coursebtn border border-black" style={{ color: "#f2a74c", backgroundColor: "#0f3a5d" }}>Enroll now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center mb-3">
                    <div class="card mb-3" style={{ width: '70rem' }}>
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="/programming.jpeg" className="card-img" alt="event" height={'350rem'} />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body ">
                                    <h5 class="card-title fw-bold rounded" style={{ color: "#021a2e" }}>Scratch Coding for Kids</h5>
                                    <ul className="text-start">
                                        <li><span className="fs-3 darkblue">Date : </span><span className="fs-5 lightblue">25th January 2024</span></li>
                                        <li><span className="fs-3 darkblue">Duration : </span><span className="fs-5 lightblue">10 Days</span></li>
                                        <li><span className="fs-3 darkblue">Description : </span>
                                            <span className="fs-5 lightblue">Dive into the world of programming with Scratch, 
                                                a fun and interactive platform designed for kids to create games and animations.
                                            </span>
                                        </li>
                                    </ul>
                                    <br />
                                    <button type="button" onClick={() => sendMessage("I want to enroll in Scratch Coding for Kids.")} className="btn py-2 fw-bold coursebtn border border-black" style={{ color: "#f2a74c", backgroundColor: "#0f3a5d" }}>Enroll now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Events;