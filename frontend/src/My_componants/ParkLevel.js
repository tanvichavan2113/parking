// import React from "react";
// import { useState } from "react";
// import "./ParkLevel.css";
// import carImage from "./car.png";
// import bookedImage from "./booked.jpg";
// import Header from "./Header";
// import { Footer } from "./Footer";

// export const ParkLevel = () => {

//   const handlestagev1 = async (e) => {
//     e.preventDefault();
//     let result = await fetch("http://localhost:5000/vacantv1", {
//       method: "post",
//       body: JSON.stringify({ status: "occoupied", bt_no: 1 }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     console.log("here");
//     result = await result.json();
//     console.log(result);
   
//     if (result.message === "state changed") {
//       alert("state changed");
//     } else {
//       alert("Button state failed");
//     }

//   };



//   const handlestagev2 = async (e) => {
//     e.preventDefault();
//     let result = await fetch("http://localhost:5000/vacantv1", {
//       method: "post",
//       body: JSON.stringify({ status: "occoupied", bt_no: 2 }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     console.log("here");
//     result = await result.json();
//     console.log(result);
  
//     if (result.message === "state changed") {
//       alert("state changed");
//     } else {
//       alert("Button state failed");
//     }
//   };



//   const handlestagev3 = async (e) => {
//     e.preventDefault();
//     let result = await fetch("http://localhost:5000/vacantv1", {
//       method: "post",
//       body: JSON.stringify({ status: "occoupied", bt_no: 3 }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     console.log("here");
//     result = await result.json();
//     console.log(result);
   
//     if (result.message === "state changed") {
//       alert("state changed");
//     } else {
//       alert("Button state failed");
//     }
//   };

 

//   const handlestagev4 = async (e) => {
//     e.preventDefault();
//     let result = await fetch("http://localhost:5000/vacantv1", {
//       method: "post",
//       body: JSON.stringify({ status: "occoupied", bt_no: 4 }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     console.log("here");
//     result = await result.json();
//     console.log(result);
  
//     if (result.message === "state changed") {
//       alert("state changed");
//     } else {
//       alert("Button state failed");
//     }
//   };



//   const handlestagev5 = async (e) => {
//     e.preventDefault();
//     let result = await fetch("http://localhost:5000/vacantv1", {
//       method: "post",
//       body: JSON.stringify({ status: "occoupied", bt_no: 5 }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     console.log("here");
//     result = await result.json();
//     console.log(result);
    
//     if (result.message === "state changed") {
//       alert("state changed");
//     } else {
//       alert("Button state failed");
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div>
//         <button className="b1" onClick={handlestagev1} id="but1" value="my value"></button>
//         <button className="b1" onClick={handlestagev2}></button>
//         <button className="b1" onClick={handlestagev3}></button>
//         <button className="b1" onClick={handlestagev4}></button>
//         <button className="b1" onClick={handlestagev5}></button>
//       </div>
//       <Footer />
//     </div>
//   );
// };



import React, { useState } from "react";
import "./ParkLevel.css";
import carImage from "./car.png";
import bookedImage from "./booked.jpg";
import Header from "./Header";
import { Footer } from "./Footer";

export const ParkLevel = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleStage = async (e, bt_no) => {
    e.preventDefault();

    let result = await fetch("http://localhost:3002/vacantv1", {
      method: "post",
      body: JSON.stringify({ status: "occupied", bt_no }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    console.log(result);

    if (result.message === "state changed") {
      alert("state changed");
      setButtonClicked(true);
    } else {
      alert("Button state failed");
    }
  };

  return (
    <div>
      <Header />
      <div>
        <button
          className={`b1 ${buttonClicked ? "red" : ""}`}
          onClick={(e) => handleStage(e, 1)}
        ></button>
        <button
          className={`b1 ${buttonClicked ? "red" : ""}`}
          onClick={(e) => handleStage(e, 2)}
        ></button>
        <button
          className={`b1 ${buttonClicked ? "red" : ""}`}
          onClick={(e) => handleStage(e, 3)}
        ></button>
        <button
          className={`b1 ${buttonClicked ? "red" : ""}`}
          onClick={(e) => handleStage(e, 4)}
        ></button>
        <button
          className={`b1 ${buttonClicked ? "red" : ""}`}
          onClick={(e) => handleStage(e, 5)}
        ></button>
      </div>
      <Footer />
    </div>
  );
};




