import Info from './info'
import { Loading, StopLoading } from './loading'

const Toast = {
    info: (title) => Info(title),
    loading: () => Loading(),
    stop: () => StopLoading()
}

export default Toast