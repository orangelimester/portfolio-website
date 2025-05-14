import './index.css'
import { useForm, ValidationError } from '@formspree/react';

export const ContactPage = () => {
    const [state, handleSubmit] = useForm("mldbozwl");
    if (state.succeeded) {
        return <p>Thank you, I will be in touch!</p>;
    }
    return (
        <div className="contactFlex text-center">
            <div className='contactForm'>
                <h1>Like what you see?</h1>
                <h4>Send me your details if interested, and I will get
                </h4><h4>back to you as soon as I can.</h4>
                <form onSubmit={handleSubmit} className="formFlex">
                    <input placeholder="Name" type="text" name="from_name" />
                    <input placeholder="E-Mail" type="email" name="user_email" />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <textarea placeholder="Message" name="message" />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <div className=' flex items-end justify-end'>
                        <input type='submit' className='submitBtn' value='Submit' disabled={state.submitting}/>
                    </div>
                </form>
            </div>
        </div >
    )
}
