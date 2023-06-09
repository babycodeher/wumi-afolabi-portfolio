import { useState } from 'react';

function ContactForm() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // send message with form data
        console.log(name, address, subject, message);

        // reset form inputs
        setName('');
        setAddress('');
        setSubject('');
        setMessage('');
    };

    return (
        <div className="container flex flex-1 justify-center md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
            {/* left item */}
            <div className="flex flex-col justify-center items-center space-y-12 sm:w-full md:w-1/2">
                <h1 className="max-w-md text-4xl font-semibold text-center md:text-5xl md:text-left">
                    Get in touch
                </h1>
                <form className="contact max-w-lg w-full bg-white p-4 rounded-lg shadow-md data-netlify=true">

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
                             Email Address
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:shadow-outline"
                            id="address"
                            type="text"
                            placeholder="Enter your email address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="subject">
                            Subject
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:shadow-outline"
                            id="subject"
                            type="text"
                            placeholder="Enter the subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="appearance-none border rounded w-full h-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:shadow-outline"
                            id="message"
                            type="text"
                            placeholder="Enter your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="p-3 px-6 text-white bg-blue-700 rounded-full baseline w-1/2 text-center hover:bg-lightWine md:block"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
            {/* right item */}
            {/* <div className="flex flex-col justify-center items-center space-y-12 md:w-1/2">Contact details
                <div class="box-content h-32 w-32 bg-gray-400">
                </div>
            </div> */}
        </div>
    );
}

export default ContactForm;