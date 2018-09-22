import {combineReducers} from "redux";
import loadDataInTable from './loadDataInTable';
import paginationPage from "./paginationPage";

export default combineReducers({
    loadDataInTable, paginationPage
});
