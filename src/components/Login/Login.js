import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
  const [error, setError] = useState('');
  const {signIn, googleSignIn, githubSignIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signIn(email, password)
        .then(result=>{
          const user = result.user;
          form.reset();
          navigate(from, {replace:true});
          console.log(user);
        })
        .catch(error=>{
          console.log(error.message);
          const message = error.message;
          setError(message);
        });
    }
    const handleGooglesignin = () =>{
      googleSignIn()
        .then((result) => {
          const user = result.user;
          navigate("/");
          console.log(user);
        })
        .catch((error) => console.log(error));
    }

    const handleGithubsignin = () =>{
      githubSignIn()
        .then((result) => {
          const user = result.user;
          navigate("/");
          console.log(user);
        })
        .catch((error) => console.log(error));
    }
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <form
              onSubmit={handleSubmit}
              className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
            >
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <Link className="label-text-alt link link-hover">
                      Forgot password?
                    </Link>
                  </label>
                  <label className="label">
                    <Link
                      to="/register"
                      className="label-text-alt link link-hover"
                    >
                      Don't have an account?
                    </Link>
                  </label>
                  <small className="text-red-600">
                    <b>{error}</b>
                  </small>
                </div>
                <div className="flex justify-start">
                  <small className="mr-2">Signin with </small>
                  <button onClick={handleGooglesignin}>
                    <FaGoogle className="mr-3"></FaGoogle>
                  </button>
                  <button onClick={handleGithubsignin}>
                    <FaGithub></FaGithub>
                  </button>
                </div>
                <div type="submit" className="form-control mt-1">
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;