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
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  reset: () => void;
  randomFunction: (add: boolean) => void;
  warningShow: boolean;
  setWarningShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultState = {
  radio: "",
  data: [],
  setRadio: () => {},
  showData: [],
  setShowData: () => {},
  validationFunction: (object: textObject, add: boolean) => {},
  name: "",
  setName: () => {},
  reset: () => {},
  randomFunction: () => {},
  warningShow: false,
  setWarningShow: () => {},
};

const DataContext = createContext<IstateContext>(defaultState);

export const DataProvider: React.FC<{
  children: JSX.Element | JSX.Element[];
}> = ({ children }) => {
  const [ids] = useState<number[]>(
    dataJSON.filter((x) => x.id > 2).map((x) => x.id)
  );
  const [radio, setRadio] = useState<string>("");
  const [showData, setShowData] = useState<textObject[]>([]);
  const [possibleRandom, setPossibleRandom] = useState<number[]>(ids);
  const [name, setName] = useState<string>("");
  const [warningShow, setWarningShow] = useState<boolean>(false);

  useEffect(() => {
    if (possibleRandom.length === 0) {
      setPossibleRandom(ids);
    }
  }, [possibleRandom]);

  const validationFunction = (object: textObject, add: boolean) => {
    if (add) {
      if (showData.indexOf(object) === -1) {
        setShowData((prevState) => [...prevState, object]);
        setWarningShow(false);
      } else {
        setWarningShow(true);
      }
    } else {
      if (showData.length === 1) {
        if (showData.indexOf(object) === -1) {
          setShowData([object]);
          setWarningShow(false);
        } else {
          setWarningShow(true);
        }
      } else {
        setShowData([object]);
        setWarningShow(false);
        setPossibleRandom(ids);
      }
    }
  };

  const randomFunction = (add: boolean) => {
    if (!add) {
      setPossibleRandom(ids);
    }
    if (possibleRandom.length > 0) {
      let randomNumber =
        possibleRandom[Math.floor(Math.random() * possibleRandom.length)];
      setPossibleRandom((prevState) =>
        prevState.filter((number) => number !== randomNumber)
      );
      if (add) {
        if (showData.indexOf(dataJSON[randomNumber - 1]) === -1) {
          setShowData((prevState) => [
            ...prevState,
            dataJSON[randomNumber - 1],
          ]);
          setWarningShow(false);
        } else {
          setWarningShow(true);
        }
      } else {
        setShowData([dataJSON[randomNumber - 1]]);
        setWarningShow(false);
      }
      setPossibleRandom((prevState) =>
        prevState.filter((number) => number !== randomNumber)
      );
    }
  };

  const reset = () => {
    setShowData([]);
    setName("");
    setPossibleRandom(ids);
    setWarningShow(false);
  };

  return (
    <DataContext.Provider
      value={{
        radio,
        data: dataJSON,
        setRadio,
        showData,
        validationFunction,
        name,
        setName,
        reset,
        randomFunction,
        warningShow,
        setWarningShow,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
