const initialState = {
    
    students:[],
    totalStudents:0
 }

 const students = (state = initialState, action) => {
     switch (action.type) {
         case 'ADD_STUDENTS':
        let newStudents =[]

          if(!state.students){
            newStudents = [action.payload]
          }else{
            newStudents = [...state.students, action.payload]
          }
            return {...state,
              students:newStudents,
              totalStudents:newStudents.length
              }
              
      case 'REMOVE_STUDENTS':
        // console.log(action.payload)
        let newItem = state.students.filter((item) => item.id !== action.payload)
              return {...state, students:newItem, totalStudents:newItem.length}

              case 'CLEAR_ALL':
              return {...state, students:[], totalStudents:0}
         default:
             return state;
     }
     
 }
 
 export default students;