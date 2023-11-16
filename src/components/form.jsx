// Form.js
import { useState } from "react";
import InputField from "../components/inputfield";
import "../style.css";

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Username"
        name="username"
        value={formData.username}
        onChange={(value) => handleInputChange("username", value)}
        error={errors.username}
      />
      <InputField
        label="Email"
        name="email"
        value={formData.email}
        onChange={(value) => handleInputChange("email", value)}
        error={errors.email}
      />
      <InputField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={(value) => handleInputChange("password", value)}
        error={errors.password}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
