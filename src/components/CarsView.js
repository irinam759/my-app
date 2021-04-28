import React from 'react';
import { Table } from 'react-bootstrap';

import './carsView.css';
class CarsView extends React.Component{
    constructor(props){
        super(props);
        console.log(props.carsData);
    }
    render(){

        return (
            <Table striped className="my-table">
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Km</th>
                        <th>Km per year</th>
                    </tr>
                </thead>
            </Table>
        )
    }
}
export default CarsView;