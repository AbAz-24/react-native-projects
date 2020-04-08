import React, {Component} from 'react';
import {Card, CardSection, Input, Button} from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input label="Name" placeHolder="Jane" />
        </CardSection>

        <CardSection>
          <Input label="Phone" placeHolder="555-555-5555" />
        </CardSection>

        <CardSection></CardSection>

        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreate;
