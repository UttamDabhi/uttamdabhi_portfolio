// import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Send } from 'lucide-react';
// import { motion } from 'framer-motion';

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
//             Get In <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Touch</span>
//           </h2>
//           <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
//             I'm always open to discussing new opportunities and interesting projects
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="space-y-6">
//               {[
//                 { icon: Mail, title: "Email", value: "umdabhi2004@gmail.com" },
//                 { icon: Phone, title: "Phone", value: "+91 99780 95704" },
//                 { icon: MapPin, title: "Location", value: "Ahmedabad, Gujarat, India" }
//               ].map((item, index) => (
//                 <div key={index} className="flex items-center space-x-4">
//                   <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-full text-white">
//                     <item.icon className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-slate-900 dark:text-white">{item.title}</h4>
//                     <p className="text-slate-600 dark:text-slate-300">{item.value}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="glass-effect p-8 rounded-xl bg-white dark:bg-slate-800 shadow-lg">
//               {submitted ? (
//                 <p className="text-green-600 text-center font-semibold">
//                   ✅ Thank you! Your message has been sent.
//                 </p>
//               ) : (
//                 <form
//                   action="https://formsubmit.co/umdabhi2004@gmail.com"
//                   method="POST"
//                   onSubmit={() => setSubmitted(true)}
//                   className="space-y-6"
//                 >
//                   {/* Hidden Inputs for FormSubmit */}
//                   <input type="hidden" name="_captcha" value="false" />
                  
//                   <input type="hidden" name="_subject" value="New Contact Message from Portfolio Website" />

//                   {/* Name */}
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       required
//                       onChange={handleChange}
//                       value={formData.name}
//                       className="w-full px-4 py-3 bg-white dark:bg-slate-700 border rounded-lg focus:ring-2 focus:ring-primary"
//                     />
//                   </div>

//                   {/* Email */}
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       required
//                       onChange={handleChange}
//                       value={formData.email}
//                       className="w-full px-4 py-3 bg-white dark:bg-slate-700 border rounded-lg focus:ring-2 focus:ring-primary"
//                     />
//                   </div>

//                   {/* Message */}
//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
//                       Message
//                     </label>
//                     <textarea
//                       name="message"
//                       rows={5}
//                       required
//                       onChange={handleChange}
//                       value={formData.message}
//                       className="w-full px-4 py-3 bg-white dark:bg-slate-700 border rounded-lg focus:ring-2 focus:ring-primary"
//                     />
//                   </div>

//                   {/* Submit */}
//                   <button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-primary to-purple-600 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2"
//                   >
//                     <Send className="h-5 w-5" />
//                     Send Message
//                   </button>
//                 </form>
//               )}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }



import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSending(true);
    setError('');
    setSubmitted(false);

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/umdabhi2004@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            _subject: 'New Contact Message from Portfolio Website',
            _template: 'table',
            _captcha: false,
          }),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);

        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        throw new Error('Message could not be sent.');
      }
    } catch (err) {
      console.error('Form submission error:', err);

      setError(
        'Something went wrong. Please try again or contact me directly by email.'
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Get In{' '}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting
            projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">

              {/* Email */}
              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-purple-600 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-white" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Email
                  </h3>

                  <a
                    href="mailto:umdabhi2004@gmail.com"
                    className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                  >
                    umdabhi2004@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-purple-600 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-white" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Phone
                  </h3>

                  <a
                    href="tel:+919978095704"
                    className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                  >
                    +91 99780 95704
                  </a>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-purple-600 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-white" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Location
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300">
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-effect p-8 rounded-xl bg-white dark:bg-slate-800 shadow-lg">

              {submitted ? (
                /* Success Message */
                <div className="text-center py-10">

                  <div className="text-5xl mb-4">
                    ✅
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    Message Sent Successfully!
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    Thank you for reaching out. I'll get back to you as soon
                    as possible.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setError('');
                    }}
                    className="bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200"
                  >
                    Send Another Message
                  </button>

                </div>
              ) : (

                /* Form */
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2"
                    >
                      Mobile Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210"
                      pattern="[0-9+\-\s()]{10,}"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      placeholder="Write your message..."
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                      <p className="text-sm text-red-600 dark:text-red-400">
                        ❌ {error}
                      </p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={sending}
                    className={`w-full bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2 ${
                      sending
                        ? 'opacity-70 cursor-not-allowed'
                        : ''
                    }`}
                    whileHover={!sending ? { scale: 1.02 } : {}}
                    whileTap={!sending ? { scale: 0.98 } : {}}
                  >
                    <Send className="h-4 w-4" />

                    {sending ? 'Sending...' : 'Send Message'}
                  </motion.button>

                </form>
              )}

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}