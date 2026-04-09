import Header from '../../components/Header';
import Styles from './Search.module.css';
import Footer from '../../components/Footer';
import VideoList from '../../components/VideoList';
import videos from '../../json/videos.json';
import Container from '../../components/Container';
import SearchVideoList from '../../components/SearchVideoList';
import ScrollToTopButton from '../../components/ScrollToTopButton';

function Search() {
  return (
      <>
      <ScrollToTopButton/>
    <Header/>
    <Container>
        <section className={Styles.search}>
           
           <SearchVideoList videos={videos}/>
        </section>
    </Container>
    <Footer/>
        </>
  );}
export default Search;