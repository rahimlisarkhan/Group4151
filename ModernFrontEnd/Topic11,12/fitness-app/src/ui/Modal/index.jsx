import React from "react";

function Modal({
  isOpen,
  onClose,
  header,
  headerTitle = "Title",
  classNameModalContent,
}) {
  return (
    <div
      className={`fixed transition-all w-full min-h-screen bg-opacity-75 bg-mainBlack z-50 opacity-100 flex justify-center items-center modalClose ${
        isOpen ? "fixed" : "hidden"
      }`}
    >
      <div
        className={`bg-mainWhite h-80 min-w-96 rounded-xl p-4 ${classNameModalContent}`}
      >
        {header && (
          <div className="flex justify-between items-center">
            <div className="text-xl font-medium">{headerTitle}</div>
            <div className="cursor-pointer" onClick={onClose}>
              x
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
