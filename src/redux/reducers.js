// Initial state with an empty tasks array
const initialState = {
  tasks: [],
};

// reducer function to handle task related actions
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload], // new task to the taskks array
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task, index) => index !== action.payload), // remove task by id
      };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map(
          (task, index) =>
            index === action.payload.id ? action.payload.updatedTask : task // update task by id
        ),
      };
    default:
      return state; // return current state if no state matches
  }
};

// ecprting the task reducer
export default taskReducer;
