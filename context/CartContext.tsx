"use client";

import { createContext, useState, useContext } from "react";

type DataType = {
  id: number;
  name: string;
  price: number;
  img_path: string;
};

type DataValuesType = {
  data: DataType[];
  setData: (data: DataType[]) => void;
};

const defaultProvider: DataValuesType = {
  data: [],
  setData: () => [],
};

const DataContext = createContext(defaultProvider);

export function useDataContext() {
  return useContext(DataContext);
}

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<DataType[]>([]);

  const value = {
    data,
    setData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
