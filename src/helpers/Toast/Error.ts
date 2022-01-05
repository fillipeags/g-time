import toast from 'react-hot-toast';

const ErrorHandler = msg => {
  toast.error(msg, {
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  });
};

export default ErrorHandler;
