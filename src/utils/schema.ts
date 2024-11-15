import * as Yup from "yup";

// Validation Schema
export const campaignValidationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date()
    .required("End date is required")
    .min(Yup.ref("startDate"), "End date must be after start date"),
  budget: Yup.number()
    .required("Budget is required")
    .min(0, "Budget must be positive"),
});
