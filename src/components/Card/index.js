import { Link } from 'react-router-dom';
import { useFavoriteContext } from '../../contexts/Favorites';
import Styles from './Card.module.css'
import iconHeartWhite from './favorite.png'
import iconHeartRed from './unfavorite.png'


function Card({id}){
    const {favorites, addFavorite} = useFavoriteContext()
    const isFavorite = favorites.some((fav)=> fav.id === id)
    const icone = isFavorite ? iconHeartRed : iconHeartWhite 


    return(
        <section className={Styles.card}>
           <Link to={`watch/${id}`}>
          
            <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt='capa' className={Styles.capa}/>
            </Link> 
            <figure className={Styles.icon}>

                <img src={icone} alt='Icon'
                onClick={()=> addFavorite({id})}
                />
            </figure>
        </section>
    );
}
export default Card ;