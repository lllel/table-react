import * as React from "react";
import "./App.scss";
import TablePage from "../../../table/pages/table-page/TablePage";

interface IProps {
}

interface IState {
    // currentPage: string
}

export default class App extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
    }

    showNotFound() {
        return <h2>Not Found!</h2>
    }

    onEvent(name) {
        // if (this.props.event) {
        //     this.props.event(name);
        // }
        //
        // this.setState({
        //     currentPage: name
        // });
    }

    render() {
        // if (this.props.loading) {
        //     return (
        //         <p>Loading...</p>
        //     )}

        return (
            <TablePage/>
        );
    }
}
