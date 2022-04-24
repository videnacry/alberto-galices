const getBiggerZoomClass = (pActualZoomClass:string):string => {
    switch (pActualZoomClass) {
        case '' : return 'zoom-1'
        case 'zoom-1' : return 'zoom-2'
        default : return 'zoom-3'
    }
}
const getSmallerZoomClass = (pActualZoomClass:string):string => {
    switch (pActualZoomClass) {
        case 'zoom-3' : return 'zoom-2'
        case 'zoom-2' : return 'zoom-1'
        default : return ''
    }
}

const getZoomClass = {getBiggerZoomClass, getSmallerZoomClass}

export default getZoomClass