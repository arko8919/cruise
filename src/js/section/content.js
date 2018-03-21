import React from 'react';
import {Table} from "./table";

const cruiseLines = []; // list of cruise lines
export class Content extends React.Component {

    createCruiseLinesList() {
        // extract cruise lines from sheet
        for (let sheetIndex = 1; sheetIndex < this.props.sheet.length; sheetIndex++) {
            //check if cruise line is already on the list
            let checkCruiseLine = false;
            for (let cruiseLinesIndex = 0; cruiseLinesIndex < cruiseLines.length; cruiseLinesIndex++) {
                if (this.props.sheet[sheetIndex][5] === cruiseLines[cruiseLinesIndex]) {
                    checkCruiseLine = true;
                }
            }
            // if cruise line is not on the list add it to array
            if (checkCruiseLine === false) {
                cruiseLines.push(this.props.sheet[sheetIndex][5]);
            }
        }
    }

    render() {
        this.createCruiseLinesList(); // create list of available cruise lines

        return (
            cruiseLines.map(cruiseLine =>
                <div className="content" key={cruiseLine}>
                    <img src={require(`./cruise-line-logos/${cruiseLine}`)}
                         alt={cruiseLine}/>
                    <div className="overlay">
                        <Table sheet={this.props.sheet}
                               cruiseLineName={cruiseLine}/>
                    </div>
                </div>
            )
        )
    }
}