import { useState, useEffect } from "react";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const loadingToast = toast.loading("Sending your message...");

//     try {
//       await emailjs.send(
//         "service_hiq1bkw",
//         "template_dfql6vg",
//         {
//           from_name: formData.name,
//           from_email: formData.email,
//           message: formData.message,
//         },
//         "99Y-eJBahMOwm1PqX"
//       );

//       toast.update(loadingToast, {
//         render: "Thank you for your message! I will get back to you soon.",
//         type: "success",
//         isLoading: false,
//         autoClose: 3000,
//       });

//       setFormData({ name: "", email: "", message: "" });
//     } catch (error) {
//       // toast.error("Oops! Something went wrong. Please try again later.");
//       toast.update(loadingToast, {
//         render: "Oops! Something went wrong. Please try again later.",
//         type: "error",
//         isLoading: false,
//         autoClose: 3000,
//       });
//     }
//   };

// useEffect(() => {
//   (window as any).onSubmit = function () {
//     const form = document.querySelector("form");
//     if (form) {
//       // Find React's synthetic handler and call submit manually
//       form.requestSubmit?.(); // modern browsers
//     }
//   };
// }, []);


useEffect(() => {
  // Safely attach callback to window for reCAPTCHA
  (window as any).handleReCAPTCHASubmit = async () => {
    const form = document.querySelector("form");
    if (form) {
      form.requestSubmit?.(); // triggers React’s handleSubmit
    }
  };
}, []);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const loadingToast = toast.loading("Sending your message...");

  try {
    await emailjs.send(
      "service_hiq1bkw",
      "template_dfql6vg",
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      "99Y-eJBahMOwm1PqX"
    );

    toast.update(loadingToast, {
      render: "Thank you for your message! I will get back to you soon.",
      type: "success",
      isLoading: false,
      autoClose: 3000,
    });

    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    console.error("EmailJS Error:", error);
    toast.update(loadingToast, {
      render: "Oops! Something went wrong. Please try again later.",
      type: "error",
      isLoading: false,
      autoClose: 3000,
    });
  }
};



  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "haseeb.amz1@gmail.com",
      href: "mailto:haseeb.amz1@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/haseebexe",
      href: "https://github.com/haseebexe",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/muhammad-haseeb-364062283",
      href: "https://www.linkedin.com/in/muhammad-haseeb-364062283/",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lahore (Remote / Available Worldwide)",
      href: "#!",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-[#f8fafc] mb-4">Get In Touch</h1>
          <p className="text-[#f8fafc]/70 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Feel free to reach out through the form below or via any of my
            social channels.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <h2 className="text-[#f8fafc] mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-[#f8fafc] mb-2 block">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-white/5 border-white/10 text-[#f8fafc] placeholder:text-[#f8fafc]/40 focus:border-[#38bdf8]"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-[#f8fafc] mb-2 block">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-white/5 border-white/10 text-[#f8fafc] placeholder:text-[#f8fafc]/40 focus:border-[#38bdf8]"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="message"
                    className="text-[#f8fafc] mb-2 block"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={6}
                    className="bg-white/5 border-white/10 text-[#f8fafc] placeholder:text-[#f8fafc]/40 focus:border-[#38bdf8] resize-none"
                  />
                </div>
          <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] text-white hover:opacity-90 transition-opacity cursor-pointer "
>
  <Send size={18} className="mr-2" />
  Send Message
</Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-[#f8fafc] mb-6">Contact Information</h2>
                <p className="text-[#f8fafc]/70 mb-8">
                  Feel free to reach out through any of these channels. I
                  typically respond within 24 hours on business days.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target={
                      method.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      method.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-lg p-5 hover:border-[#38bdf8]/50 transition-all hover:shadow-lg hover:shadow-[#38bdf8]/20 group"
                  >
                    <div className="p-3 bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] rounded-full flex-shrink-0 group-hover:scale-110 transition-transform">
                      <method.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[#f8fafc] mb-1">{method.label}</div>
                      <div className="text-[#f8fafc]/60 text-sm">
                        {method.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick Links */}
              {/* <div className="bg-white/5 border border-white/10 rounded-lg p-6 mt-8">
                <h3 className="text-[#f8fafc] mb-4">Quick Links</h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="github.com/haseebexe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#38bdf8]/10 border border-[#38bdf8]/30 rounded-lg text-[#38bdf8] hover:bg-[#38bdf8]/20 transition-colors text-sm"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/muhammad-haseeb-364062283/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#38bdf8]/10 border border-[#38bdf8]/30 rounded-lg text-[#38bdf8] hover:bg-[#38bdf8]/20 transition-colors text-sm"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Location Illustration */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-[#38bdf8]/10 to-[#3b82f6]/10 border border-[#38bdf8]/20 rounded-lg p-12 text-center">
            <MapPin size={48} className="mx-auto mb-4 text-[#38bdf8]" />
            <h3 className="text-[#f8fafc] mb-2">Available for Remote Work</h3>
            <p className="text-[#f8fafc]/70">
              Open to freelance projects, contract work, and full-time
              opportunities worldwide.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
