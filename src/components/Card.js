import React from "react";
import "./style/card.css";
import { Image } from "react-bootstrap";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const CardComponent = ({ employee }) => {
  return (
    <>
      <div className="card">
        <div className="card-personel-id">
          <p>
            Personel ID : <span>146</span>
          </p>
          <HiOutlineDotsHorizontal style={{ cursor: "pointer" }} />
        </div>
        <Image
          src={employee.picture.large}
          width="55%"
          roundedCircle
          style={{ border: "gainsbro 1px solid " }}
        />
        <div className="card-biodata">
          <label>Name</label>
          <p>
            {employee.name.first} {employee.name.last}
          </p>
          <label>Telephone</label>
          <p>{employee.cell}</p>
          <label>Birthday</label>
          <p>
            {employee.dob.date.slice(8, 10)} / {employee.dob.date.slice(5, 7)} /
            {employee.dob.date.slice(0, 4)}
          </p>
          <label>Email</label>
          <p>{employee.email}</p>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
