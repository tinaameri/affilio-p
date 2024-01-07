import React, { createContext, useReducer } from "react";
import {
  DEMO,
  CONTACTUS,
  CONTACT,
  ESSENTIAL,
  ANALYTICAL,
  DECLINE,
  GDPRMODAL,
  SUCCESS
} from "@/constant/ActionTypes";
const ModalWithReducer = createContext({
  modalOpenState: {
    demoModalOpen: false,
    successModal: false,
    contactModalOpen: false,
    showModalGpdr: true,
    useCookie: {
      essential: true,
      analytics: true
    }
  },

  dispatch: () => {}
});
export { ModalWithReducer };
function reducer(state, action) {
  switch (action.type) {
    case DEMO:
      return {
        demoModalOpen: true,
        successModal: false,
        contactModalOpen: false,
        showModalGpdr: false
      };
      break;
    case SUCCESS:
      return {
        demoModalOpen: false,
        successModal: true,
        contactModalOpen: false,
        showModalGpdr: false
      };
      break;

    case CONTACTUS:
      return {
        demoModalOpen: false,
        successModal: false,

        contactModalOpen: true,
        showModalGpdr: false
      };
      break;
    case CONTACT:
      return {
        demoModalOpen: false,
        successModal: false,
        contactModalOpen: false,
        showModalGpdr: false
      };
      break;
    case GDPRMODAL:
      return {
        ...state,
        showModalGpdr: true
      };
      break;
    case ESSENTIAL:
      return {
        ...state,
        useCookie: {
          essential: !state.useCookie?.essential,
          analytics: !!state.useCookie?.analytics
        }
      };

      break;
    case ANALYTICAL:
      return {
        ...state,
        useCookie: {
          analytics: !state.useCookie?.analytics,
          essential: !!state.useCookie?.essential
        }
      };
      break;

    case "Close":
      return {
        demoModalOpen: false,
        successModal: false,
        contactModalOpen: false,
        showModalGpdr: false
      };
      break;

    default:
      break;
  }
}
export default function ModalWithReducerProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    demoModalOpen: false,
    successModal: false,
    contactModalOpen: false,
    showModalGpdr: false,
    useCookie: {
      essential: true,
      analytics: true
    }
  });
  return (
    <ModalWithReducer.Provider
      value={{ modalOpenState: state, dispatch: dispatch }}
    >
      {children}
    </ModalWithReducer.Provider>
  );
}
