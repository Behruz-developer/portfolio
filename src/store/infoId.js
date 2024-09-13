import { create } from "zustand";
import { devtools } from "zustand/middleware";

const infoStore = create()(
  devtools((set) => ({
    search: '', 
    setSearch: (data) => set({ search: data }), 
  }))
);

export default infoStore;
