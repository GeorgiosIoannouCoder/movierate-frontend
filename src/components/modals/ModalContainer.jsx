import React from "react";

export default function ModalContainer({
  visible,
  ignoreContainer,
  children,
  onClose,
}) {
  const handleClick = (e) => {
    if (e.target.id === "modal-container") {
      onClose && onClose();
    }
  };

  const renderChildren = () => {
    if (ignoreContainer) {
      return children;
    }

    return (
      <div className="dark:bg-primary bg-custom-gray rounded w-full md:w-[45rem] h-full md:h-[40rem] overflow-auto p-2 custom-scroll-bar">
        {children}
      </div>
    );
  };

  if (!visible) return null;
  return (
    <div
      onClick={handleClick}
      id="modal-container"
      className="fixed inset-0 dark:bg-custom-gray dark:bg-opacity-50 bg-primary bg-opacity-50 backdrop-blur-sm flex items-center justify-center"
    >
      {renderChildren()}
    </div>
  );
}
