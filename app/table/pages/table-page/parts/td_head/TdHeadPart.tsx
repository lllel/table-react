import * as React from "react";
import './TdHeadPart.scss';

interface IProps {
    isOpen?: boolean;
    itemChild?: any;
    onButtonSortClick?: (dataName: any) => void;
    dataName?: string;
}

interface IState {
}

class TdHeadPart extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
    }

    render() {
        const {dataName, itemChild, isOpen, onButtonSortClick} = this.props;

        return (
            <td className={isOpen ? "user-data__td user-data__td--sorting user-data__td--sorting-down" : "user-data__td user-data__td--sorting user-data__td--sorting-up"} onClick={onButtonSortClick.bind(this, dataName)}
                data-name={dataName}>{itemChild}</td>
        );
    }
}

export default TdHeadPart;
