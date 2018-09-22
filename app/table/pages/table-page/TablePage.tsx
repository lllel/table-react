import * as React from "react";
import './TablePage.scss';
import {connect} from "react-redux";
import {loadData} from "../../../../common/redux/action-create/actionCreate";
import TbodyPart from "./parts/tbody/TbodyPart";
import TheadPart from "./parts/thead/TheadPart";
import PaginationPart from "./parts/pagination/PaginationPart";
import UserCardPage from "./parts/user-card/UserCardPage";

interface IProps {
    loadData?: (userAnswer) => void;
    loadDataInTable?: any;
}

interface IState {
    userData: any;
}

class TablePage extends React.Component<IProps, IState> {
    countTrInPage: number;
    theadItems: any;

    constructor(props) {
        super(props);

        this.state = {
            userData: {}
        };

        this.countTrInPage = 5;
        this.theadItems = {
            index: '№',
            id: 'Id',
            firstName: 'Name',
            lastName: 'Surname',
            email: 'E-mail',
            phone: 'Phone'
        };
    }

    onSetUserDataClick(id) {
        this.props.loadDataInTable.loadingData.find((item) => {
            if (item.id === parseInt(id, 10)) {
                this.setState({userData: item});
            }
        });
    }

    componentDidMount() {
        const userAnswer = prompt('Введите цифру, какой объём данных загружать. 1 - маленький, 2 - большой. (По умолчанию - маленький)', '1');

        this.props.loadData(userAnswer);
    }

    render() {
        if (!this.props.loadDataInTable.loading) {
            return (
                <p>Loading...</p>
            );
        }

        return (
            <>
                <table className='user-data__table'>
                    <TheadPart theadItems={this.theadItems}/>
                    <TbodyPart countTrInPage={this.countTrInPage} onSetUserData={this.onSetUserDataClick.bind(this)}/>
                </table>
                <PaginationPart countTrInPage={this.countTrInPage}/>
                <UserCardPage userData={this.state.userData}/>
            </>
        );
    }
}

export default connect((store: any) => {
    return {
        loadDataInTable: store.loadDataInTable
    };
}, {loadData})(TablePage);
