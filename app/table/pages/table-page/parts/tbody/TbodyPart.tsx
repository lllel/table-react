import * as React from "react";
import './TbodyPart.scss';
import {connect} from "react-redux";
import TrPart from "../tr/TrPart";

interface IProps {
    loadDataInTable?: any;
    countTrInPage?: number;
    paginationPage?: any;
    onSetUserData?: (id) => void;
}

interface IState {
}

class TbodyPart extends React.Component<IProps, IState> {
    tbodyRef: any;

    constructor(props) {
        super(props);
    }

    removeActiveClassInTr() {
        [].forEach.call(this.tbodyRef.querySelectorAll('.tbody-tr--active'), (item) => {
            item.classList.remove('tbody-tr--active');
        });
    }

    onTbodyClick(evt) {
        const tr = evt.target.closest('[data-id]');

        this.removeActiveClassInTr();
        tr.classList.add('tbody-tr--active');
        this.props.onSetUserData(tr.getAttribute('data-id'));
    }

    render() {
        return (
            <tbody ref={(r) => {this.tbodyRef = r}} onClick={this.onTbodyClick.bind(this)}>
                {this.renderTrInTbody()}
            </tbody>
        );
    }

    renderTrInTbody() {
        const numberPage = this.props.paginationPage.paginationPage || 1;
        const page = (numberPage * this.props.countTrInPage) - this.props.countTrInPage;

        return this.props.loadDataInTable.loadingData.map((item, index) => {
            if (index >= page && index < page + this.props.countTrInPage) {
                return <TrPart data={item} key={index}/>;
            }
        });
    }
}

export default connect((store: any) => {
    return {
        loadDataInTable: store.loadDataInTable,
        paginationPage: store.paginationPage
    };
})(TbodyPart);
