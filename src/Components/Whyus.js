function Whyus() {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <h1 className="darkblue fw-bold rounded sectionehead my-5 p-3">
                        WHY CHOOSE US?
                    </h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-4 col-sm-12 rounded-4 whyus p-2 mx-2 mb-4">
                    <img src="/instructor.png" style={{ height: "12rem" }} alt="Icon" />
                    <h1 className="text-info">________</h1>
                    <h3 className="yellow">Expert Instructors</h3>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12 rounded-4 whyus p-2 mx-2 mb-4">
                    <img src="/education.png" style={{ height: "12rem" }} alt="Icon" />
                    <h1 className="text-info">________</h1>
                    <h3 className="yellow">Quality Education</h3>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12 rounded-4 whyus p-2 mx-2 mb-4">
                    <img src="/courses.png" style={{ height: "12rem" }} alt="Icon" />
                    <h1 className="text-info">________</h1>
                    <h3 className="yellow">Diverse Courses</h3>
                </div>
            </div>
            <div className="row justify-content-center mb-5">
                <div className="col-lg-3 col-md-4 col-sm-12 rounded-4 whyus p-2 mx-2 mb-4">
                    <img src="/skills.png" style={{ height: "12rem" }} alt="Icon" />
                    <h1 className="text-info">________</h1>
                    <h3 className="yellow">Real-World Skills</h3>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12 rounded-4 whyus p-2 mx-2 mb-4">
                    <img src="/guidance.png" style={{ height: "12rem" }} alt="Icon" />
                    <h1 className="text-info">________</h1>
                    <h3 className="yellow">Expert Guidance</h3>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12 rounded-4 whyus p-2 mx-2 mb-4">
                    <img src="/success.png" style={{ height: "12rem" }} alt="Icon" />
                    <h1 className="text-info">________</h1>
                    <h3 className="yellow">Success Focused</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center rounded border border-primary d-flex align-items-center justify-content-center">
                    <p className="fw-bold fs-4 darkblue">
                        We utilize the latest technology and tools to make learning interactive, engaging, and effective.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Whyus;
