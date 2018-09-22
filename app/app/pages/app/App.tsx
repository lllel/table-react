import * as React from "react";
import "./App.scss";
import TablePage from "../../../table/pages/table-page/TablePage";

interface IProps {
}

interface IState {
}

export default class App extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TablePage/>
        );
    }
}
