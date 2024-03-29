import types from "../actions/actionTypes";
import actions from "../actions/actions";

describe('Actions', () => {
    const todoText = 'A todo';
  
    it('Should create an action to add a todo', () => {
      const expectedAction = {
        type: types.SUBMIT_TODO,
        id: 1,
        text: todoText,
      };
  
      expect(actions.submitTodo(todoText)).toEqual(expectedAction);
    });
  
    it('Should create an action to delete a todo', () => {
      const expectedAction = {
        type: types.DELETE_TODO,
        id: 1,
      };
  
      expect(actions.deleteTodo(1)).toEqual(expectedAction);
    });
  
    it('Should create an action to undelete a todo', () => {
      const expectedAction = {
        type: types.UNDELETE_TODO,
      };
  
      expect(actions.undeleteTodo()).toEqual(expectedAction);
    });
  
    it('Should create an action to register an input change', () => {
      const expectedAction = {
        type: types.INPUT_CHANGED,
        inputText: todoText,
      };
  
      expect(actions.inputChanged(todoText)).toEqual(expectedAction);
    });
  });