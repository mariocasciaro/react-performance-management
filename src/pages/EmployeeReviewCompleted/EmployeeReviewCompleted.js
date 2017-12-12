import React, { Component } from 'react';
import { DataTable } from '../../components/DataTable/DataTable'
import PropTypes from 'prop-types';

export class EmployeeReviewCompleted extends Component {
    constructor(props) {
        super(props)
        this.completedDataSet = [
            {
                id:3,
                name: 'Nazeems',
                completedDate: '23/12/2017'
            },
            {
                id:4,
                name: 'Rahul',
                completedDate: '23/12/2017'
            }

        ];
        this.completedSettings = [
            {
                primaryKey: 'name',
                header: 'Name'
            },
            {
                primaryKey: 'completedDate',
                header: 'Completed Date'
            }
        ];
    }
    onClick = id => {
        console.log(id);
    }
    render() {
        return(
            <div>
                <DataTable dataSet={this.completedDataSet} settings={this.completedSettings}
                    onClick={this.onClick} />
            </div>
        )
    }
}

EmployeeReviewCompleted.propTypes = {
    completedDataSet: PropTypes.object,
    completedSettings: PropTypes.object
}
