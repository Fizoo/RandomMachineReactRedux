import React from 'react';
import Machine from "./Machine";
import {connect} from "react-redux";
import {RandomActionCreatorRandom} from "./redux/redux-store";



   let mapStateToProps = (state) => {
        return {
            randomReducer: ({
                index: state.index,
                data: state.data,
                style: state.style
            })
        }
    }
    let mapDispatchToProps = (dispatch) => {
        return {
            randomFunction: (i) => {
                dispatch(RandomActionCreatorRandom(i))
            }
        }
    }
    export default connect(mapStateToProps,mapDispatchToProps)(Machine)









