import React from 'react';
import { Link } from 'react-router-dom';



function Footer() {
  const phoneNumber = "+201003123576";
    const sendMessage = (message) => {
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };    
  return (
    <div className='container-fluid bg-black text-start pt-5'>
      <div className='row mx-2'>
        <div className='col-lg-4 col-md-5 col-sm-12 ms-3 me-4'>
          <img src="/logo.png" alt="location" height={'60rem'} width={'60rem'} />
          <p className=' mt-2 footpar' style={{color:"#f2a74c"}}>Kernel Academy is a leading educational institution located in New Damietta.<br/>We specialize in offering diverse courses in programming, languages, and others, taught by expert instructors in a professional and supportive environment.</p>
          <a href="https://www.facebook.com/kernelacademyegy" target="_blank" rel="noreferrer noopener">
            <img src="/facebook.png" alt="Facebook" height={40} width={40} />
          </a>
          <img src="/whatsapp.png" onClick={() => sendMessage("")} alt="Facebook" height={32} width={32} />
        </div>
        <div className='col-lg-1 col-md-6 col-sm-12 me-4'>
          <h5 className='text-white mb-5'>Links</h5>
          <h6 className='mb-3'><Link className="footlink" style={{color:"#f2a74c"}} to="/about" onClick={() => window.scrollTo(0, 0)}>About us</Link></h6>
          <h6 className='mb-3'><Link className="footlink" style={{color:"#f2a74c"}} to="/courses" onClick={() => window.scrollTo(0, 0)}>Courses</Link></h6>
          <h6 className='mb-3'><Link className="footlink" style={{color:"#f2a74c"}} to="/events" onClick={() => window.scrollTo(0, 0)}>Events</Link></h6>
          <h6 className='mb-3'><Link className="footlink" style={{color:"#f2a74c"}} to="/team" onClick={() => window.scrollTo(0, 0)}>Team</Link></h6>
          <h6 className='mb-3'><Link className="footlink" style={{color:"#f2a74c"}} to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact us</Link></h6>
        </div>
        <div className='col-lg-3 col-md-5 col-sm-12 me-4'>
          <h5 className='text-white mb-5'>Get in Touch</h5>
          <div className='row'>
            <div className='col-1'>
              <img src="/location.png" alt="location" height={'22rem'} width={'17rem'} />
            </div>
            <div className='col-11'>
              <h6 className="footpar ms-2" style={{color:"#f2a74c"}}> New Damietta, El-Motamayez District, Bahr Street, Villa El-Esraa</h6>
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col-1'>
              <img src="/email.png" alt="email" height={'22rem'} width={'22rem'} />
            </div>
            <div className='col-11'>
              <h6 className="ms-2"style={{color:"#f2a74c"}}>kernelacademyegy@gmail.com</h6>
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col-1'>
              <img src="/mobile.png" alt="mobile" height={'22rem'} width={'22rem'} />
            </div>
            <div className='col-11'>
              <h6 className=" ms-2" style={{color:"#f2a74c"}}>01553576121</h6>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <h5 className='text-white mb-5'>Location</h5>
          <iframe title="Company Location Map" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3403.7386572273563!2d31.69463268485115!3d31.44886098139332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sar!2seg!4v1734278776654!5m2!1sar!2seghttps://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3403.7386572273563!2d31.69463268485115!3d31.44886098139332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDI2JzU1LjkiTiAzMcKwNDEnMzIuOCJF!5e0!3m2!1sar!2seg!4v1734278867703!5m2!1sar!2seg"
            width="290" height="200" style={{ border: '0' }} allowFullScreen loading="lazy"></iframe>
        </div>
      </div>
      <div className='row'>
        <hr className='text-white' />
      </div>
      <div className='row'>
        <p className='text-center text-secondary'>&copy;2025 Kernel Academy.All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;