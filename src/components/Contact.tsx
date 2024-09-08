import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    let timer: number;
    if (status === 'success' || status === 'error') {
      timer = setTimeout(() => {
        setStatus('idle');
      }, 15000);
    }
    return () => clearTimeout(timer);
  }, [status]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear status when user starts typing
    if (status !== 'idle') {
      setStatus('idle');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('idle');
    try {
      const response = await fetch('https://formspree.io/f/xqazjnva', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        setFormData({ email: '', subject: '', message: '' });
        setStatus('success');
      } else {
        setStatus('error');
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
    >
      <h2 className="text-5xl font-bold text-blue-800 mb-16">Contact Me</h2>
      <div className="grid md:grid-cols-2 gap-16">
        <div className="bg-white p-10 rounded-lg shadow-xl">
          <h3 className="text-3xl font-semibold text-gray-800 mb-8">Get in Touch</h3>
          <ul className="space-y-8">
            <li className="flex items-center space-x-6">
              <FaEnvelope className="text-blue-600 text-3xl" />
              <a
                href="mailto:utsabpant@utsabpant.com"
                className="text-blue-600 hover:underline text-xl"
              >
                utsabpant@utsabpant.com
              </a>
            </li>
            <li className="flex items-center space-x-6">
              <FaGithub className="text-gray-800 text-3xl" />
              <a
                href="https://github.com/utsabpanta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-xl"
              >
                https://github.com/utsabpanta
              </a>
            </li>
            <li className="flex items-center space-x-6">
              <FaLinkedin className="text-blue-700 text-3xl" />
              <a
                href="https://www.linkedin.com/in/utsab-p-00415b71"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-xl"
              >
                linkedin
              </a>
            </li>
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="bg-white p-10 rounded-lg shadow-xl space-y-8">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
        {status === 'success' && (
          <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md">
            Thank you for your message. I will be in touch shortly!
          </div>
        )}
        {status === 'error' && (
          <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
            Oops! There was a problem sending your message. Please try again later.
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
