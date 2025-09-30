import { Mail, Phone, MessageCircle } from "lucide-react";

const contacts = [
  {
    icon: <Mail className="w-10 h-10 text-orange-500" />,
    title: "Email Us",
    desc: "Get in touch via email",
    action: "hello@techvault.dev",
    button: "Send Email",
    link: "mailto:hello@techvault.dev",
  },
  {
    icon: <Phone className="w-10 h-10 text-blue-500" />,
    title: "Call Us",
    desc: "Speak with our team",
    action: "+1 (555) 123-4567",
    button: "Call Now",
    link: "tel:+15551234567",
  },
  {
    icon: <MessageCircle className="w-10 h-10 text-green-500" />,
    title: "Live Chat",
    desc: "Chat with us instantly",
    action: "Available 24/7",
    button: "Start Chat",
    link: "#", // replace with chat widget
  },
];

export default function ContactSection() {
  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-6">
          Ready to{" "}
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Get Started?
          </span>
        </h2>
        <p className="text-center max-w-2xl text-xl mx-auto text-[#958e8e] mb-12">
          Let’s discuss your project and bring your digital vision to life. 
          Our team is ready to transform your ideas into reality.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {contacts.map((c, i) => (
            <div
              key={i}
              className="relative p-8 bg-white rounded-2xl shadow border border-gray-200 transition-all duration-500 z-0 
                         hover:-translate-y-3 hover:shadow-[0_10px_35px_rgba(236,72,153,0.3)] hover:z-20 hover:border-pink-300 text-center"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">{c.icon}</div>

              {/* Title & Content */}
              <h3 className="text-xl font-semibold">{c.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{c.desc}</p>
              <p className="text-gray-900 font-medium mt-2">{c.action}</p>

              {/* Button */}
              <a
                href={c.link}
                className="mt-6 inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-2 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                {c.button}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
