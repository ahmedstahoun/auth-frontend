import Swal from 'sweetalert2';

export const showError = (message: string = 'Something went wrong') => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: message,
  });
};

export const showSuccess = (message: string = 'Operation successful') => {
  Swal.fire({
    icon: 'success',
    title: 'Success!',
    text: message,
  });
};

export const showConfirm = async (text: string = 'Are you sure?') => {
  const result = await Swal.fire({
    title: 'Confirm',
    text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes',
  });
  return result.isConfirmed;
};
