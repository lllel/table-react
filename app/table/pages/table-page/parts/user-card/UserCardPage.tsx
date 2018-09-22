import * as React from "react";
import './UserCardPage.scss';

interface IProps {
    userData?: any;
}

interface IState {
}

class UserCardPage extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.userData || !this.props.userData.firstName) {
            return null;
        }

        const {userData} = this.props;

        return (
            <div className={'user-card-container'}>
                <p>Выбран пользователь: <span>{userData.firstName + ' ' + userData.lastName}</span></p>
                <p>Описание:</p>
                <p><span>{userData.description}</span></p>
                <p>Адрес проживания: <span>{userData.address.streetAddress}</span></p>
                <p>Город: <span>{userData.address.city}</span></p>
                <p>Провинция/штат: <span>{userData.address.state}</span></p>
                <p>Индекс: <span>{userData.address.zip}</span></p>
            </div>
        );
    }
}

export default UserCardPage;
