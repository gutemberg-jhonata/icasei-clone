import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Theme } from 'react-toastify/dist/types/index'

const theme: Theme = 'colored'

export function useToast() {
    return {
        toastSuccess,
        toastError,
        toastInfo
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
