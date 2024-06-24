import React from 'react'
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../../components/Datatable/Table';
import { FaEdit, FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { BiTrash } from 'react-icons/bi';
import { deleteUser, setSelectedUser } from '../../redux-toolkit/features/beneficiarySlice';
import { countryOptions, getCountryLabel } from '../../utils/constant';
import Swal from 'sweetalert2';
import confirmationDialog from '../../components/deleteSwalModal';

const Home = () => {
  let { data, pagination } = useSelector(state => state.beneficiaries);
  const navigate = useNavigate();
  let dispatch = useDispatch();

  const beneficiariesColumn = [
    {
      name: 'ID',
      selector: row => row.id,
    },
    {
      name: 'Fullname',
      selector: row => row.fullName,
      sortable: true,
    },
    {
      name: 'Address',
      selector: row => row.address,
      cell: row => <span>{getCountryLabel(row.country, countryOptions)}</span>
    },
    {
      name: 'Country',
      selector: row => row.country,
    },
    {
      name: 'Pincode',
      selector: row => row.pincode,
    },
    {
      name: 'Actions',
      cell: (row) => <>
        <FaEye onClick={() => handleViewDetails(row)} className='text-secondary cursor-pointer text-2xl' />
        <FaEdit onClick={() => handleEditDetails(row.id)} className='text-secondary cursor-pointer text-2xl ml-6' />
        <BiTrash onClick={() => handleDelete(row.id)} className='text-secondary cursor-pointer text-2xl ml-6' />
      </>
    },
  ];

  const handleViewDetails = (row) => {
    dispatch(setSelectedUser(row))
    if (row) {
      const userDetailsHtml = `
        <div>
          <div class="flex justify-between">
            <span class="font-bold">ID:</span>
            <span>${row.id}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-bold">Full Name:</span>
            <span>${row.fullName}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-bold">Address:</span>
            <span>${row.address}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-bold">Country:</span>
            <span>${row.country}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-bold">Pincode:</span>
            <span>${row.pincode}</span>
          </div>
        </div>`;

      Swal.fire({
        title: 'User Details',
        html: userDetailsHtml,
        width: '800px',
        showCancelButton: false,
        confirmButtonText: 'Close',
        customClass: {
          content: 'user-details-popup'
        }
      });
    }
  }

  const handleEditDetails = (id) => {
    navigate(`/edit/${id}`);
  }

  const handleDelete = (userId) => {
    confirmationDialog("Are you sure you want to delete this user?", () => {
      dispatch(deleteUser(userId));
    });
  }

  return (
    <div className='Home'>
      <Table
        data={data}
        columns={beneficiariesColumn}
        pagination={pagination}
        title="Beneficiaries Details"
      />
    </div>
  )
}

export default Home