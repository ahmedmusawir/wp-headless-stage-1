import React, { useEffect, useState } from 'react';
import Page from '../components/layouts/Page';
import { Row, Col } from 'react-bootstrap';
import Content from '../components/layouts/Content';
import { fetchPosts } from '../services/WpapiService';

function CardLayoutPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const gotPosts = fetchPosts();
    setPosts(gotPosts);
  }, []);
  return (
    <Page wide={true} pageTitle="Movie Form">
      <Row className="justify-content-center">
        <Col sm={12}>
          <Content width="w-100" cssClassNames="bg-light">
            <h1>Masonry Page</h1>
            <h4>React Bootstrap 5 ...</h4>
          </Content>
        </Col>
      </Row>
    </Page>
  );
}

export default CardLayoutPage;
