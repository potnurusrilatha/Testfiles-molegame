import React from 'react';
import { ControlPanelProps } from '@/utils/types';

const ControlPanel = ({start, reset}: ControlPanelProps) => {
  return (
    <div data-testid="controlpanel"
     className="flex justify-center gap-4 mt-4">
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