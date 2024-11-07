import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaDoorOpen, FaUser, FaPlusCircle } from "react-icons/fa";
import { IoIosKeypad } from "react-icons/io";


function Home() {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const generateRoomId = (e) => {
    e.preventDefault();
    const Id = uuid();
    setRoomId(Id);
    toast.success("Room Id is generated");
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("Both the field is requried");
      return;
    }

    // redirect
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
    toast.success("room is created");
  };

  // when enter then also join
  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  return (
    <div
  className="container-fluid min-vh-100 d-flex align-items-center"
  style={{ backgroundColor: "#121212" }} // Background Color: Dark Black
>
  <div className="row justify-content-center w-100">
    <div className="col-12 col-md-6 col-lg-4">
      <div
        className="card shadow-lg p-4 rounded-3 border-0"
        style={{ backgroundColor: "#1E1E1E" }} // Card Background: Charcoal Gray
      >
        <div className="card-body text-center">
          <img
            src="/images/codecast.png"
            alt="CodeCast Logo"
            className="img-fluid mb-3"
            style={{ maxWidth: "160px" }}
          />
          <h3 className="card-title mb-4" style={{ color: "#FFD700" }}> {/* Header Text: Gold */}
            Join a Room
          </h3>
          <div className="form-group mb-3 position-relative">
            <IoIosKeypad
              className="position-absolute top-50 start-0 translate-middle-y ms-3"
              size={24}
              style={{ color: "#9A8A8A" }} // Room ID Icon: Light Gray
            />
            <input
              type="text"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              className="form-control rounded-full ps-5 p-2"
              placeholder="ROOM ID"
              style={{ backgroundColor: "#2A2A2A", color: "#E0E0E0", border: "none" }} // Input Fields: Dark Gray
            />
          </div>
          <div className="form-group mb-3 position-relative">
            <FaUser
              className="position-absolute top-50 start-0 translate-middle-y ms-3"
              size={24}
              style={{ color: "#8A8A8A" }} // Username Icon: Light Gray
            />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control p-2 ps-5"
              placeholder="USERNAME"
              style={{ backgroundColor: "#2A2A2A", color: "#E0E0E0", border: "none" }} // Input Fields: Dark Gray
            />
          </div>
          <button
            onClick={joinRoom}
            className="btn btn-md btn-block"
            style={{ backgroundColor: "#4CAF20", color: "#FFFFFF" }} // Button Background: Green
          >
            <FaDoorOpen className="me-2" /> JOIN
          </button>
          <p className="mt-3 text-light ">
            Don't have a room ID? Create{" "}
            <span
              onClick={generateRoomId}
              className="hover-underline"
              style={{ color: "#1E90FF", cursor: "pointer"}} // New Room Text: Bright Blue
            >
              New Room
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default Home;
