import * as React from "react";

interface IProps {
    data?: any;
    className?: string;
}

interface IState {
}

class TrPart extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr className={this.props.className || ''} data-id={this.props.data.id}>
                {this.renderIndex()}
                {this.renderTd()}
            </tr>
        );
    }

    renderTd() {
        const data = this.props.data;
        const dataKeys = Object.keys(data);

        return dataKeys.map((item, index) => {
            if (item !== 'address' && item !== 'description' && item !== 'index') {
                return <td className='user-data__td' key={index}>{data[dataKeys[index]]}</td>;
            }
        });
    }

    renderIndex() {
        const data = this.props.data;
        const dataKeys = Object.keys(data);

        return dataKeys.map((item, index) => {
            if (item === 'index') {
                return <td className='user-data__td' key={index}>{data[dataKeys[index]]}</td>;
            }
        });
    }
}

export default TrPart;
