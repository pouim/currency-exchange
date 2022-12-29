import Toastify from "toastify-js";
import { PRIMARY_COLOR, WARNING_COLOR } from "../../themes/constants";
import { MessageType } from "./types";

/**
 * @function showMessage
 * @param { string } message
 * @param { MessageType } type
 * @returns { void }
 */
export const showMessage = (message: string, type: MessageType): void => {
  Toastify({
    text: message,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "bottom",
    position: "left",
    backgroundColor: type === "SUCCESS" ? PRIMARY_COLOR : WARNING_COLOR,
    stopOnFocus: true, // Prevents dismissing of toast on hover
  }).showToast();
};