const initialState = {
    images: [],
    isImagesLoading: false,
    imagesError: null,
};
export default function (state= initialState, action ) {
    switch (action.type) {
        case 'GET_ALL_IMAGE_REQUEST':
            return {
                ...state,
                isImagesLoading: true,
            };
        case 'GET_ALL_IMAGE_RESPONSE':
            return {
                ...state,
                images: action.images,
                isImagesLoading: false
            };
        case 'GET_ALL_IMAGE_ERROR':
            return {
                ...state,
                isImagesLoading: false,
                imagesError: action.message,
            };
        default: return state;
    }
}