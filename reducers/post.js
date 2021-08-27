export const initialState = {
    posts: [],
    postDetail: null,
    loading: false,
}

/* Redux Actions */
// 상수로 설정, 오류 발생 시 찾기가 편함
export const GET_POST_REQUEST = "GET_POST_REQUEST";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";
export const GET_POST_FAIL = "GET_POST_FAIL";

export const GET_POST = () => {
    return{
        type: GET_POST_REQUEST,
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_POST_REQUEST:
            return{
                ...state,
                posts:[...state.posts, ...action.data],
                loading: true,
            }
        case GET_POST_SUCCESS:
            return{
                ...state,
                loading: false,
            }
        case GET_POST_FAIL:
            return{
                ...state,
                loading: false,
            }
    }
}