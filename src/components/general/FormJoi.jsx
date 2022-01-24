import React, { useState } from 'react';
import Page from '../layouts/Page';
import Content from '../layouts/Content';
import { Row, Col } from 'react-bootstrap';
import parse from 'html-react-parser';
import Joi from 'joi-browser';
import placeholderImage from '../../img/place-holder.png';

function FormJoi({ postId }) {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [fileSize, setFileSize] = useState('');
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState({});

  const schema = {
    title: Joi.string().required().label('Title'),
    content: Joi.string().required().label('Content'),
    imageUrl: Joi.object().required().label('Featured Image'),
    fileSize: Joi.number().max(100000),
  };

  const validate = (data) => {
    console.log('IMAGE OBJ IN VALIDATE:', data.imageUrl);
    const options = { abortEarly: false };
    // JOI'S ERROR OBJECT
    // destructuring the Joi default error object
    const { error } = Joi.validate(data, schema, options);
    // NEVER RETURN NULL HERE
    // It makes the form submit break with [Cannot read property of null]
    if (!error) return {};

    const joiErrors = {};

    for (let item of error.details) {
      console.log('Item Path Type:', typeof item.path);
      if (item.path[0] === 'imageUrl') {
        item.message = 'Featued Image must be an Image File';
        joiErrors[item.path[0]] = item.message;
      } else if (item.path[0] === 'fileSize') {
        item.message = 'Featued Image must be smaller than 100 Kelobytes';
        joiErrors[item.path[0]] = item.message;
      } else {
        joiErrors[item.path[0]] = item.message;
      }
    }
    // console.log('FROM VALIDATE:', joiErrors);
    return joiErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('IMAGE URL: ', imageUrl);

    // CREATING THE FORM DATA OBJECT
    const data = {
      title: title,
      content: content,
      imageUrl: imageUrl,
      fileSize: fileSize,
    };

    // VALIDATING FORM DATA
    const errorsMessages = validate(data);

    // UPDATING ERRORS CONSTANT
    setErrors(errorsMessages);

    console.log('ERRORS FROM HANDLE SUBMIT:', errorsMessages);
    // IF ERRORS FOUND RETURN
    if (errorsMessages) return;

    console.log('Submitted', data);
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
                value={parse(title)}
                onChange={(e) => setTitle(e.target.value)}
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
                  setImageUrl(e.target.files[0]);
                  setFileSize(currentFileSize);
                }}
              />
              {errors.imageUrl && (
                <div className="alert alert-danger">{errors['imageUrl']}</div>
              )}
              {errors.fileSize && (
                <div className="alert alert-danger">{errors['fileSize']}</div>
              )}

              <figure>
                {/* DISPLAY Featured Image</h6> */}

                <img
                  id="desktop-img"
                  src={placeholderImage}
                  alt=""
                  width={150}
                  height={150}
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
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
              {errors.content && (
                <div className="alert alert-danger">{errors['content']}</div>
              )}

              <button
                className="btn btn-info btn-block btn-lg"
                onClick={handleSubmit}
              >
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
