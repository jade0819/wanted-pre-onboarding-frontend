import React from "react";

export default function Button({ title, onDisabled }) {
  return (
    <button
      className="disabled:bg-gray-400"
      type="submit"
      disabled={onDisabled}
    >
      {title}
    </button>
  );
}
