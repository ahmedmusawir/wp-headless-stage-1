import React from 'react';
import Page from '../components/layouts/Page';
import { Row, Col } from 'react-bootstrap';
import Content from '../components/layouts/Content';
import BlogIndex from '../components/BlogIndex';

function HomePage() {
  return (
    <Page wide={true} pageTitle="HeadLess WP">
      <Row className="justify-content-center">
        <Col sm={12}>
          <Content width="w-100" cssClassNames="bg-light">
            <h1>React Blog w/ HeadLess WP </h1>
          </Content>
        </Col>
        <Col sm={12}>
          <Content width="w-100" cssClassNames="bg-light">
            <BlogIndex />
          </Content>
        </Col>
      </Row>
    </Page>
  );
}

export default HomePage;
