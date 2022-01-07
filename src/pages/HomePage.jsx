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
            <h1>React CRUD w/ HeadLess WP </h1>
          </Content>
        </Col>
        <Col sm={12}>
          <Content width="w-100" cssClassNames="bg-light">
            {/* <BlogIndex /> */}
            <h2>Let's Handle Pagination w/ WPAPI in REACT</h2>
            <ul className="list-group">
              <li className="list-group-item">Next/Prev Pagination</li>
              <li className="list-group-item">Numeric Pagination</li>
              <li className="list-group-item">Load More Pagination</li>
            </ul>
          </Content>
        </Col>
      </Row>
    </Page>
  );
}

export default HomePage;
