import React, { useState, useRef } from 'react';
import Page from '../layouts/Page';
import Content from '../layouts/Content';
import { Row, Col } from 'react-bootstrap';

function FormBasic() {
  const [name, setName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [gender, setGender] = useState('');
  const [location, setLocation] = useState('');
  const [comment, setComment] = useState('');

  const [data, setData] = useState({
    userName: '',
    accept: false,
    gender: '',
    location: '',
    comment: '',
  });

  const handleChange = ({ currentTarget: input }) => {
    // const errs = { ...errors };
    const formData = { ...data };

    // const errMsg = validateProperty(input);
    // if (errMsg) errs[input.name] = errMsg;
    // else delete errs[input.name];
    console.log('HANDLE CHANGE - INPUT NAME', input.name);
    // console.log('HANDLE CHANGE - INPUT VALUE', input.value);
    // console.log('HANDLE CHANGE - INPUT VALUE', input.checked);

    formData[input.name] = input.value;

    // setErrors(errs);
    setData(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // FORM VALUE OBJECT
    const values = {
      userName: name,
      accept: isChecked,
      gender: gender,
      location: location,
      comment: comment,
    };
    // DISPLAY VALUE
    console.log('Form Values: ', data);
    // RESETTING THE FORM AFTER SUBMIT

    // e.target.reset();
  };
  return (
    <Page wide={true} pageTitle="Form Basic">
      <Row className="justify-content-center">
        <Col sm={12}>
          <Content width="w-100" cssClassNames="bg-light">
            {/* DISPLAY BOX */}
            <div className="alert alert-primary">Name: {name}</div>
            <div
              className={
                isChecked ? 'alert alert-success' : 'alert alert-danger'
              }
            >
              Accept: {isChecked ? 'True' : 'False'}
            </div>
            <div className="alert alert-warning">Gender: {gender}</div>
            <div className="alert alert-info">Location: {location}</div>
            <div className="alert alert-dark">Comment: {comment}</div>
            {/* END DISPLAY BOX */}

            {/* SIMPLE FORM */}
            <form className="p-5 bg-light" onSubmit={handleSubmit}>
              {/* TEXT INPUT */}
              <div className="mb-2">
                <label htmlFor="userName" className="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="User Name"
                  className="form-control"
                  onChange={handleChange}
                  // onChange={(e) => setName(e.target.value)}
                />
              </div>
              {/* CHECKBOX */}
              <div className="form-check pb-1 mb-2">
                <input
                  name="accept"
                  className="form-check-input"
                  type="checkbox"
                  checked={isChecked}
                  // value={isChecked}
                  id="flexCheckDefault"
                  onChange={handleChange}
                  // onChange={(e) => setIsChecked(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Accept Privacy Policy
                </label>
              </div>
              {/* RADIO BUTTONS */}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="flexRadioDefault1"
                  value="male"
                  // onChange={(e) => setGender(e.target.value)}
                  onChange={handleChange}
                  checked={gender === 'male'}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="flexRadioDefault2"
                  value="female"
                  // onChange={(e) => setGender(e.target.value)}
                  onChange={handleChange}
                  checked={gender === 'female'}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Female
                </label>
              </div>
              <hr className="bg-primary" />
              {/* SELECT BOX */}
              <select
                name="location"
                className="form-control"
                aria-label="Default select example"
                onChange={handleChange}
              >
                <option defaultValue="">Choose A Location</option>
                <option value="paris">Paris</option>
                <option value="kuala lumpur">KL</option>
                <option value="sarasota">Sarasota</option>
              </select>
              {/* TEXT AREA */}
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label mt-2"
                >
                  LEAVE A COMMENT
                </label>
                <textarea
                  name="comment"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={handleChange}
                ></textarea>
              </div>
              <hr className="bg-primary" />
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
              <button className="btn btn-warning ml-1" type="reset">
                Reset
              </button>
            </form>
          </Content>
        </Col>
      </Row>
    </Page>
  );
}

export default FormBasic;
