import { useEffect, createContext, useContext,useState } from "react";

const DoubtContext = createContext();
const useDoubtContext = () => useContext(DoubtContext);

function DoubtsProvider({ children }) {
    const [doubtTitle, setDoubtTitle] = useState("");
    const [doubtDesc, setDoubtDesc] = useState("");
    const [tag, setTag] = useState("");
    const [doubtList, setDoubtList] = useState([])

    return (
        <DoubtContext.Provider
          value={{doubtTitle, setDoubtTitle,doubtDesc, setDoubtDesc,tag, setTag,doubtList, setDoubtList}}>
            {children}
          </DoubtContext.Provider>)


    }


export { useDoubtContext, DoubtsProvider };