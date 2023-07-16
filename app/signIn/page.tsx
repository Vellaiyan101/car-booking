"use client";
import CustomButton from "@/components/CustomButton";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const SignIn = () => {
  const SignInSchema = Yup.object().shape({
    password: Yup.string().required("Please enter your password"),
    email: Yup.string().email("Invalid email").required("Please enter your email address"),
  });

  return (
    <main className="overflow-hidden w-full h-screen flex items-center justify-center">
      <div className=" max-w-[1440px] md:px-16 px-6 py-4 flex justify-center">
        <div className=" w-[300px] border rounded-lg px-3 py-2">
          <h1 className="font-bold text-center text-xl">Sign In</h1>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={SignInSchema}
            onSubmit={async (values) => {
              console.log("values are", values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="flex justify-center w-full">
                <div className="mt-4 flex flex-col gap-3">
                  <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Email</label>
                    <Field name="email" className="border rounded focus:outline-none px-2 py-1" />
                    {errors.email && touched.email ? <div className="text-xs text-red-500  ">{errors.email}</div> : null}
                  </div>

                  <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Password</label>
                    <Field name="password" type="password" className="border rounded  focus:outline-none px-2 py-1" />
                    {errors.password && touched.password ? <div className="text-xs text-red-500">{errors.password}</div> : null}
                  </div>
                  <div className="mt-2 flex w-full">
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

export default SignIn;
