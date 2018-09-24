import * as React from "react";
import './PaginationPart.scss';
import {connect} from "react-redux";
import {getPaginationPage} from "../../../../../../common/redux/action-create/actionCreate";

interface IProps {
    loadDataInTable?: any;
    countTrInPage?: number;
    getPaginationPage?: (page) => void;
}

interface IState {
    paginationButtonIsActive: number;
}

class PaginationPart extends React.Component<IProps, IState> {
    paginationRef: any;

    constructor(props) {
        super(props);

        this.state = {
            paginationButtonIsActive: 1
        };
    }

    componentDidMount() {
        this.paginationRef.querySelectorAll('.pagination__item')[0].classList.add('pagination__item--active');
    }

    onPaginationClick(evt) {
        const paginationButton = evt.target.closest('.pagination__item');

        if (!paginationButton || paginationButton.classList.contains('pagination__item--active')) {
            return null;
        }

        this.setState({
            paginationButtonIsActive: +paginationButton.getAttribute('data-page')
        });

        this.props.getPaginationPage(+paginationButton.getAttribute('data-page'));
    }

    render() {
        return (
            <ul ref={(r) => {this.paginationRef = r}} className={'pagination'} onClick={this.onPaginationClick.bind(this)}>
                {this.addPagination()}
            </ul>
        );
    }

    addPagination() {
        const count = Math.ceil(this.props.loadDataInTable.loadingData.length / this.props.countTrInPage);

        return new Array(count).fill(1).map((item, index) => {
            return <li key={index} className={`pagination__item ${this.state.paginationButtonIsActive === (index + 1) ? 'pagination__item pagination__item--active' : 'pagination__item'}`} data-page={index + 1}>{index + 1}</li>
        });
    }
}

export default connect((store: any) => {
    return {
        loadDataInTable: store.loadDataInTable
    };
}, {getPaginationPage})(PaginationPart);
