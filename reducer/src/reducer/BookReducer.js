import { v4 as uuidv4 } from "uuid";
import React from "react";

// action: {
//     type: "Switch value",
//     payload: {
//         title: '',
//         author: '',
//         id:'',
//     }
// }

// funkcija koja sluzi za neku custom logiku
//uvek se koristi switch loop unutar njega

export const BookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        {
          id: uuidv4(),
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    case "REMOVE BOOK":
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};
