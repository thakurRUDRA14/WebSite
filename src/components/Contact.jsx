import { React, useRef, useState} from "react";
import "./css/Contact.css";
function Contact() {
  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbwBVXFh7DiqRvXGCIQPGW7SiobSjNtffk31b912o_Grh4vDJZCR_Foo-cq7LvNu4QG0bw/exec"
  const [loading, setLoading] = useState(false)
  const [data,setData]=useState({
    name:"",
    email:"",
    message:"",
  })

  const handleSubmit = async(event) =>{
    event.preventDefault();
    setLoading(true)

    await fetch(scriptUrl, {
    method: 'POST', 
    body: new FormData(formRef.current),

}).then(res => {
        // console.log("SUCCESSFULLY SUBMITTED")
        setLoading(false)
        setData({
          name:"",
          email:"",
          message:""
        })
    })
    .catch(err => console.log(err))
}
const handleChange=(event)=>
{
  setData({...data,[event.target.name]:event.target.value});
}
    
  return (
    <div className="main-contact">
      <div className="main-contact2">
        <center>
          {" "}
          <h1 className="contact-text">Contact Us</h1>
        </center>
      </div>
      <div className="map-form">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1748.946646078004!2d77.49732635823224!3d28.75260274709951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf47204fb9241%3A0xd11ed4123c7691fe!2sKIET%20GROUP%20OF%20INSTITUTIONS%2C%20Muradnagar%2C%20Uttar%20Pradesh%20201206!5e0!3m2!1sen!2sin!4v1678266889918!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="map-contact"
          title="kiet-map"
        ></iframe>

        <div className="form-contact">
          <form className="form-data" ref={formRef} onSubmit={handleSubmit}>
            <div className="data-">
              {" "}
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={data.name} onChange={handleChange} required />
            </div>
            <div className="data-">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={data.email} onChange={handleChange} required />
            </div>
            <div className="data-">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={data.message} onChange={handleChange} required ></textarea>
            </div>{" "}
            <input type="submit" value={loading ? "Response Submitted" : "Submit"} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
