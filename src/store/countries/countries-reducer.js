export const SET_COUNTRIES = '@@country/SET_COUNTRIES'
export const SET_LOADING= '@@country/SET_LOADING'
export const SET_ERROR = '@@country/SET_ERROR'



const initialState = {
  status:'idle',
  error:null,
  list:[]
}

export const countriesReducer =(state =initialState, action) =>{
  switch (action.type){
    case SET_COUNTRIES : return {...state, status: 'received',list: action.payload}
    case SET_LOADING : return {...state, status: 'loading', error:null}
    case SET_ERROR : return {...state, status: 'rejected',error: action.payload}

    default :return state
  }
}






//actions

export const setCountries=(countries)=>({
  type:SET_COUNTRIES,
  payload:countries
})

export const setLoading=()=>({
  type:SET_LOADING,
})

export const setError=(err)=>({
  type:SET_ERROR,
  payload:err
})

///thunk

export const loadCountries =() => (dispatch,getState,{client,api})=>{
    dispatch(setLoading())
    client.get(api.ALL_COUNTRIES)
      .then(({data}) => dispatch(setCountries(data)))
      .catch((err) => dispatch(setError(err.message)))

}