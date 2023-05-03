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

    const styles2 = {
        display: 'flex',
        flexDirection: 'column',
        padding: '22px 24px',
        gap: '10px',
        width: '456px',
        height: '64px',
        borderBlock: '1px solid #474747',
        borderRadius: '5px',
        textAlign: "end",
    }

    return (
        <div>
            <div className="card border-0 col-md-auto">
                <div className="card-body">
                    CONTACT
                </div>

            </div>

            <div className="container">

                <form ref={form} onSubmit={sendEmail}
                      action="" method="POST" target="_blank">
                    <h3 style={{ textAlign: "end" }}>Formulaire de Contact</h3>
                    <div className="form-group col align-items-end">
                        <label htmlFor="email" >Email address</label>
                        <input
                            name="email"
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            required=""
                        />
                    </div>
                    <div className="form-group col align-items-end">
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
                    <button type="submit" className="btn btn-primary float-right col align-items-end">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact