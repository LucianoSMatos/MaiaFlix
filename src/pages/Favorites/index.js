import Styles from './Favorites.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Constainer from '../../components/Container';
import VideoList from '../../components/VideoList';
import { useFavoriteContext } from '../../contexts/Favorites';
import ScrollToTopButton from '../../components/ScrollToTopButton';


function Favorites() {
  const { favorites } = useFavoriteContext()
  return (
    <>
    <ScrollToTopButton/>
      <Header />
      <Constainer>
        <section className={Styles.favorites}>
          <h2>Meus Favoritos ❤</h2>
          {/* Aqui deve ser renderizado os cards dos vídeos favoritos */}
          <VideoList videos={favorites} />
        </section>

      </Constainer>
      <Footer />
    </>
  );
}
export default Favorites;