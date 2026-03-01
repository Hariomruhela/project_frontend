import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import InfoCard from "../components/ui/InfoCard";
import InputField from "../components/ui/InputField";
import TextareaField from "../components/ui/TextareaField";
import Button from "../components/ui/Button";

const ContactSection = () => {
  const form = useRef();
  const [error, setError] = useState("");
  const [toast,setToast] =useState("");
 

  const sendEmail = (e) => {
  e.preventDefault();
  setError("");
  setToast("");

  const name = form.current.user_name?.value.trim();
  const email = form.current.user_email?.value.trim();
  
  const message = form.current.message?.value.trim();
 const validateEmail = (email) => {
    return /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email);
  };

   if (!validateEmail(email)) {
  setToast("Please enter a valid email address.");

  
  return 
}
if (!email.includes("@gmail.com")) {
  setError("Did you mean gmail.com?");
  return;
}


  if (!name || !email || !message) {
    setError("All fields are required.");
    return;
  }

 

  emailjs
    .sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        setToast("Message sent successfully 🚀");
        form.current.reset();
        setTimeout(() => setToast(""), 3000);
      },
      (error) => {
        setToast("Failed to send message 😢");
        console.log(error);
        setTimeout(() => setToast(""), 3000);
      }
    );
};


  return (
    <section
      id="contact"
      className="relative min-h-screen w-full overflow-hidden text-white"
    >
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="mb-16 text-center">
          <h2 className="bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Get In{" "}
            <span className="bg-gradient-to-r from-[#ff4fd8] via-[#d946ef] to-[#a855f7] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Let&apos;s Start a Conversation
            </h3>

            <div className="space-y-4">
              <InfoCard
                icon={<PhoneIcon className="h-6 w-6 text-white" />}
                title="Phone"
                value="+91-7889822746"
              />
              <InfoCard
                icon={<EnvelopeIcon className="h-6 w-6 text-white" />}
                title="Email"
                value="hello@techquitoes.com"
              />
              <InfoCard
                icon={<MapPinIcon className="h-6 w-6 text-white" />}
                title="Location"
                value="Near scheme no.140 , Indore, India, 110030"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="mb-6 text-xl font-semibold">Send us a Message</h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <InputField
                name="user_name"
                label="Your Name"
                placeholder="Enter your name"
              />

              <InputField
                name="user_email"
                label="Email Address"
                type="email"
                 required
                placeholder="Enter your email"
              />

              <TextareaField
                name="message"
                label="Project Details"
                placeholder="Tell us about your project..."
              />

              {error && (
                <p className="text-sm text-red-400">{error}</p>
              )}

              <Button type="submit">
                Send Message <PaperAirplaneIcon className="h-5 w-5" />
              </Button>
            </form>
            {toast && (
  <p className="mt-3 text-sm text-center text-white bg-white/10 px-4 py-2 rounded-lg">
    {toast}
  </p>
)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
