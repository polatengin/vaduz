import React, { FunctionComponent } from 'react';
import { CloseIcon } from './Icons';

export const App: FunctionComponent = () => {

  const [ showMenu, setShowMenu ] = React.useState(true);
  const [ currentScreen, setCurrentScreen ] = React.useState<string>();

  const gotoPage = (pageName: string) => {
    setShowMenu(false);
    setCurrentScreen(pageName);
  };

  const hideMenu = () => {
    setShowMenu(true);
    setCurrentScreen(undefined);
  };

  return (
    <div className="w-screen h-screen bg-gray-200 p-4">
      <div className="w-full h-full rounded-2xl shadow-2xl bg-white p-4">
        <h1 className="flex justify-center text-xl">Math exercises for 3rd graders</h1>

        { showMenu &&
          <div className="flex flex-col gap-4 mt-4">
            <button className="py-4 bg-gray-200 rounded shadow">Two-Three digit mixed additions</button>
            <button className="py-4 bg-gray-200 rounded shadow">Two digit substractions</button>
            <button className="py-4 bg-gray-200 rounded shadow">Three digit substractions</button>
            <button className="py-4 bg-gray-200 rounded shadow">Two-Three digit mixed substractions</button>
          </div>
        }

        { !showMenu && <div className="flex flex-col h-full">
          <div className="flex">
            <div className="flex-grow self-center">{currentScreen}</div>
          </div>
          <div className="h-full">
          </div>
        </div> }
      </div>
    </div>
  );
};
