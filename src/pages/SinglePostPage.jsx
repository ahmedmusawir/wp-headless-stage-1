import React from 'react';
import Page from '../components/layouts/Page';
import { Row, Col } from 'react-bootstrap';
import Content from '../components/layouts/Content';
import { useParams } from 'react-router-dom';
import BlogSingle from '../components/BlogSingle';
import 'animate.css';

function SinglePostPage() {
  const { id } = useParams();

  return (
    <Page wide={true} pageTitle="Movie Form">
      <Row className="justify-content-center">
        <Col sm={12}>
          <Content width="w-100" cssClassNames="bg-light mt-2">
            <h1>Single Post Page</h1>
            <h3 className="alert alert-success">Single Post ID: {id}</h3>
          </Content>
        </Col>
        <Col sm={10} md={10} lg={8}>
          <Content width="w-100 mx-auto" cssClassNames="bg-light">
            <BlogSingle postId={id} />
          </Content>
        </Col>
      </Row>
    </Page>
  );
}

export default SinglePostPage;
