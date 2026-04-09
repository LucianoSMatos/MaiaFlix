import { createContext, useState, useContext } from "react";


export const FavoritesContext = createContext()
FavoritesContext.displayName = "MyFavorites"

export default function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([])

    return (
        <FavoritesContext.Provider value={{ favorites, setFavorites }}>
            {children}
        </FavoritesContext.Provider>
    )
}

//hook personalizado para usar o contexto de favoritos
export function useFavoriteContext() {
    const { favorites, setFavorites } = useContext(FavoritesContext)
    function addFavorite(newFavorite) {
        const repeateFavorite = favorites.some((item) => item.id === newFavorite.id)
        let newList = [...favorites]
        if (!repeateFavorite) {
            newList.push(newFavorite)
            return setFavorites(newList)
        }
        //se for repetido, remove da lista
        newList = newList.filter((fav) => fav.id !== newFavorite.id)
        return setFavorites(newList)
    }
    return { favorites, addFavorite }
}