import { AiOutlineSend } from "react-icons/ai"
// import { BiSend } from "react-icons/bi"
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { BiEnvelope, BiMapPin, BiPhone } from "react-icons/bi";




export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const TEMPLATE_ID = 'template_y7tno0r';
    const PUBLIC_KEY = 'gjZ3-9dg_r3S7AkqG';
    const SERVICE_ID = 'service_rjdsp7y';

    const handleSubmit = (e) => {
        e.preventDefault();

        const messageParam = {
            from_name: formData.name,
            email: formData.email,
            to_name: 'Kanhaiya Banjara',
            message: formData.message
        }

        emailjs.send(SERVICE_ID, TEMPLATE_ID, messageParam, PUBLIC_KEY)
            .then((result) => {
                alert("Message Sent");
                setFormData({ name: "", email: "", message: "" })
            }).catch((error) => {
                alert('Oops! Something went wrong. Please try again', error);
            })
    }


    return (
        <section id="contact" className=" w-full min-h-screen">
            <h2 className="text-center text-4xl text-white font-bold mb-8">Connect With <span className="text-blue-500">Me</span></h2>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                <div className="bg-white/5 rounded-lg p-4 max-w-xl mx-auto border-b-2 border-b-white">
                    <h3 className="md:text-2xl text-xl font-semibold heading">Contact Information</h3>
                    <p className="text-[12px] md:text-[15px] my-5">
                        If this website created a wonderful experience for you and left a lasting impression I would love to hear from you !
                    </p>
                    <div>
                        <div className="flex items-start space-x-4 mb-5">
                            <span className="bg-blue-500/10 p-2 text-blue-500 text-[24px] rounded-full">
                                <BiEnvelope />
                            </span>
                            <div>
                                <h6 className="text-sm font-medium">Email</h6>
                                <a className="md:text-sm text-[12px] font-light" href="mailto:kanhaiyabanjara5290@gmail.com">kanhaiyabanjara5290@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 mb-5">
                            <span className="bg-blue-500/10 p-2 text-blue-500 text-[24px] rounded-full">
                                <BiPhone />
                            </span>
                            <div>
                                <h6 className="text-sm font-medium">Phone</h6>
                                <a className="md:text-sm text-[12px] font-light" href="+919604243347">+91 9604243347</a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 mb-5">
                            <span className="bg-blue-500/10 p-2 text-blue-500 text-[24px] rounded-full">
                                <BiMapPin />
                            </span>
                            <div>
                                <h6 className="text-sm font-medium">Location</h6>
                                <a className="md:text-sm text-[12px] font-light">Shirpur, Maharashtra</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <form action="#" className="max-w-xl m-auto w-full flex flex-col gap-5" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Name"
                            className="border-1 border-white/10 px-2 py-3 bg-white/5 rounded-sm focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" value={formData.name}
                            onChange={(e) => {
                                setFormData({ ...formData, name: e.target.value })
                            }}
                        />
                        <input
                            type="text"
                            placeholder="kanhaiya@mail.com"
                            className="border-1 border-white/10 px-2 py-3 bg-white/5 rounded-sm focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" value={formData.email}
                            onChange={(e) => {
                                setFormData({ ...formData, email: e.target.value })
                            }}
                        />
                        <textarea
                            placeholder="Message..."
                            rows={5}
                            className="border-1 resize-none border-white/10 px-2 py-3 bg-white/5 rounded-sm focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" value={formData.message}
                            onChange={(e) => {
                                setFormData({ ...formData, message: e.target.value })
                            }}
                        />

                        <button className="flex items-center gap-2 font-semibold text-[16px] justify-center px-2 py-3 bg-blue-500 rounded-sm hover:gap-4 transition-all duration-300
                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.5)]" type="submit">Send Message <AiOutlineSend /> </button>
                    </form>
                </div>

            </div>
        </section>

    )
}