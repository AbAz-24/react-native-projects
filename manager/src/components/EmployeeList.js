import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {ListView} from 'deprecated-react-native-listview';
import {employeesFetch} from '../actions';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();

    this.createDataSource(this.props);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be render with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({employees}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid}; //{shift: 'monday', name: 'jane', id: '1j2j3j'}
  });

  return {employees};
};

export default connect(
  mapStateToProps,
  {employeesFetch},
)(EmployeeList);
