import React from "react";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardOverlay,
  MDBCardTitle,
  MDBContainer,
  MDBCardImage,
} from "mdb-react-ui-kit";

const Welcome = () => {
  return (
    <>
      {/* START HERO BANNER */}
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://mdbootstrap.com/img/new/slides/041.webp')",
          backgroundColor: "#cccccc" /* Used if the image is unavailable */,
          height: 400,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="mask"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            margin: "0 auto",
            top: "50%",
            width: "75%",
            transform: "translateY(50%)",
          }}
        >
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3 text-white">Trail Blazers</h1>
              <hr
                style={{
                  borderTop: "3px solid #fefae0",
                }}
                class="solid"
              />
              <h2>Choose your own adventure</h2>
            </div>
          </div>
        </div>
      </div>

      {/* END HERO BANNER*/}
      {/* START NPI CARDS */}

      <MDBContainer
        className="d-flex flex-md-row  mb-3  "
        style={{
          marginTop: ".5rem",
          justifyContent: "space-evenly",
        }}
      >
        {/* CARD 1 */}
        <MDBCard background="dark" className="text-white w-25">
          <Link to={"/trails"} style={{ color: "white" }}>
            <MDBCardImage
              overlay
              src="https://cdn.pixabay.com/photo/2016/11/22/19/25/man-1850181_960_720.jpg"
              alt="trails"
            />
            <MDBCardOverlay>
              <MDBCardTitle style={{ fontSize: "1rem" }}>Hike</MDBCardTitle>
            </MDBCardOverlay>
          </Link>
        </MDBCard>
        {/* END CARD 1 */}

        {/* CARD 2 */}

        <MDBCard background="dark" className="text-white w-25">
          <Link to={"/parks"} style={{ color: "white" }}>
            <MDBCardImage
              overlay
              src="https://cdn.pixabay.com/photo/2016/08/12/20/14/river-1589616_960_720.jpg"
              alt="national parks"
              style={{ height: "118%" }}
            />
            <MDBCardOverlay>
              <MDBCardTitle style={{ fontSize: "1rem" }}>See</MDBCardTitle>
            </MDBCardOverlay>
          </Link>
        </MDBCard>

        {/* END CARD 2 */}

        {/* CARD 3 */}
        <MDBCard background="dark" className="text-white w-25">
          <Link to={"/hotsprings"} style={{ color: "white" }}>
            <MDBCardImage
              overlay
              src="https://cdn.pixabay.com/photo/2016/11/21/17/39/hot-spring-1846721_960_720.jpg"
              alt="hot springs"
              className="h-100"
            />
            <MDBCardOverlay>
              <MDBCardTitle style={{ fontSize: "1rem" }}>Soak</MDBCardTitle>
            </MDBCardOverlay>
          </Link>
        </MDBCard>
        {/* END CARD 3 */}
      </MDBContainer>
    </>
  );
};

export default Welcome;
