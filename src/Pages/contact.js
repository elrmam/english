function Contact(){
    const phoneNumber = "+201003123576";
    const sendMessage = (message) => {
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    return(
        <div className="container-fluid mb-5 " id='cources'>
            <div className="row text-center coursesbackgound mb-5">
                <div className="col-12 my-5">
                    <h1 className="yellow fw-bold">We’d Love to Hear from You</h1>
                    <br/>
                    <p className="fs-4 text-white darkblue">
                        Have questions or want to learn more about our courses? 
                        <br/>Reach out to us, we’re here to help.
                    </p>
                    <br/>
                    <button type="button" onClick={() => sendMessage("")} className="btn py-2 fw-bold mx-2 mb-3 herobtn border border-black" style={{color:"#021a2e",backgroundColor:"#ffffff"}}>Contact Us &nbsp;<img src="/whatsapp.png" alt="Facebook" height={25} width={25} /></button>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-4 col-md-6 col-sm12 text-center">
                    <h1 className='darkblue te mb-5'>Get in Touch</h1>
                    <div className='row mb-2 mb-3'>
                        <div className='col-1'>
                            <img src="/mobile.png" alt="mobile" height={'22rem'} width={'22rem'} />
                        </div>
                        <div className='col-11 text-start'>
                            <h5 className=" ms-2 lightblue">01553576121</h5>
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-1'>
                            <img src="/email.png" alt="email" height={'22rem'} width={'22rem'} />
                        </div>
                        <div className='col-11 text-start'>
                            <h5 className="ms-2 lightblue">kernelacademyegy@gmail.com</h5>
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-1'>
                            <img src="/location.png" alt="location" height={'22rem'} width={'17rem'} />
                        </div>
                        <div className='col-11 text-start'>
                            <h5 className="footpar ms-2 lightblue"> New Damietta, El-Motamayez District,<br/> Bahr Street, Villa El-Esraa</h5>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-12 text-start">
                            <a href="https://www.facebook.com/kernelacademyegy" target="_blank" rel="noreferrer noopener">
                                <img src="/facebook.png" alt="Facebook" height={40} width={40} />
                            </a>
                            <img src="/whatsapp.png" onClick={() => sendMessage("")} alt="Facebook" height={32} width={32} />
                        </div>
                    </div>
                </div>        
                <div className="col-lg-4 col-md-6 col-sm12 text-center">
                <h1 className='darkblue mb-5'>Location</h1>
                    <iframe title="Company Location Map" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3403.7386572273563!2d31.69463268485115!3d31.44886098139332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sar!2seg!4v1734278776654!5m2!1sar!2seghttps://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3403.7386572273563!2d31.69463268485115!3d31.44886098139332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDI2JzU1LjkiTiAzMcKwNDEnMzIuOCJF!5e0!3m2!1sar!2seg!4v1734278867703!5m2!1sar!2seg"
                    width="290" height="200" style={{ border: '0' }} allowFullScreen loading="lazy"></iframe>
                </div>
                <div className="col-lg-2"></div>

           </div>
        </div>    
    )
}
export default Contact;