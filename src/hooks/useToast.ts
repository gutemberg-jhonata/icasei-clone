import { toast, ToastContainer } from 'react-toastify';
import { Theme } from 'react-toastify/dist/types/index'
import 'react-toastify/dist/ReactToastify.css';

const theme: Theme = 'colored'

export function useToast() {
    return {
        toastSuccess,
        toastError,
        toastInfo,
        ToastContainer
    }
}

function toastSuccess(message: string) {
    toast(message, {
        type: 'success',
        theme,
        icon: '🎁'
    })
}

function toastError(message: string) {
    toast(message, {
        type: 'error',
        theme
    })
}

function toastInfo(message: string) {
    toast(message, {
        type: 'info',
        theme
    })
}
