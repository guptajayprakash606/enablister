import Swal from 'sweetalert2';
import './style.scss'
import { toast } from 'react-toastify';

const confirmationDialog = (message, callback) => {
  Swal.fire({
    title: "Confirm",
    text: message,
    showCancelButton: true,
    confirmButtonText: "Yes, proceed!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      callback();
      toast.success('User Deleted Successfully!', {
        position: "top-right",
      })
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire({
        title: "Cancelled",
        text: "Your action has been cancelled.",
      });
    }
  });
};

export default confirmationDialog;
