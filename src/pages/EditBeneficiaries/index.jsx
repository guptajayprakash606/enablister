import React, { useEffect, useState } from 'react'
import Title from '../../components/Title'
import './style.scss'
import { useForm } from 'react-hook-form';
import FormInput from '../../components/FormInput';
import SelectInput from '../../components/SelectInput';
import { countryOptions } from '../../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../../redux-toolkit/features/beneficiarySlice';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditBeneficiaries = () => {
    const { id } = useParams();
    const { register, formState: { errors }, handleSubmit, reset } = useForm('');
    const [selectedOption, setSelectedOption] = useState(null);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    const item = useSelector(state => state.beneficiaries.data.find(item => item.id === id));
    console.log(item);

    useEffect(() => {
        reset(item);
    }, [item, reset])

    const onSubmit = (data) => {
        dispatch(editUser(data));
        navigate('../');
        toast.success('User Updated Successfully!', {
            position: "top-right",
        })
    }

    const handleSelectChange = (selected) => {
        console.log(selected);
        setSelectedOption(selected)
    }

    return (
        <div className='EditBeneficiaries'>
            <Title>Create Beneficiaries</Title>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    label="Fullname"
                    name="fullName"
                    placeholder="Enter Fullname"
                    register={register}
                    errors={errors}
                    rules={{
                        required: "This input is required.",
                        maxLength: {
                            value: 30,
                            message: "This input must exceed 30 characters"
                        },
                        minLength: {
                            value: 5,
                            message: "This input must be at least 5 characters long."
                        }
                    }}
                />
                <FormInput
                    label="Address"
                    name="address"
                    placeholder="Enter Address"
                    register={register}
                    errors={errors}
                    rules={{
                        required: "This input is required.",
                        maxLength: {
                            value: 50,
                            message: "This input must exceed 30 characters"
                        },
                        minLength: {
                            value: 5,
                            message: "This input must be at least 5 characters long."
                        }
                    }}
                />
                <SelectInput
                    label="Select Country"
                    options={countryOptions}
                    onChange={(e) => {
                        handleSelectChange(e.target.value);
                    }}
                    value={selectedOption ? selectedOption.value : ""}
                    name="country"
                    register={register}
                    errors={errors}
                    rules={{
                        required: "This input is required.",
                    }}
                    defaultOption="Please Select Parent"
                />
                <FormInput
                    label="Pin Code"
                    type={'number'}
                    name="pincode"
                    placeholder="Enter Pin Code"
                    register={register}
                    errors={errors}
                    rules={{
                        required: "This input is required.",
                        pattern: {
                            value: /^[1-9][0-9]{5}$/,
                            message: "This input must be exactly 6 digits."
                        },
                    }}
                />
                <div className='gap-4 flex justify-end'>
                    <Link to="../" className='rounded-md bg-gray-200 py-2 px-5 text-lg font-semibold text-black shadow-inner'>Go Back</Link>
                    <button type="submit" className='rounded-md bg-indigo-500 py-2 px-5 text-lg font-semibold text-white shadow-inner'>Submit</button>
                </div>

            </form>
        </div>
    )
}

export default EditBeneficiaries