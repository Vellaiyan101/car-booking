"use client";
import React from "react";
import * as Yup from "yup";
import { Field, Form, Formik} from "formik";
import CustomButton from "@/components/CustomButton";

const SignUp = () => {
  const signUpSchema = Yup.object().shape({
    userName: Yup.string().required("Enter your userName"),
    email: Yup.string().email("Invalid email").required("Enter your email"),
    dateOfBirth: Yup.date()
      .required("Please choose a date of birth")
      .max(new Date(Date.now() - 567648000000), "Age must be more than 18"),
    age: Yup.number()
      .required("Enter your age").min(18, "Age must be greater than 18").max(99, "Age must be less than 99"),
    mobileNumber: Yup.number().required("Enter your mobile number"),
    city: Yup.string().required("Enter your city"),
    password: Yup.string().required(""),

  });

  return (
    <main className="overflow-hidden w-full pt-28 flex items-center justify-center">
      <div className=" md:px-16 px-6 py-4 flex justify-center">
        <div className="border rounded-lg px-3 py-2 w-full">
          <h1 className="font-bold text-center text-xl">Sign Up</h1>
          <Formik
            initialValues={{
              userName: "",
              email: "",
              dateOfBirth: "",
              age: "",
              mobileNumber: "",
              city: "",
              password: "",
              role: "",
            }}
            validationSchema={signUpSchema}
            onSubmit={async (values) => {
              console.log("values are: ", values);
            }}
          >
            {({values, errors, touched, handleChange}) => (
              <Form className="flex  w-full ml-5">
                <div className="mt-4 flex flex-col gap-3 ">
                  {/* User Name */}
                  <div className="w-full">
                    <label className="block text-gray-700 text-md font-bold mb-2">UserName</label>
                    <Field name="userName" className="w-full border rounded focus:outline-none px-2 py-1"></Field>
                    {errors.userName && touched.userName ? <div className="text-xs text-red-500">{errors.userName}</div> : null}
                  </div>

                  {/* Email */}
                  <div className="w-full">
                    <label className="block text-gray-700 text-md font-bold mb-2">Email</label>
                    <Field name="email" className="w-full border rounded focus:outline-none px-2 py-1"></Field>
                    {errors.email && touched.email ? <div className="text-xs text-red-500">{errors?.email}</div> : null}
                  </div>

                  {/* Date Of Birth & age*/}
                  <div className="flex gap-4 items-center">
                    <div className="flex flex-col">
                      <label className="text-gray-700 text-md font-bold mb-2">Date of birth</label>
                      <Field name="dateOfBirth" type="date" className="border rounded focus:outline-none px-2 py-1"></Field>
                      {errors.dateOfBirth && touched.dateOfBirth ? <div className="text-xs text-red-500 mt-0">{errors?.dateOfBirth}</div> : null}
                    </div>
                    {/* Age */}
                    <div className="flex flex-col">
                      <label className=" text-gray-700 text-md font-bold mb-2">Age</label>
                      <Field name="age" type="number" className="border  rounded focus:outline-none px-2 py-1"
                      ></Field>
                      {errors.age && touched.age ? <span className="text-xs text-red-500">{errors?.age}</span> : null}
                    </div>
                  </div>

                  {/* Mobile */}
                  <div className="w-full">
                    <label className="block text-gray-700 text-md font-bold mb-2">Mobile</label>
                    <Field name="mobileNumber" className="w-full border rounded focus:outline-none px-2 py-1"></Field>
                    {errors.mobileNumber && touched.mobileNumber ? <div className="text-xs text-red-500">{errors?.mobileNumber}</div> : null}
                  </div>

                  {/* City && role*/}
                  <div className="flex gap-3 w-full">
                    <div>
                      <label className="block text-gray-700 text-md font-bold mb-2">City</label>
                      <Field name="city" className="border rounded focus:outline-none px-2 py-1"></Field>
                      {errors.city && touched.city ? <div className="text-xs text-red-500">{errors?.city}</div> : null}
                    </div>
                    <div>
                      <label className="block text-gray-700 text-md font-bold mb-2">Role</label>
                      <select className="focus:outline-none border py-1 rounded w-[150px]" name="role" value={values?.role} onChange={handleChange}
                      >
                        <option value="user" label="user">user</option>
                        <option value="admin" label="admin">admin</option>
                      </select>
                      {errors.city && touched.city ? <div className="text-xs text-red-500">{errors?.city}</div> : null}
                    </div>
                  </div>

                  <div className="mt-2 flex w-full justify-end ">
                    <CustomButton title="Submit" btnType="submit" containerStyle="mb-2 w-full text-white rounded-xl bg-blue-700 text-xs md:text-sm" />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
