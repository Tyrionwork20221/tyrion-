import React, {useRef,useEffect,useState}from "react";
import logo from "../assets/logo.png";
import tyrion from "../assets/Tyrion 6.svg";
import icon1 from "../assets/Vector.svg";
import icon2 from "../assets/Vector 2.svg";
import icon3 from "../assets/Vector 3.svg";
import icon4 from "../assets/passwordicon.svg";
import { useFormik } from "formik";
import * as Yup from "yup"



const initialValues = {
  username: "",
  email: "",
  tel: "",
  password1: "",
  password2: "",
};

const onSubmit = (values) => {
  console.log(values);
};
const validate = (values) => {
  let errors = {};
  if (!values.username) {
    errors.username = "required ";
  }
  if (!values.email) {
    errors.email = "required  ";
  }
  if (!values.tel) {
    errors.tel = "required  ";
  }
  if (!values.password1) {
    errors.password1 = "required  ";
  }
  if (!values.password2) {
    errors.password2 = "required  ";
  }
  return errors;
};
const validationSchema = Yup.object({
  username:Yup.string().required("Required"),
  email:Yup.string().required("Required"),
  tel:Yup.string().required("Required"),
  password1:Yup.string().required("Required"),
  password2:Yup.string().required("RRequired")
})

function SignUpPage() {




  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const userRef = useRef();
  const errRef = useRef();

  const [user,setUser] = useState(false)
  const [validName,setValidName] = useState(false)
  const [userFocus,setUserFocus] = useState(false)




  return (
    <div className="ml-36 font-DMSans">
      <img src={logo} alt="logo" className="w-32 mt-16" />
      <div className="flex justify-between">
        <div>
          <h4 className="text-4xl font-semibold mt-11">Create an account</h4>
          <p className="text-xl mb-16">
            Fill in the details to create a{" "}
            <span className="text-[#FBC108]">tyrion</span> account
          </p>
          <form onSubmit={formik.handleSubmit}>
          <div className="form-control mb-10">
            <label className="font-medium text-lg">Username</label>
            <div className=" relative flex ">
              <img src={icon1} alt="" className="w-3 absolute bottom-6 ml-4" />
              <input
                for="username"
                type="text"
                placeholder="Username"
                className="w-558 h-16 border border-gray rounded-lg pl-10 font-normal text-[rgba(0, 0, 0, 0.24)] text-lg "
                name="username"
                required
                onChange={formik.handleChange}
                value={formik.values.username}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.username && formik.errors.username ? (
                <div className="flex text-center text-rose-300"> {formik.errors.username} </div>
              ) : null}
            </div>
              
          <div className="form-control mb-10">
            <label className="font-medium text-lg">Email</label>
            <div className="relative flex">
              <img src={icon2} alt="" className="w-3 absolute bottom-6 ml-4" />
              <input
                for="email"
                type="email"
                placeholder="Input your email"
                className="w-558 h-16 border border-gray rounded-lg pl-10 font-normal text-[rgba(0, 0, 0, 0.24)] text-lg "
                name="email"
                required
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.email &&  formik.errors.email ? (
                <div className="flex text-center text-rose-300"> {formik.errors.email} </div>
              ) : null}
            </div>

            <div className="form-control mb-10">
            <label className="font-medium text-lg">Phone number</label>
            <div className="relative flex ">
              <img src={icon3} alt="" className="w-3 absolute bottom-6 ml-4" />
              <input
                for="tel"
                type="tel"
                placeholder="Phone number"
                className="w-558 h-16 border border-gray rounded-lg pl-10 font-normal text-[rgba(0, 0, 0, 0.24)] text-lg"
                name="tel"
                required
                onChange={formik.handleChange}
                value={formik.values.tel}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.tel && formik.errors.tel ? (
                <div className="flex text-center text-rose-300"> {formik.errors.tel} </div>
              ) : null}
            </div>
          <div className="form-control mb-10">
            <label className="font-medium text-lg">Password</label>
            <div className="relative flex ">
              <img src={icon4} alt="" className="w-3 absolute bottom-6 ml-4" />
              <input
                for="password1"
                type="password"
                placeholder="Input your password"
                className="w-558 h-16 border border-gray rounded-lg pl-10 font-normal text-[rgba(0, 0, 0, 0.24)] text-lg"
                name="password1"
                required
                onChange={formik.handleChange}
                value={formik.values.password1}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.password1 &&  formik.errors.password1 ? (
                <div className="flex text-center text-rose-300"> {formik.errors.password1} </div>
              ) : null}
            </div>
            <div className="form-control mb-10">
            <label className="font-medium text-lg">Repeat password</label>
            <div className="relative flex ">
              <img src={icon4} alt="" className="w-3 absolute bottom-6 ml-4" />
              <input
                for="password2"
                type="password"
                placeholder="Input your password"
                className="w-558 h-16 border border-gray rounded-lg pl-10 font-normal text-[rgba(0, 0, 0, 0.24)] text-lg "
                name="password2"
                required
                onChange={formik.handleChange}
                value={formik.values.password2}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.password2 &&  formik.errors.password2 ? (
                <div className="flex text-center text-rose-300"> {formik.errors.password2} </div>
              ) : null}
            </div>

            <button
              className="w-558 h-16 bg-[#FBC108] text-white mb-5 rounded-lg font-medium text-lg cursor-pointer hover:bg-[#FFCC00]"
              type="submit"
            >
              Create an account
            </button>
          </form>
          <h4 className="text-center text-lg">
            Already have an account?{" "}
            <span className="text-[#fbc108] cursor-pointer">Sign in</span>
          </h4>
        </div>
        <div>
          <img src={tyrion} alt="tyrion" />
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
