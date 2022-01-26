import React from 'react';
import Page from '../components/layouts/Page';
import { Row, Col } from 'react-bootstrap';
import Content from '../components/layouts/Content';
import MooseFormContainer from '../components/general/MooseFormContainer';

function MooseFormPage() {
  return (
    <Page wide={true} pageTitle="Sample Page">
      <Row className="justify-content-center">
        <Col sm={12}>
          <Content width="w-100" cssClassNames="bg-light mt-2 clearfix">
            <h3>Moose Form Page</h3>
            <h5>JOI Validation Coming soon...</h5>
          </Content>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm={12}>
          <Content width="w-100" cssClassNames="bg-light mt-2">
            <MooseFormContainer />
          </Content>
        </Col>
      </Row>
    </Page>
  );
}

export default MooseFormPage;
