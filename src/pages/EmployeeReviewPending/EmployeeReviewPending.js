import React, { Component } from 'react';
import { DataTable } from '../../components/DataTable/DataTable'
import PropTypes from 'prop-types';

export class EmployeeReviewPending extends Component {
    constructor(props) {
        super(props)
        this.dataSet = [
            {
                id: 1,
                name: 'Arun',
                dueDate: '20/12/2017'
            },
            {
                id:2,
                name: 'Ram',
                dueDate: '20/12/2017'
            }

        ];
        this.configSettings = [
            {
                primaryKey: 'name',
                header: 'Name'
            },
            {
                primaryKey: 'dueDate',
                header: 'Due Date'
            }
        ];
    }
    onClick = id => {
        console.log(id);
    }
    render() {
        return(
            <div>
                <DataTable dataSet={this.dataSet} settings={this.configSettings}
                    onClick={this.onClick} />
            </div>
        )
    }
}

EmployeeReviewPending.propTypes = {
    dataSet: PropTypes.object,
    configSettings: PropTypes.object
}
