import { useState } from "react";
import { useNavigate } from "react-router";

export default function CollectUserData({ details, setDetails, cardNo }) {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [passport, setPassport] = useState("");

  //   console.log(date);
  const navigate = useNavigate();
  function handleSubmitDetails() {
    if (date && name && email && age && gender && nationality) {
      setDetails([
        ...details,
        {
          cardNo: cardNo,
          date: date,
          name: name,
          email: email,
          age: age,
          gender: gender,
          nationality: nationality,
          passport: passport,
        },
      ]);
      navigate("/cart");
    } else {
      alert("Please fill details");
    }
  }

  return (
    <div className="parent-input">
      <div className="input-details">
        <h2>{cardNo}</h2>
        <div>
          <span>Date Of Jorney *</span>{" "}
          <input
            type="date"
            value={date}
            required
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <span>Name *</span>
          <input
            required
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <span>Email *</span>
          <input
            required
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <span>Age *</span>
          <input
            required
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <span>Gender *</span>

          <select
            onChange={(e) => {
              if (e.target.value) setGender(e.target.value);
            }}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <span>Nationality *</span>
          <input
            required
            type="text"
            placeholder="Nationality"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          />
        </div>
        <div>
          <span>Passport No.</span>
          <input
            type="text"
            placeholder="Passport No."
            value={passport}
            onChange={(e) => setPassport(e.target.value)}
          />
        </div>
        <button className="input-submit" onClick={handleSubmitDetails}>
          Submit
        </button>
      </div>
    </div>
  );
}
