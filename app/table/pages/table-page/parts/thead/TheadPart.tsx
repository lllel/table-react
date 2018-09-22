import * as React from "react";
import TdHeadPart from "../td_head/TdHeadPart";
import {connect} from "react-redux";
import {sortingData} from "../../../../../../common/redux/action-create/actionCreate";

interface IProps {
    sortingData?: (type: string, flag: boolean) => void;
    theadItems?: any;
}

interface IState {
    dataName: string;
    flag: string;
}

class TheadPart extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);

        this.state = {
            dataName: null,
            flag: null
        };
    }

    setSettings(name) {
        const flag = this.state.dataName !== name ? name : (
            this.state.flag === name ? null : name
        );

        this.setState({
            dataName: name,
            flag: flag
        });

        this.props.sortingData(name, flag);
    }

    render() {
        return (
            <thead>
                <tr>
                    {this.renderTheadTitles()}
                </tr>
            </thead>
        );
    }

    renderTheadTitles() {
        return Object.keys(this.props.theadItems).map((item, index) => {
            return (
                <TdHeadPart key={index}
                            onButtonSortClick={this.setSettings.bind(this)}
                            isOpen={this.state.flag === item}
                            dataName={item}
                            itemChild={this.props.theadItems[item]}/>
            )
        });
    }
}

export default connect(null, {sortingData})(TheadPart);
