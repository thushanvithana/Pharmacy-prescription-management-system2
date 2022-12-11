import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function Addstud() {
  const navigate = useNavigate();
  const [inputdata, setInputdata] = useState({
    name: "",
    address: "",
    subject: "",
    contact: "",
  });

  //onchange function
  const setstud = (e) => {
    console.log(e.target.value);
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  };
  //onclick event
  const addinpdata = async (e) => {
    e.preventDefault();

    const { name, address, subject, contact } = inputdata;

    const res = await fetch("http://localhost:5000/addstud", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        address,
        subject,
        contact,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
      alert("Error");
    } else {
      setInputdata(data);
      toast.success("Please wait  !", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        navigate(window.location.replace("http://localhost:3200/"));
      }, 3000);
    }
  };

  return (
    <div>
      <div className="container mt-5">
        <h4> Please fill the following details & upload the prescription. </h4>

        <form className="mt-5 shadow p-5 w-75">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Your Name
            </label>
            <input
              title="Enter valid name"
              pattern="[a-zA-Z ]{3,}"
              required
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter  Name"
              onChange={setstud}
              name="name"
              value={inputdata.name}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Your Address
            </label>
            <input
              title="please input more than 3 characterscharacter"
              pattern="[a-zA-Z0-9 ]{3,}"
              required
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter  Address"
              onChange={setstud}
              name="address"
              value={inputdata.address}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Description
            </label>
            <input
              title="please input more than 3 characterscharacter"
              pattern="[a-zA-Z0-9]{3,}"
              required
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Description"
              onChange={setstud}
              name="subject"
              value={inputdata.subject}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Your Mobile
            </label>
            <input
              title="Phone number Must be 10 numbers"
              pattern="[0-100-9]{10}"
              required
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Contact Number"
              onChange={setstud}
              name="contact"
              value={inputdata.contact}
            />
          </div>
          <div class="form-check">
            <input
              class="form-check-input is-invalid"
              type="checkbox"
              value=""
              id="invalidCheck3"
              aria-describedby="invalidCheck3Feedback"
              required
            ></input>
            <label class="form-check-label" for="invalidCheck3">
              Agree to terms and conditions
            </label>
            <div id="invalidCheck3Feedback" class="invalid-feedback">
              You must agree before submitting.
            </div>
            <br></br><br></br>
          </div>

          <div className="d-flex">
            <br></br>
            <button className="btn btn-primary">
              Add/&nbsp;
              <button
                className="btn btn-primary"
                onClick={addinpdata}
                style={{
                  textAlign: "center",
                  textDecoration: "none",
                  color: "white",
                  padding: 0,
                  border: 0,
                }}
              >
                Details
              </button>
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <ToastContainer />
            <button className="btn btn-primary">
              <a
                href="http://localhost:3001/"
                style={{
                  textAlign: "center",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                {" "}
                Back
              </a>
            </button>
          </div>
        </form>
        <br></br>
        <br></br>
      </div>



      <footer class="footter" style={{ background: "" }}>
        <div class="">
          <div class="">
            <div class="row">
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-map-marker-alt"></i>
                  <br></br>
                  <div class="cta-text">
                    <h4>Find us</h4>
                    <span>Weathera</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-phone"></i>
                  <div class="cta-text">
                    <br></br>
                    <h4>Call us</h4>
                    <span>9876543210 0</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="far fa-envelope-open"></i>
                  <div class="cta-text">
                    <br></br>
                    <h4>Mail us</h4>
                    <span>mail@Weathera.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <div class="row">
              <div class="col-xl-4 col-lg-4 mb-50">
                <div class="footer-widget">
                  <div class="footer-logo">
                    <br></br>
                    <svg
                      width="288"
                      height="64"
                      viewBox="0 0 288 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M39.1045 48.2073C39.2746 48.7408 39.5585 49.2306 39.933 49.6424L39.1045 48.2073ZM46.8992 46.2185L52.6559 16.6027C53.064 14.5034 51.6929 12.4707 49.5935 12.0626C47.4941 11.6545 45.4614 13.0256 45.0534 15.125L40.9966 35.995L46.8992 46.2185Z"
                        fill="#0367A6"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.5464 12.1822C13.447 12.5903 12.0759 14.623 12.484 16.7224L18.2164 46.2133L24.119 35.9898L20.0865 15.2446C19.6784 13.1452 17.6457 11.7741 15.5464 12.1822ZM24.9759 49.9953L26.1215 48.011C25.9478 48.7749 25.5451 49.4671 24.9759 49.9953Z"
                        fill="#0367A6"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M44.7576 45.9747L34.6792 28.5184C34.0142 27.3665 32.5412 26.9718 31.3894 27.6369C30.2375 28.3019 29.8428 29.7749 30.5078 30.9267L40.5863 48.3831C41.2513 49.535 42.7242 49.9296 43.8761 49.2646C45.028 48.5995 45.4227 47.1266 44.7576 45.9747ZM30.6573 26.369C28.8052 27.4383 28.1706 29.8066 29.2399 31.6588L39.3183 49.1151C40.3877 50.9673 42.756 51.6018 44.6081 50.5325C46.4603 49.4632 47.0949 47.0948 46.0255 45.2427L35.9471 27.7864C34.8778 25.9342 32.5095 25.2996 30.6573 26.369Z"
                        fill="#0367A6"
                      />
                      <path
                        d="M34.1396 40.1445L40.8469 36.2721L45.881 44.9915C46.9503 46.8436 46.3157 49.212 44.4636 50.2813V50.2813C42.6115 51.3507 40.2431 50.7161 39.1738 48.8639L34.1396 40.1445Z"
                        fill="#0367A6"
                      />
                      <path
                        d="M40.9171 41.1823C40.8637 41.0897 40.8954 40.9713 40.988 40.9178V40.9178C41.0806 40.8644 41.199 40.8961 41.2525 40.9887L44.2536 46.1868C44.3071 46.2794 44.2753 46.3978 44.1827 46.4513V46.4513C44.0901 46.5048 43.9717 46.473 43.9182 46.3804L40.9171 41.1823Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.4504 45.8873L30.5288 28.431C31.1938 27.2791 32.6668 26.8844 33.8187 27.5495C34.9705 28.2145 35.3652 29.6875 34.7002 30.8393L24.6218 48.2957C23.9567 49.4476 22.4838 49.8422 21.3319 49.1772C20.18 48.5121 19.7853 47.0392 20.4504 45.8873ZM34.5507 26.2816C36.4028 27.3509 37.0374 29.7192 35.9681 31.5714L25.8897 49.0277C24.8203 50.8799 22.452 51.5144 20.5999 50.4451C18.7477 49.3758 18.1131 47.0074 19.1825 45.1553L29.2609 27.699C30.3302 25.8468 32.6985 25.2122 34.5507 26.2816Z"
                        fill="#0367A6"
                      />
                      <path
                        d="M31.0684 40.0571L24.3611 36.1847L19.327 44.9041C18.2577 46.7562 18.8923 49.1246 20.7444 50.1939V50.1939C22.5966 51.2632 24.9649 50.6287 26.0342 48.7765L31.0684 40.0571Z"
                        fill="#0367A6"
                      />
                      <path
                        d="M24.2909 41.0949C24.3444 41.0023 24.3126 40.8839 24.22 40.8304V40.8304C24.1274 40.777 24.009 40.8087 23.9555 40.9013L20.9544 46.0994C20.9009 46.192 20.9327 46.3104 21.0253 46.3639V46.3639C21.1179 46.4174 21.2363 46.3856 21.2898 46.293L24.2909 41.0949Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M32.4218 62.2574C49.1325 62.2574 62.6793 48.7107 62.6793 31.9999C62.6793 15.2891 49.1325 1.74239 32.4218 1.74239C15.711 1.74239 2.16427 15.2891 2.16427 31.9999C2.16427 48.7107 15.711 62.2574 32.4218 62.2574ZM32.4218 63.7215C49.9411 63.7215 64.1434 49.5192 64.1434 31.9999C64.1434 14.4806 49.9411 0.27832 32.4218 0.27832C14.9024 0.27832 0.700195 14.4806 0.700195 31.9999C0.700195 49.5192 14.9024 63.7215 32.4218 63.7215Z"
                        fill="#0367A6"
                      />
                      <path
                        d="M74.583 46.1529V17.7588H84.704C86.913 17.7588 88.7431 18.1609 90.1942 18.965C91.6454 19.7691 92.7314 20.869 93.4524 22.2647C94.1733 23.6511 94.5338 25.2132 94.5338 26.9509C94.5338 28.6978 94.1687 30.2691 93.4385 31.6647C92.7175 33.0512 91.6269 34.1511 90.1665 34.9644C88.7154 35.7686 86.8899 36.1706 84.6901 36.1706H77.7302V32.5382H84.3019C85.6976 32.5382 86.8298 32.2979 87.6987 31.8172C88.5675 31.3274 89.2052 30.6619 89.6119 29.8208C90.0186 28.9797 90.222 28.023 90.222 26.9509C90.222 25.8787 90.0186 24.9267 89.6119 24.0948C89.2052 23.2629 88.5629 22.6113 87.6848 22.1399C86.816 21.6685 85.6698 21.4329 84.2464 21.4329H78.8671V46.1529H74.583Z"
                        fill="#0367A6"
                      />
                      <path
                        d="M98.7753 46.1529V17.7588H103.059V30.0981H117.215V17.7588H121.513V46.1529H117.215V33.7721H103.059V46.1529H98.7753Z"
                        fill="#0367A6"
                      />
                      <path
                        d="M129.369 46.1529H124.822L135.04 17.7588H139.989L150.208 46.1529H145.66L137.633 22.9163H137.411L129.369 46.1529ZM130.132 35.0338H144.884V38.6385H130.132V35.0338Z"
                        fill="#0367A6"
                      />
                      <path
                        d="M153.527 46.1529V17.7588H163.648C165.848 17.7588 167.673 18.1378 169.124 18.8957C170.585 19.6536 171.675 20.7027 172.396 22.0429C173.117 23.3739 173.478 24.9128 173.478 26.6597C173.478 28.3974 173.113 29.9271 172.383 31.2488C171.662 32.5613 170.571 33.5826 169.111 34.3128C167.659 35.043 165.834 35.4081 163.634 35.4081H155.967V31.7202H163.246C164.632 31.7202 165.76 31.5215 166.629 31.124C167.507 30.7266 168.149 30.1489 168.556 29.391C168.963 28.6331 169.166 27.7226 169.166 26.6597C169.166 25.5875 168.958 24.6586 168.542 23.873C168.135 23.0873 167.493 22.4865 166.615 22.0706C165.746 21.6454 164.605 21.4329 163.19 21.4329H157.811V46.1529H153.527ZM167.544 33.3423L174.559 46.1529H169.679L162.802 33.3423H167.544Z"
                        fill="#0367A6"
                      />
                      <path
                        d="M177.91 17.7588H183.109L192.149 39.8308H192.481L201.521 17.7588H206.72V46.1529H202.644V25.606H202.38L194.006 46.1114H190.624L182.249 25.5922H181.986V46.1529H177.91V17.7588Z"
                        fill="#0367A6"
                      />
                      <path
                        d="M214.566 46.1529H210.019L220.237 17.7588H225.186L235.404 46.1529H230.857L222.829 22.9163H222.608L214.566 46.1529ZM215.329 35.0338H230.08V38.6385H215.329V35.0338Z"
                        fill="#0367A6"
                      />
                      <path
                        d="M260.973 26.9924H256.647C256.481 26.0682 256.171 25.2548 255.718 24.5523C255.265 23.8499 254.711 23.2537 254.054 22.7638C253.398 22.274 252.663 21.9042 251.85 21.6547C251.046 21.4051 250.191 21.2803 249.285 21.2803C247.649 21.2803 246.184 21.6917 244.89 22.5143C243.605 23.3369 242.589 24.5431 241.84 26.1329C241.1 27.7226 240.731 29.6636 240.731 31.9559C240.731 34.2666 241.1 36.2168 241.84 37.8066C242.589 39.3964 243.61 40.598 244.904 41.4113C246.198 42.2247 247.654 42.6314 249.271 42.6314C250.168 42.6314 251.018 42.5113 251.822 42.2709C252.636 42.0214 253.37 41.6563 254.027 41.1757C254.683 40.695 255.237 40.1081 255.69 39.4149C256.152 38.7124 256.471 37.9083 256.647 37.0025L260.973 37.0164C260.742 38.412 260.293 39.6968 259.628 40.8706C258.972 42.0352 258.126 43.0427 257.091 43.8931C256.065 44.7342 254.891 45.3858 253.569 45.8479C252.247 46.3101 250.805 46.5411 249.243 46.5411C246.785 46.5411 244.594 45.9588 242.672 44.7942C240.749 43.6204 239.233 41.9428 238.124 39.7615C237.024 37.5802 236.474 34.9783 236.474 31.9559C236.474 28.9242 237.029 26.3223 238.138 24.1503C239.247 21.9689 240.763 20.296 242.686 19.1314C244.608 17.9575 246.794 17.3706 249.243 17.3706C250.75 17.3706 252.155 17.5878 253.458 18.0222C254.771 18.4474 255.949 19.0759 256.994 19.9078C258.038 20.7304 258.902 21.7379 259.586 22.9302C260.27 24.1133 260.732 25.4674 260.973 26.9924Z"
                        fill="#0367A6"
                      />
                      <path
                        d="M263.128 17.7588H267.994L275.411 30.6665H275.716L283.134 17.7588H288L277.699 35.006V46.1529H273.429V35.006L263.128 17.7588Z"
                        fill="#0367A6"
                      />
                    </svg>
                  </div>
                  <div class="footer-text">
                    <p>
                      Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                      sed do eiusmod tempor incididuntut consec tetur
                      adipisicing elit,Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div class="footer-social-icon">
                    <span>Follow us</span>
                    <a href="#">
                      <i class="fab fa-facebook-f facebook-bg"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-twitter twitter-bg"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-google-plus-g google-bg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <br></br>
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">about</a>
                    </li>
                    <li>
                      <a href="#">services</a>
                    </li>
                    <li>
                      <a href="#">portfolio</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Our Services</a>
                    </li>
                    <li>
                      <a href="#">Expert Team</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="#">Latest News</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <br></br>
                    <h3>Subscribe</h3>
                  </div>
                  <div class="footer-text mb-25">
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div class="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address"></input>
                      <button>
                        <i class="fab fa-telegram-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <div class="">
            <div class="row">
              <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                <div class="copyright-text">
                  <p>Copyright &copy; 2022, All Right Reserved</p>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div class="footer-menu">
                  <ul>
                    <li>
                      <a href="http://localhost:3000/">Admin page</a>
                    </li>
                    <li>
                      <a href="http://localhost:3001/allstud">
                        All customer details
                      </a>
                    </li>
                    <li>
                      <a href="http://localhost:3001/addstud">
                        Adding a new customer
                      </a>
                    </li>
                    <li>
                      <a href="#">Policy</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
