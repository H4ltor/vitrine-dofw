import {useRef} from "react";
import emailjs from '@emailjs/browser';
import './Contact.css';
function Contact() {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rddgqrg', 'template_o98d5za', form.current, 'iYzzqdYstOy4mB7OT')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <p>CONTACT</p>
                </div>

            </div>

            <div className="container">

                <form ref={form} onSubmit={sendEmail}
                      action="" method="POST" target="_blank">
                    <h3 style={{ textAlign: "center" }}>Formulaire de Contact</h3>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                            name="email"
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            required=""
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            className="form-control"
                            id="message"
                            rows={5}
                            placeholder="Enter message"
                            required=""
                            defaultValue={""}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary float-right">
                        Submit
                    </button>
                </form>

            </div>
            //medias incons
        </div>
    )
}

export default Contact