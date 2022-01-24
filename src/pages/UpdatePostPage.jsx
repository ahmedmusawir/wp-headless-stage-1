import React from 'react';
import { useParams } from 'react-router-dom';
import Page from '../components/layouts/Page';
import { Row, Col } from 'react-bootstrap';
import Content from '../components/layouts/Content';
import Header from '../components/general/Header';
import UpdatePost from '../components/UpdatePost';

function UpdatePostPage() {
  const { id } = useParams();

  return (
    <Page wide={true} pageTitle="Sample Page">
      <Header />
      <Row className="justify-content-center">
        <Col sm={12}>
          <Content width="w-100" cssClassNames="bg-light mt-2 clearfix">
            <UpdatePost postId={id} />
          </Content>
        </Col>
      </Row>
    </Page>
  );
}

export default UpdatePostPage;
