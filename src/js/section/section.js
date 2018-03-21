import React from 'react';
import XLSX from 'xlsx';
import {Content} from "./content";

export class Section extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sheet: [],
        }
    }

    componentWillMount() {
        const url = "ux-cruise-data.xlsx";
        /* set up async GET request */
        const req = new XMLHttpRequest();
        req.open("GET", url, true);
        req.responseType = "arraybuffer";

        req.onload = function (e) {
            const data = new Uint8Array(req.response);
            const workbook = XLSX.read(data, {type: "array"});

            /* Get worksheet */
            const first_worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const result = XLSX.utils.sheet_to_json(first_worksheet, {header: 1});

            this.setState({
                sheet: result
            });

        }.bind(this);
        req.send();
    }


    render() {
        return (
            <section>
                <h2>Cruise Lines</h2>
                <p>Choose you favorite cruise line to begin a journey!!!</p>
                <div className="info">
                    <i className="mdi mdi-chevron-down"> </i>
                </div>
                <div className="container">
                    <Content sheet={this.state.sheet}/>
                </div>
            </section>
        )
    }
}