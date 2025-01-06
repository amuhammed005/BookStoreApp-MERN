// toast.js
import Swal from "sweetalert2";

const ToastAlert = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

// Function to show a toast
export const showToast = (icon, title) => {
  ToastAlert.fire({
    icon, // e.g., "success", "error", "warning", etc.
    title, // e.g., "Message goes here"
  });
};

export default ToastAlert;
