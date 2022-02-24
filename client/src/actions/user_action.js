import axios from "axios";

import {
    LOGIN_USER
} from "./types";

export function loginUser(dataToSubmit) {
    const request = axios
        .post("/api/user/login", dataToSubmit)
        .then(response => {
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
    return {
        type: LOGIN_USER,
        payload: request
    };
} 