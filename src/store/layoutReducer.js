import { getDeviceType } from '../utils/windowUtils'

const layoutReducer = (state = { deviceType: getDeviceType() }, action) => {
    return state;
}

export default layoutReducer;