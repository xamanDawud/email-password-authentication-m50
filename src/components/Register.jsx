import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import app from "../../firebase.config";
import { AiFillEye } from "react-icons/ai";

let auth = getAuth(app);
const Register = () => {
  let [regMessage, setRegMessage] = useState("");
  let registerHandler = (e) => {
    e.preventDefault();
    setRegMessage("");
    let email = e.target.email.value;
    let password = e.target.password.value;
    // console.log(email, password);

    // Email Regular Expression set
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setRegMessage("Please write email as email format");
      return;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)) {
      setRegMessage(
        "Password should be used uppercase,lowercase,number and symbols...!"
      );
      return;
    }

    //crate user
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setRegMessage("User registered Successfully");
      })
      .catch((e) => {
        setRegMessage(e.message);
      });
    // e.target.email.value = "";
    // e.target.password.value = "";
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={registerHandler} className="card-body">
            <div className="">
              {regMessage && <p className="text-blue-500">{regMessage}</p>}
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
              />
            </div>
            <div className="">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
                <span className="absolute bottom-4 end-2 ">
                  <AiFillEye />
                </span>
              </div>
            </div>
            <div className="mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
