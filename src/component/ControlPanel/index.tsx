import React from "react";

interface ControlPanelProps {
  start: () => void;
  reset: () => void;
}

const ControlPanel = ({ start, reset }: ControlPanelProps) => {
  return (
    <div className="flex gap-4">
      <button
        data-testid="start-btn"
        onClick={start}
        className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
      >
        Start
      </button>

      <button
        data-testid="reset-btn"
        onClick={reset}
        className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
      >
        Reset
      </button>
    </div>
  );
};

export default ControlPanel;
