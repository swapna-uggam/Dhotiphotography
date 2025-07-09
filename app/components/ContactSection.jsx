


'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { db } from '../admin/Firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Facebook,
  Instagram,
  MessageCircle,
  Heart,
  Star,
  CheckCircle,
  Loader2
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setShowForm(false)
  // setIsSubmitting(true);
  // setError(null);

  try {
    // Store in Firebase
    await addDoc(collection(db, 'contacts'), {
      ...formData,
      timestamp: new Date(),
    });

    // Send email
    await fetch("/admin/contact/email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
          }),
        });


    // if (!response.ok) {
    //   throw new Error('Email sending failed');
    // }

    setShowSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  } catch (err) {
    console.error('Error submitting form:', err);
    setError('Failed to submit form. Please try again.');
    setShowForm(true)
  } finally {
    // setIsSubmitting(false);
    setLoading(false);
  }
};


  return (
    <section
      id="ContactSection"
      className="py-20 px-4 relative overflow-hidden bg-[#FFF8E1]"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-amber-600/20 to-orange-600/20 blur-xl"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-20 w-40 h-40 rounded-full bg-gradient-to-br from-slate-600/20 to-blue-600/20 blur-xl"
        />
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-emerald-600/25 to-teal-600/25 blur-lg"
        />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-amber-400/30 shadow-lg"
          >
            <Heart className="w-5 h-5 text-amber-600" />
            <span className="text-slate-700 font-medium">Let&apos;<s></s> Connect</span>
            <Heart className="w-5 h-5 text-amber-600" />
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 drop-shadow-lg">
            Get In Touch
          </h2>
          <p className="text-xl md:text-2xl text-grey-200 max-w-3xl mx-auto leading-relaxed">
            Ready to capture your special moments? Let&apos;s discuss your photography needs and create something beautiful together.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Form Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl border border-white/60 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-stone-50/80 via-amber-50/60 to-slate-50/80 rounded-3xl" />
              
              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-700 mb-3 flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-600 to-orange-600" />
                    Send us a Message
                  </h3>
                  <p className="text-slate-600 text-lg">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600 group-hover:text-orange-600 transition-colors duration-300" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Full Name"
                      required
                      disabled={isSubmitting} 
                      className="w-full pl-14 pr-6 py-5 border-2 border-stone-300 rounded-2xl focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-200/40 bg-white text-slate-700 placeholder-slate-400 transition-all duration-300 hover:border-stone-400"
                    />
                  </div>

                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600 group-hover:text-orange-600 transition-colors duration-300" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email Address"
                      required
                      disabled={isSubmitting} 
                      className="w-full pl-14 pr-6 py-5 border-2 border-stone-300 rounded-2xl focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-200/40 bg-white text-slate-700 placeholder-slate-400 transition-all duration-300 hover:border-stone-400"
                    />
                  </div>

                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600 group-hover:text-orange-600 transition-colors duration-300" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your Phone Number"
                      required
                      disabled={isSubmitting} 
                      className="w-full pl-14 pr-6 py-5 border-2 border-stone-300 rounded-2xl focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-200/40 bg-white text-slate-700 placeholder-slate-400 transition-all duration-300 hover:border-stone-400"
                    />
                  </div>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting} 
                    className="w-full px-6 py-5 border-2 border-stone-300 rounded-2xl focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-200/40 bg-white text-slate-700 transition-all duration-300 hover:border-stone-400"
                  >
                    <option value="">Select Photography Service</option>
                    <option value="dhoti-ceremony">Dhoti Ceremony</option>
                    <option value="naming-ceremony">Naming Ceremony</option>
                    <option value="family-portraits">Family Portraits</option>
                    <option value="outdoor-sessions">Outdoor Sessions</option>
                    <option value="custom-package">Custom Package</option>
                  </select>

                  <div className="relative group">
                    <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-amber-600 group-hover:text-orange-600 transition-colors duration-300" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your event and photography needs..."
                      rows="6"
                      required
                      disabled={isSubmitting} 
                      className="w-full pl-14 pr-6 py-5 border-2 border-stone-300 rounded-2xl focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-200/40 bg-white text-slate-700 placeholder-slate-400 resize-none transition-all duration-300 hover:border-stone-400"
                    ></textarea>
                  </div>

                  {/* Submission Feedback */}
                  {isSubmitting && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-center gap-2 text-amber-600 font-medium mb-4"
                    >
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending your message...</span>
                    </motion.div>
                  )}

                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-center gap-2 text-green-700 bg-green-100 border border-green-300 rounded-lg px-4 py-3 mb-4"
                    >
                      <CheckCircle className="w-5 h-5" />
                      Message sent successfully!
                    </motion.div>
                  )}

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-700 bg-red-100 border border-red-300 rounded-lg px-4 py-3 mb-4 text-center"
                    >
                      {error}
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold py-5 px-8 rounded-2xl shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-amber-300/30 ${
                      isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                    }`}
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </div>

            {/* Social Section */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/60 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-stone-50/60 to-blue-50/80 rounded-3xl" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-700 mb-6 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-slate-600 to-blue-600" />
                  Connect With Us
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <motion.a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center p-5 bg-white rounded-2xl hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 hover:text-white transition-all duration-300 group shadow-lg border border-stone-200"
                  >
                    <Instagram className="w-8 h-8 text-pink-600 group-hover:text-white mb-2 transition-colors duration-300" />
                    <span className="text-sm font-medium text-slate-600 group-hover:text-white">Instagram</span>
                  </motion.a>

                  <motion.a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center p-5 bg-white rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-300 group shadow-lg border border-stone-200"
                  >
                    <Facebook className="w-8 h-8 text-blue-600 group-hover:text-white mb-2 transition-colors duration-300" />
                    <span className="text-sm font-medium text-slate-600 group-hover:text-white">Facebook</span>
                  </motion.a>

                  <motion.a
                    href="https://wa.me/441234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center p-5 bg-white rounded-2xl hover:bg-green-500 hover:text-white transition-all duration-300 group shadow-lg border border-stone-200"
                  >
                    <MessageCircle className="w-8 h-8 text-green-500 group-hover:text-white mb-2 transition-colors duration-300" />
                    <span className="text-sm font-medium text-slate-600 group-hover:text-white">WhatsApp</span>
                  </motion.a>

                  <motion.a
                    href="tel:+441234567890"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center p-5 bg-white rounded-2xl hover:bg-slate-600 hover:text-white transition-all duration-300 group shadow-lg border border-stone-200"
                  >
                    <Phone className="w-8 h-8 text-slate-600 group-hover:text-white mb-2 transition-colors duration-300" />
                    <span className="text-sm font-medium text-slate-600 group-hover:text-white">Call Us</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Map Section */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/60 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-slate-50/60 to-teal-50/80 rounded-3xl" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-700 mb-6 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-teal-600 to-blue-600" />
                  Find Us
                </h3>
                
                <div className="w-full h-72 md:h-80 bg-gradient-to-br from-slate-100 to-stone-100 rounded-2xl overflow-hidden border-2 border-stone-300 shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5439058247586!2d-0.1278!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzI2LjYiTiAwwrAwNyc0MC4xIlc!5e0!3m2!1sen!2suk!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Quick Contact Info */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/60 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-stone-50/60 to-orange-50/80 rounded-3xl" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-700 mb-8 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-600 to-amber-600" />
                  Contact Details
                </h3>

                <div className="space-y-6">
                  <motion.div 
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-5 p-5 bg-white/90 rounded-2xl shadow-lg border border-stone-200 hover:border-stone-300 transition-all duration-300"
                  >
                    <div className="bg-gradient-to-br from-slate-600 to-slate-700 p-3 rounded-xl shadow-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-700 text-lg">Phone</h4>
                      <p className="text-slate-600">+44 1234 567890</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-5 p-5 bg-white/90 rounded-2xl shadow-lg border border-stone-200 hover:border-stone-300 transition-all duration-300"
                  >
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-xl shadow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-700 text-lg">Email</h4>
                      <p className="text-slate-600">info@snapuphotos.co.uk</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start gap-5 p-5 bg-white/90 rounded-2xl shadow-lg border border-stone-200 hover:border-stone-300 transition-all duration-300"
                  >
                    <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-3 rounded-xl shadow-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-700 text-lg">Address</h4>
                      <p className="text-slate-600">123 Photography Street<br />London, UK SW1A 1AA</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start gap-5 p-5 bg-white/90 rounded-2xl shadow-lg border border-stone-200 hover:border-stone-300 transition-all duration-300"
                  >
                    <div className="bg-gradient-to-br from-amber-600 to-orange-600 p-3 rounded-xl shadow-lg">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-700 text-lg">Business Hours</h4>
                      <div className="text-slate-600 space-y-1">
                        <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: By Appointment</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-white/90 backdrop-blur-md rounded-3xl p-10 md:p-12 border border-white/60 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-stone-50/80 via-amber-50/60 to-slate-50/80 rounded-3xl" />
          
          <div className="relative z-10">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Star className="w-12 h-12 text-amber-600 mx-auto" />
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-slate-700 mb-6">
              Ready to Book Your Session?
            </h3>
            
            <p className="text-slate-600 text-lg mb-8 max-w-4xl mx-auto leading-relaxed">
              Don&apos;t wait for the perfect moment - let us help you create it. Whether it&apos;s a traditional ceremony or a modern celebration, we&apos;re here to capture every precious detail with our signature style and cultural sensitivity.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: '✨', text: 'Free Consultation', color: 'from-amber-600 to-orange-600' },
                { icon: '📸', text: 'Custom Packages', color: 'from-slate-600 to-blue-600' },
                { icon: '🎯', text: 'Cultural Expertise', color: 'from-teal-600 to-emerald-600' },
                { icon: '💫', text: 'Premium Quality', color: 'from-orange-600 to-red-600' }
              ].map((item, index) => (
                <motion.span
                  key={`cta-item-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`bg-gradient-to-r ${item.color} text-white px-6 py-3 rounded-full font-medium shadow-lg border border-white/20 backdrop-blur-sm`}
                >
                  {item.icon} {item.text}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



