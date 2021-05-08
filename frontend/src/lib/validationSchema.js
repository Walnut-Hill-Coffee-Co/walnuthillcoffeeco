import * as Yup from "yup";

export const validationSchema = Yup.object({
  fullName: Yup.string()
    .required("Name is required.")
    .min(3, "Name must be at least 3 characters.")
    .max(30, "Name is too long"),
  email: Yup.string().email().required("Please enter your email"),
  phone: Yup.string()
    .max(10)
    .min(7)
    .required("Please enter a valid U.S phone number"),
  subject: Yup.string(),
  message: Yup.string().required("Please leave a brief message").trim(),
});
