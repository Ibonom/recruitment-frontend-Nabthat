import { createContext, useEffect, useState } from "react";
import dataJSON from "../data/data.json";

export interface textObject {
  id: number;
  text: string;
}

interface IstateContext {
  radio: string;
  data: textObject[];
  setRadio: React.Dispatch<React.SetStateAction<string>>;
  showData: textObject[];
  validationFunction: (object: textObject, add: boolean) => void;
  randomAddFunction: () => void;
  randomSwitchFunction: () => void;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  reset: () => void;
}

const defaultState = {
  radio: "",
  data: [],
  setRadio: () => {},
  showData: [],
  setShowData: () => {},
  validationFunction: (object: textObject, add: boolean) => {},
  randomAddFunction: () => {},
  randomSwitchFunction: () => {},
  name: "",
  setName: () => {},
  reset: () => {},
};

const DataContext = createContext<IstateContext>(defaultState);

export const DataProvider: React.FC<{
  children: JSX.Element | JSX.Element[];
}> = ({ children }) => {
  const [ids] = useState<number[]>(
    dataJSON.filter((x) => x.id > 2).map((x) => x.id)
  );
  const [radio, setTextRadio] = useState<string>("");
  const [showData, setShowData] = useState<textObject[]>([]);
  const [possibleRandom, setPossibleRandom] = useState<number[]>(ids);
  const [name, setName] = useState<string>("");

  useEffect(() => {
    if (possibleRandom.length === 0) {
      setPossibleRandom(ids);
    }
  }, [possibleRandom]);

  const validationFunction = (object: textObject, add: boolean) => {
    if (add) {
      if (showData.indexOf(object) === -1) {
        setShowData((prevState) => [...prevState, object]);
      }
    } else {
      setShowData([object]);
      setPossibleRandom(ids);
    }
  };
  const randomAddFunction = () => {
    if (possibleRandom.length > 0) {
      let randomNumber =
        possibleRandom[Math.floor(Math.random() * possibleRandom.length)];
      if (showData.indexOf(dataJSON[randomNumber - 1]) === -1) {
        setShowData((prevState) => [...prevState, dataJSON[randomNumber - 1]]);
        setPossibleRandom((prevState) =>
          prevState.filter((number) => number !== randomNumber)
        );
      }
    }
  };
  const randomSwitchFunction = () => {
    setPossibleRandom(ids);
    if (possibleRandom.length > 0) {
      let randomNumber =
        possibleRandom[Math.floor(Math.random() * possibleRandom.length)];
      setPossibleRandom((prevState) =>
        prevState.filter((number) => number !== randomNumber)
      );
      setShowData([dataJSON[randomNumber - 1]]);
    }
  };
  const reset = () => {
    setShowData([]);
    setName("");
    setPossibleRandom(ids);
  };

  return (
    <DataContext.Provider
      value={{
        radio,
        data: dataJSON,
        setRadio: setTextRadio,
        showData,
        validationFunction,
        randomAddFunction,
        randomSwitchFunction,
        name,
        setName,
        reset,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
