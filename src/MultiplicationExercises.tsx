import React, { FunctionComponent, useEffect, useState } from 'react';

type QuestionItem = {
  i: number;
  a: number;
  b: number;
  c: number;
  border: string
}

export const MultiplicationExercises: FunctionComponent = () => {

  const [ checked, setChecked ] = useState(false);

  const [questions, setQuestions] = useState<QuestionItem[]>([]);

  useEffect(() => {
    setQuestions(refresh());
  }, []);

  const refresh = () => {
    const temp = [];
    for (let i = 1; i <= 12; i++) {
      temp.push({ i: i, a: Math.floor(Math.random() * 10), b: Math.floor(Math.random() * 10), c: 0, border: "" });
    }
    return temp;
  };

  const update = (item: QuestionItem, updated: string) => {
    if (updated === "") {
      updated = "0";
    }
    const temp = [...questions];
    temp.filter(q => q.i === item.i)[0].c = parseInt(updated);
    setQuestions(temp);
  };

  return (
    <>
      <div className="grid h-5/6 grid-cols-3">
        {questions.map(item => {
          return (
            <div key={item.i} className="flex flex-col items-center">
              <p>{item.a}</p>
              <p>{item.b}</p>
              <p>x-----</p>
              <p><input type="number" inputMode="numeric" min={0} max={100} maxLength={2} className={`border outline-0 w-14 text-center ${item.border}`} value={item.c} onFocus={(e) => e.target.select()} onChange={(e) => { update(item, e.target.value) }} /></p>
              { checked && item.border === "border-red-500" &&
              <p className="text-gray-500 text-sm">🤦 👉 {item.a * item.b}</p>
              }
              { checked && item.border === "border-green-500" &&
              <p className="text-gray-500 text-sm">🥳 💯</p>
              }
            </div>
          );
        })}
      </div>
      <div className="flex">
        { !checked &&
          <button className="py-4 flex-grow bg-gray-200 rounded shadow" onClick={() => {
            const temp = [...questions];
            temp.forEach(item => {
              if (item.a * item.b !== item.c) {
                item.border = "border-red-500";
              } else {
                item.border = "border-green-500";
              }
            });
            setChecked(true);

            setQuestions(temp);
          }}>Check answers</button>
        }
        { checked &&
          <button className="py-4 flex-grow bg-gray-200 rounded shadow" onClick={() => {
            setChecked(false);

            setQuestions(refresh());
          }}>New questions</button>
        }
      </div>
    </>
  );
};
