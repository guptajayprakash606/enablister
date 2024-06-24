import React from 'react'
import DataTable from 'react-data-table-component'
import { useDispatch } from 'react-redux';
import Title from '../Title';
import './style.scss';
import { setPage, setRowsPerPage } from '../../redux-toolkit/features/beneficiarySlice';


const Table = ({ data, columns, title, pagination }) => {
    const dispatch = useDispatch();

    const handlePageChange = page => {
        dispatch(setPage(page));
    };

    const handleRowsPerPageChange = newRowsPerPage => {
        dispatch(setRowsPerPage(newRowsPerPage));
    };

    const paginatedData = data.slice(
        (pagination.currentPage - 1) * pagination.rowsPerPage,
        pagination.currentPage * pagination.rowsPerPage
    );

    return (
        <div className='Table'>
            <Title tag="h1">{title}</Title>
            <DataTable
                data={paginatedData}
                columns={columns}
                pagination
                paginationServer
                paginationTotalRows={data.length}
                paginationDefaultPage={pagination.currentPage}
                onChangePage={handlePageChange}
                onChangeRowsPerPage={handleRowsPerPageChange}
            />
        </div>
    )
}

export default Table;
