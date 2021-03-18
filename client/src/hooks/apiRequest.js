import axios from "axios"
const baseUrl = "http://localhost:3000/"

export function AddEvent(payload) {
    console.log(payload);
    return axios({
        method: "POST",
        url: `${baseUrl}create`,
        data: payload
    })
}

export function GetEvent() {
    return(dispatch, setState) => {
        axios({
            method: "GET",
            url: baseUrl
        })
            .then(data => {
                dispatch({
                    type: "GET_DATA",
                    payload: data.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}