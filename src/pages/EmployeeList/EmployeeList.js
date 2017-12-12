import React, { Component } from 'react';

import { EmployeeReviewPending } from '../EmployeeReviewPending/EmployeeReviewPending';
import { EmployeeReviewCompleted } from '../EmployeeReviewCompleted/EmployeeReviewCompleted';

export class EmployeeList extends Component {
    render() {
      return (
        <div>
            <EmployeeReviewPending />
            <EmployeeReviewCompleted />
        </div>
      );
    }
}
