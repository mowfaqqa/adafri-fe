/* eslint-disable @typescript-eslint/no-explicit-any */
// components/CampaignForm.jsx
import React from "react";
import { useFormik } from "formik";
import { campaignValidationSchema } from "../../utils/schema";

const CampaignForm = ({ initialValues, onSubmit, isEdit = false }: any) => {
  const formik = useFormik({
    initialValues: initialValues || {
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      budget: "",
    },
    validationSchema: campaignValidationSchema,
    onSubmit: (values: any) => {
      onSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          id="title"
          type="text"
          {...formik.getFieldProps("title")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {formik.touched.title && formik.errors.title && (
          <div className="text-red-500 text-sm">{!!formik.errors.title}</div>
        )}
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          {...formik.getFieldProps("description")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {formik.touched.description && formik.errors.description && (
          <div className="text-red-500 text-sm">
            {!!formik.errors.description}
          </div>
        )}
      </div>

      <div>
        <label
          htmlFor="startDate"
          className="block text-sm font-medium text-gray-700"
        >
          Start Date
        </label>
        <input
          id="startDate"
          type="date"
          {...formik.getFieldProps("startDate")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {formik.touched.startDate && formik.errors.startDate && (
          <div className="text-red-500 text-sm">
            {!!formik.errors.startDate}
          </div>
        )}
      </div>

      <div>
        <label
          htmlFor="endDate"
          className="block text-sm font-medium text-gray-700"
        >
          End Date
        </label>
        <input
          id="endDate"
          type="date"
          {...formik.getFieldProps("endDate")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {formik.touched.endDate && formik.errors.endDate && (
          <div className="text-red-500 text-sm">{!!formik.errors.endDate}</div>
        )}
      </div>

      <div>
        <label
          htmlFor="budget"
          className="block text-sm font-medium text-gray-700"
        >
          Budget
        </label>
        <input
          id="budget"
          type="number"
          {...formik.getFieldProps("budget")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {formik.touched.budget && formik.errors.budget && (
          <div className="text-red-500 text-sm">{!!formik.errors.budget}</div>
        )}
      </div>

      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
      >
        {isEdit ? "Update Campaign" : "Create Campaign"}
      </button>
    </form>
  );
};

export default CampaignForm;
