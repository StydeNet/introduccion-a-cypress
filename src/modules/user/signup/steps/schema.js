import * as yup from "yup";

export const PersonalInfo = yup.object().shape({
  firstName: yup.string().trim().required(),
  lastName: yup.string().trim().required(),
});

export const SecurityInfo = yup.object().shape({
  password: yup.string().trim().required().min(4),
  confirmPassword: yup
    .string()
    .trim()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const AddressInfo = yup.object().shape({
  city: yup.string().trim().required(),
  zipcode: yup
    .string()
    .matches(
      /^[0-9]{5}(?:-[0-9]{4})?$/,
      "It's an invalid format. Must be 5 or 9 digits"
    )
    .required(),
});
