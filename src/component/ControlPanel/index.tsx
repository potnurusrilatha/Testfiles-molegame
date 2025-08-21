import React from 'react';

const ControlPanel = ({start, reset}) => {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <button data-testid="start-btn"
                onClick={start}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
            Start
      </button>
      <button data-testid="reset-btn"
                onClick={reset}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300">
            Reset
        </button>
    </div>
  );
}
export default ControlPanel;