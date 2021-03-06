import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Logo from "./image/logo.png";
import Gambaran from "./image/login.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState } from "react";
const Register = () => {
  const navigate = useNavigate();
  // const baseUrl = "https://reqres.in";
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [pass2, setpass2] = useState("");
  const [isError, setisError] = useState(false);
  const [error, seterror] = useState("");
  const username = name;
  const register = async () => {
    if (password === pass2) {
      const user = {
        username,
        email,
        password,
      };
      try {
        // const res = await axios.post(`${baseUrl}/api/register`, user);
        const res = await axios.post(
          "http://localhost:8081/api/register",
          user
        );
        localStorage.setItem("token", res.data.token);
        setemail("");
        setpassword("");
        setpass2("");
        setname("");
        console.log(res.data);
        navigate("/Kampus");
      } catch (err) {
        seterror(err.response.data.message);
        console.log(error, isError);
        setisError(true);
      }
    } else {
      alert("Mohon memperhatikan kesamaan password");
    }
  };

  return (
    <>
      <div className="sibaground">
        <div className="text-light mt-5">
          <div className="pt-3">
            <Container>
              <div className="row">
                <div className="col-md-6 p-5">
                  <center>
                    <img src={Logo} alt="logo" className="img-fluid" />
                    <div>
                      <img src={Gambaran} alt="" />
                    </div>
                  </center>
                </div>
                <div className="col-md-6">
                  <div className="p-5">
                    <div className="bg-light p-4 text-dark">
                      <center>
                        <h3>
                          <b>Create Account</b>
                        </h3>
                      </center>
                      <Form className="pt-3">
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Your Name"
                            onChange={(e) => setname(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="email"
                            placeholder="Your Email"
                            onChange={(e) => setemail(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setpassword(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="password"
                            placeholder="Repeat Your Password"
                            onChange={(e) => setpass2(e.target.value)}
                          />
                        </Form.Group>

                        <Button
                          variant="dark w-100"
                          type="button"
                          onClick={register}
                        >
                          S U B M I T
                        </Button>
                      </Form>
                      <center>
                        <div className="p-3 text-muted ">
                          <a href="/Login" className="text-reset">
                            Sudah punya akun? Klik disini
                          </a>
                        </div>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
