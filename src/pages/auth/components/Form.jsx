import { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../../../store/context/UserContext";
import Spinner from "../../../components/Spinner";
import { login } from "../../../service/auth";
import Footer from "../../../components/Footer";
import Input from "../../../components/Input";
import Error from "../../../components/Error";
import RememberCheck from "./RememberCheck";
import Header from "../../../components/Header";
import { AuthContext } from "../../../store/context/AuthContext";
import Button from "../../../components/Button";
import {
  LOGIN_USER_SUCCESS,
  SAVE_USER_DATA,
} from "../../../store/actions/actionTypes";

const Form = () => {
  // REMEMBER ME
  const rememberCheck = useRef(null);

  // AUTHENTICATION FOR REMEMBER ME
  const { dispatch: authDispatch } = useContext(AuthContext);
  const { dispatch: userDataDispatch } = useContext(UserDataContext);
  const navigate = useNavigate();

  // FORM HANDLERS
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // SPINNER
  const [loading, setLoading] = useState(false);

  //   ON SUBMIT
  const onSubmit = async (data) => {
    const isChecked = rememberCheck.current
      ? rememberCheck.current.checked
      : false;

    try {
      setLoading(true);
      const response = await login(data);

      if (response) {
        if (response.data.status === 404 || response.data.status === 201) {
          toast.error(response.data.message);
          setLoading(false);
          return;
        }

        if (isChecked && response.data.data.id) {
          authDispatch({
            type: LOGIN_USER_SUCCESS,
            payload: response.data.data,
          });
        } else {
          sessionStorage.setItem("user", JSON.stringify(response.data.data));
        }

        userDataDispatch({ type: SAVE_USER_DATA, payload: response.data.data });
        toast.success(response.data.message);
        setLoading(false);
        navigate("/home", { replace: true });
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return loading ? (
    <Spinner />
  ) : (
    <section className="flex h-[calc(100vh-6px)] items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <Header title="LOGIN TO CONTROL PANEL" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex min-h-[250px] w-[400px] flex-col items-start justify-between gap-2 rounded-sm border border-gray-200 bg-white p-5"
        >
          <div className="w-full">
            <Input
              errors={errors}
              register={register}
              placeholder="E-mail address"
              name="email"
              type="email"
              validation={{
                required: "Email cannot be blank.",
                minLength: {
                  value: 1,
                  message: "E-mail address cannot be blank.",
                },
                pattern: {
                  value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                  message: "Invalid email format.",
                },
              }}
            />
            <Error errors={errors.email} />
            <span className="text-xs text-[#737373]">Your unique email</span>
          </div>

          <div className="w-full space-y-2">
            <div>
              <Input
                errors={errors}
                register={register}
                placeholder="Password"
                name="password"
                type="password"
                validation={{
                  required: "Password cannot be blank.",
                }}
              />
              <Error errors={errors.password} />
            </div>

            <RememberCheck rememberCheck={rememberCheck} />
          </div>

          <Button>Login</Button>
        </form>

        <Footer />
      </div>
    </section>
  );
};

export default Form;
