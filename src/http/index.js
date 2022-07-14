import axios from "axios";

const $req = axios.create({
    baseURL: "https://test-task-j.herokuapp.com/data"
})
export {
    
    $req
}
