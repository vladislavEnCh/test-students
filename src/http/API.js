import {  $req} from "./index";

export const getData = async (page=1, size=10,search='',sortBy,sortDir=1) => {

    const {data} = await $req.get('/', {
        params: {
            page: page,
            size,
            search,
            sortBy,
            sortDir
        }
    })
    return data
}
