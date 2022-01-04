import React from 'react';
import Page from '../components/layouts/Page';
import { Row, Col } from 'react-bootstrap';
import Content from '../components/layouts/Content';
import { useParams } from 'react-router-dom';

function SinglePostPage() {
  const { id } = useParams();

  return (
    <Page wide={true} pageTitle="Movie Form">
      <Row className="justify-content-center">
        <Col sm={12}>
          <Content width="w-100" cssClassNames="bg-light">
            <h1>Single Post Page</h1>
            <h4>Coming Soon...</h4>
            <h3 className="alert alert-success">Single Post ID: {id}</h3>
          </Content>
        </Col>
      </Row>
    </Page>
  );
}

export default SinglePostPage;
