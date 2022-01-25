import React, { useState } from 'react';
import Page from '../layouts/Page';
import Content from '../layouts/Content';
import { Row, Col } from 'react-bootstrap';
import Joi from 'joi-browser';
import placeholderImage from '../../img/place-holder.png';

function FormJoi() {
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    title: '',
    content: '',
    imageUrl: '',
    fileSize: '',
    imageName: '',
  });

  const schema = {
    title: Joi.string().trim().required().label('Title'),
    content: Joi.string().required().label('Content'),
    imageUrl: Joi.object().required().label('Featured Image'),
    fileSize: Joi.number().max(100000),
    imageName: Joi.string().trim().required(),
  };

  const validate = () => {
    const options = { abortEarly: false };
    console.log('DATA FROM VALIDATE', data);
    const { error } = Joi.validate(data, schema, options);

    console.log('ERROR FROM VALIDATE', error);
    if (!error) return null;

    const errors = {};

    for (let item of error.details) {
      if (item.path[0] === 'imageUrl') {
        item.message = 'Featued Image must be an Image File';
        errors[item.path[0]] = item.message;
      } else if (item.path[0] === 'fileSize') {
        item.message = 'Featued Image must be smaller than 100 Kelobytes';
        errors[item.path[0]] = item.message;
      } else {
        errors[item.path[0]] = item.message;
      }
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('IMAGE URL: ', data.imageUrl);

    // VALIDATING FORM DATA
    const errors = validate();
    // UPDATING ERRORS CONSTANT
    setErrors((prev) => errors || {});
    console.log('ERRORS FROM HANDLE SUBMIT:', errors);
    // IF ERRORS FOUND RETURN
    if (errors) return;

    console.log('Submitted', data);
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const inputSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, inputSchema);

    return error ? error.details[0].message : null;
  };

  const handleChange = ({ currentTarget: input }) => {
    const errs = { ...errors };
    const formData = { ...data };

    const errMsg = validateProperty(input);
    if (errMsg) errs[input.name] = errMsg;
    else delete errs[input.name];

    formData[input.name] = input.value;

    setErrors(errs);
    setData(formData);

    console.log(errMsg);
    console.log(errs);
  };

  return (
    <Page wide={true} pageTitle="Movie Form">
      <Row className="justify-content-center">
        <Col sm={12}>
          <Content width="w-75" cssClassNames="mt-2 mx-auto">
            <form onSubmit={handleSubmit} className="form">
              <label className="font-weight-bold" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Enter Title"
                className="form-control mb-3"
                // value={data.title}
                onChange={handleChange}
              />

              {errors.title && (
                <div className="alert alert-danger">{errors['title']}</div>
              )}

              <label className="font-weight-bold" htmlFor="featured-image">
                Featured Image:
              </label>
              <input
                type="file"
                name="imageUrl"
                id="featured"
                className="form-control mb-3"
                onChange={(e) => {
                  const [file] = e.target.files;
                  const desktopImg = document.getElementById('desktop-img');
                  if (file) {
                    desktopImg.src = URL.createObjectURL(file);
                    console.log('LOCAL IMAGE', desktopImg.src);
                  }
                  const currentFileSize = Number(e.target.files[0].size);
                  const currentImageName = e.target.files[0].name;

                  console.log('IMAGE NAME:', currentImageName);

                  setData({
                    ...data,
                    imageUrl: e.target.files[0],
                    fileSize: currentFileSize,
                    imageName: currentImageName,
                  });
                  console.log('DATA IN ONCHANGE:', data);
                }}
              />
              {errors && errors.imageUrl && !data.imageName && (
                <div className="alert alert-danger">{errors['imageUrl']}</div>
              )}

              {errors && errors.fileSize && Number(data.fileSize) > 100000 && (
                <div className="alert alert-danger">{errors['fileSize']}</div>
              )}

              <figure>
                {/* DISPLAY Featured Image</h6> */}
                <img
                  id="desktop-img"
                  src={placeholderImage}
                  alt=""
                  width={100}
                  height={100}
                />
              </figure>
              <label className="font-weight-bold" htmlFor="content">
                Content
              </label>
              <textarea
                name="content"
                id="content"
                placeholder="Enter Content"
                cols="30"
                rows="10"
                className="form-control mb-3"
                // value={data.content}
                onChange={handleChange}
              ></textarea>
              {errors.content && (
                <div className="alert alert-danger">{errors['content']}</div>
              )}

              <button className="btn btn-info btn-block btn-lg" type="submit">
                Update Now!
              </button>
            </form>
          </Content>
        </Col>
      </Row>
    </Page>
  );
}

export default FormJoi;
