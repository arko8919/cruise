import React from 'react';

export class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tripData: [],
        };
    }

    componentWillMount() {
        let tempValue = []; // temp variable which hold all trips list base on cruise line name

        for (let sheetIndex = 0; sheetIndex < this.props.sheet.length; sheetIndex++) {
            // all trips with same cruise line name are added to array
            if (this.props.sheet[sheetIndex][5] === this.props.cruiseLineName) {
                tempValue.push(
                    <tr key={sheetIndex}>
                        <td>{this.props.sheet[sheetIndex][1]}</td>
                        <td>{this.props.sheet[sheetIndex][2]}</td>
                        <td>{this.props.sheet[sheetIndex][3]}</td>
                        <td>{this.props.sheet[sheetIndex][4]}</td>
                        <td>{this.props.sheet[sheetIndex][6]}</td>
                    </tr>);
            }
        }

        this.setState( {
            tripData: tempValue
        })
    }


    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>Offer name</th>
                    <th>Departure Date</th>
                    <th>Itinerary</th>
                    <th>Cruise Line Name</th>
                    <th>Cruise Ship Name</th>
                </tr>
                </thead>
                <tbody>
                {this.state.tripData}
                </tbody>
            </table>
        )
    }
}