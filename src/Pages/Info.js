function Info(){

    return(
        <div className="container-fluid info">
            <br/><br/><br/>
            <div className="row mb-5 text-center">
                <h1 className="fw-bolder welcome orange ">Welcome DR. Lamiaa to my personal profile</h1>
            </div> 
            <div className="row border border-primary border-3 mx-5 ">
                <div className="row">
                    <div className=" col-7">
                        <h2 className="text-start fw-bold text-warning">About Me</h2>
                    <hr className="text-warning"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-sm-12 text-start"> 
                        <span className="fs-3 fw-bold text-white">Gender: </span>&nbsp;&nbsp;<span className="fs-4 pink">Male</span><br/>
                        <span className="fs-3 fw-bold text-white">Location: </span>&nbsp;&nbsp;<span className="fs-4 pink">New Damietta</span><br/>
                        <span className="fs-3 fw-bold text-white">Age: </span>&nbsp;&nbsp;<span className="fs-4 pink">23 (can be reversed)</span><br/>
                        <span className="fs-3 fw-bold text-white">Marital status: </span>&nbsp;&nbsp;<span className="fs-4 pink">single (never married never will)</span><br/>
                        <span className="fs-3 fw-bold text-white">Body type: </span>&nbsp;&nbsp;<span className="fs-4 pink">athletic (what i hope)</span><br/>
                        <span className="fs-3 fw-bold text-white">Height: </span>&nbsp;&nbsp;<span className="fs-4 pink">175 cm</span><br/>
                        <span className="fs-3 fw-bold text-white">Eyes: </span>&nbsp;&nbsp;<span className="fs-4 pink">green (sometimes become brown)</span><br/>
                        <span className="fs-3 fw-bold text-white">Hair: </span>&nbsp;&nbsp;<span className="fs-4 pink">Dark brown</span><br/>
                        <span className="fs-3 fw-bold text-white">Personality: </span>&nbsp;&nbsp;<span className="fs-4 pink">Creative, Visionary, Humorous</span><br/>
                        <span className="fs-3 fw-bold text-white">Living situation: </span>&nbsp;&nbsp;<span className="fs-4 pink">alone (lonely and lost)</span><br/>
                        <span className="fs-3 fw-bold text-white">Education: </span>&nbsp;&nbsp;<span className="fs-4 pink">College graduate</span><br/>
                        <span className="fs-3 fw-bold text-white">Occupation: </span>&nbsp;&nbsp;<span className="fs-4 pink">Founder/instructor at Kernel Academy</span><br/>
                        <span className="fs-3 fw-bold text-white">Languages: </span>&nbsp;&nbsp;<span className="fs-4 pink">English (native), Arabic</span><br/>
                        <span className="fs-3 fw-bold text-white">Interests: </span>&nbsp;&nbsp;<span className="fs-4 pink">coding, Teaching programming, chess, reading philosophical texts, video editing and making jokes </span><br/>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 text-center">
                        <img className="float-image shadow-lg rounded my-4 bg-danger-subtle " src="/ahmed.jpg" alt="myphoto"  style={{ height: "20rem" , width: "20rem"}}/>
                    </div>
                </div>
                <div className="row">
                    <div className=" col-12">
                        <hr className="text-warning"/>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className=" col-12 text-start">
                        <span className="fs-3 fw-bold text-white">In my own words: </span><br/>
                        <span className="fs-4 pink">I enjoy inspiring others through education and creativity, blending humor with learning. I aim to make every experience meaningful and fun.</span>
                    </div>
                </div>
            </div>
            <br/><br/><br/>
        </div>
    )

}

export default Info;