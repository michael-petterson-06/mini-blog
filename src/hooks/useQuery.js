import { useLocation } from "react-router-dom";
import { useMemo } from "react";


export function useQuery() {
    const { search } = useLocation();

    // essa função só é executada quando o search for alterado
   return  useMemo(() => new URLSearchParams(search), [search]);
}
