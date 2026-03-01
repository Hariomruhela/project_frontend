import { useState } from "react";
import emailjs from "@emailjs/browser";

const useSendEmail = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (templateParams) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      return true;
    } catch (err) {
      console.error("Email send error:", err);
      setError(err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { sendEmail, loading, error, success };
};

export default useSendEmail;
