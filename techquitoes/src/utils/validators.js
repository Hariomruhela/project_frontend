export const validateLowercaseEmail = (email) => {
  if (!email) return "Email is required.";

  if (/[A-Z]/.test(email)) {
    return "Email must be lowercase only.";
  }

  if (!/^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
    return "Please enter a valid email address.";
  }

  if (!email.endsWith("@gmail.com")) {
    return "Did you mean gmail.com?";
  }

  return null;
};
