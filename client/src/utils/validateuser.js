export const validateUser = (formData) => {
  const newErrors = {};
  if (!formData.password) {
    newErrors.password = "Password is required";
  } else if (formData.password.length < 6) {
    newErrors.password = "Password must be at least 6 characters";
  }

  if (formData.confirmPassword !== formData.password) {
    newErrors.confirmPassword = "Passwords do not match";
  }

  if (!formData.email) {
    newErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Email is invalid";
  }

  if (formData.fullname && formData.fullname.length < 2) {
    newErrors.fullname = "Full name is too short";
  }

  if (formData.phone && !/^\d{10,15}$/.test(formData.phone)) {
    newErrors.phone = "Phone number is invalid";
  }

  return newErrors;
};
