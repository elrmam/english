function Herosectin() {
    const phoneNumber = "+201003123576";
    const sendMessage = (message) => {
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <div className="container-fluid hero-section mb-5" style={{ height: "33rem" }}>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 ps-5 mt-5">
                    <div className="text-center me-5">
                        <span className="heroname">KERNEL<br/>ACADEMY</span>
                    </div>
                    <div className="herocaption mt-1 text-center me-5">
                        <span>UNLOCK POTENIAL</span>
                    </div>
                    <div className="me-5">
                    <br/>
                    <button type="button" onClick={() => sendMessage("I want to more information about your cources course.")} className="btn py-2 fw-bold me-3 herobtn border border-black" style={{color:"#021a2e",backgroundColor:"#f2a74c"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact Us&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                    <button type="button" className="btn py-2 fw-bold herobtn border border-black" style={{color:"#021a2e",backgroundColor:"#ffffff"}}>Explore Courses</button>
                    </div>      
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img className="herologo rounded float-center float-image mb-5" src="/logoshadow.png" alt="discribsion" />
                </div>
            </div>
        </div>
    )
}

export default Herosectin;