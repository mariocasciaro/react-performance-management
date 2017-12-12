import React, { Component } from 'react';

export class DataTable extends Component {
    onRowClick = id =>  {
        this.props.onClick(id);
    }
    render() {
        const { settings, dataSet } = this.props;

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            {settings.map((value, index) =>
                                <th key={index}>{value.header}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                    {dataSet.map((row, index) =>
                        <tr key={index}>
                            {this.props.settings.map((value, index) =>
                                value.primaryKey === 'name'
                                ?<td key={row[value.primaryKey]}>
                                    <a href="#" onClick={e => this.onRowClick(row.id)}>
                                    {row[value.primaryKey]}
                                    </a>
                                 </td>
                                :<td key={row[value.primaryKey]}>{row[value.primaryKey]}</td>
                            )}
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}
