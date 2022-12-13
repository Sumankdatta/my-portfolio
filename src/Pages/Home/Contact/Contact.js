import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-hot-toast';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0uf66xw', 'template_h3g8bp5', form.current, 'Un0-3pAu5a_k-A1lt')
            .then((result) => {
                console.log(result.text);

                toast.success('Successfully toasted!')


            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div className='w-9/12 mx-auto mt-20' data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <h1 className='text-white text-2xl ml-5'>Contact</h1>
            <hr className='' />
            <p className='text-center mt-10'>As you know, I'm fresher, so if you want to give me some <br /> opportunity or have any queries, feel free to reach me.</p>
            <div className='w-5/12 mx-auto mt-20' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">

                <form className=' mt-5 mb-5 ' ref={form} onSubmit={sendEmail}>
                    <label>Name</label> <br />
                    <input className='mb-5 bg-teal-900 border w-96' type="text" name="user_name" /> <br />
                    <label>Email</label> <br />
                    <input className='mb-5 bg-teal-900 border w-96' type="email" name="user_email" /> <br />
                    <label>Message</label> <br />
                    <textarea className='mb-5 bg-teal-900 border w-96' name="message" /> <br />
                    <input className='w-24 border px-5 py-2 font-bold text-xl hover:bg-gray-500' type="submit" value="Send " />
                </form>
            </div>
        </div>
    );
};

export default Contact;