export let addStudents = (data)=>({
    type: 'ADD_STUDENTS',
    payload: data
})



export let removeStudents = (id)=>({
  type: 'REMOVE_STUDENTS',
  payload: id
})

export let clearAll = ()=>({
  type: 'CLEAR_ALL',
  
})
