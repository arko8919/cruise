import React from 'react';

export class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tableData: [],
            cruiseLineName: "none",
            departureDate: "none",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    createList(item) {
        const list = [];
        // check each item on sheet
        for (let sheetIndex = 1; sheetIndex < this.props.sheet.length; sheetIndex++) {
            let check = false;
            // check if item is already on the list
            for (let index = 0; index < list.length; index++) {
                if (this.props.sheet[sheetIndex][item] === list[index]) {
                    check = true;
                }
            }
            // if item is not on the list, add it to list
            if (check === false) {
                list.push(this.props.sheet[sheetIndex][item]);
            }
        }
        return list;
    }

    createRows() {
        let tempValue = [];
        // check each item on sheet
        for (let sheetIndex = 0; sheetIndex < this.props.sheet.length; sheetIndex++) {

            // elements added to table
            const row =
                <tr key={sheetIndex}>
                    <td>{this.props.sheet[sheetIndex][1]}</td>
                    <td>{this.props.sheet[sheetIndex][2]}</td>
                    <td>{this.props.sheet[sheetIndex][3]}</td>
                    <td>{this.props.sheet[sheetIndex][4]}</td>
                    <td>{this.props.sheet[sheetIndex][6]}</td>
                </tr>;

            // check for match and push it to temporary array
            if (this.props.sheet[sheetIndex][4] === this.state.cruiseLineName &&
                this.props.sheet[sheetIndex][2] === this.state.departureDate) {
                tempValue.push(row);
            }

            else if (this.props.sheet[sheetIndex][4] === this.state.cruiseLineName &&
                this.state.departureDate === "none") {
                tempValue.push(row);

            }

            else if (this.props.sheet[sheetIndex][2] === this.state.departureDate &&
                this.state.cruiseLineName === "none") {
                tempValue.push(row);
            }
        }

        this.setState({
            tableData: tempValue
        })
    }

    handleChange = param => e => {
        if (param === "cruiseLineName") {
            this.setState({
                cruiseLineName: e.target.value
            });
        }
        else if (param === "departureDate") {
            this.setState({
                departureDate: e.target.value
            });
        }
    };

    handleClick() {
        console.log(this.state.cruiseLineName);
        console.log(this.state.departureDate);
        this.createRows();

    }

    render() {
        const departureDates = this.createList(2); // extract list of departure dates
        const cruiseLineNames = this.createList(4); // extract list of cruise line names

        return (
            <div className="search">
                <h2>Be more specific with planning your trip !!!</h2>
                {/*  select menu */}
                <div className="options">
                    <select value={this.state.cruiseLineName}
                            onChange={this.handleChange("cruiseLineName")}>
                        <option value="none">none</option>
                        {cruiseLineNames.map(cruiseLineName =>
                            <option value={cruiseLineName}
                                    key={cruiseLineName}>{cruiseLineName}</option>
                        )}
                    </select>
                    <select onChange={this.handleChange("departureDate")}
                            value={this.state.departureDate}>
                        <option value="none">none</option>
                        {departureDates.map(departureDate =>
                            <option value={departureDate}
                                    key={departureDate}>{departureDate}</option>
                        )}
                    </select>
                </div>
                <button onClick={this.handleClick}>Search</button>

                {/*  result */}
                <div className="result">
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
                        {this.state.tableData}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}