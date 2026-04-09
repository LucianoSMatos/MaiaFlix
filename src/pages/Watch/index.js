import Styles from './Watch.module.css'
import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import videos from '../../json/videos.json'
import PageNotFound from '../PageNotFound'
import { useParams } from 'react-router-dom';
import ScrollToTopButton from '../../components/ScrollToTopButton';


function Wach() {
  const Params = useParams();
  const video = videos.find((video)=> {return video.id === Params.id})
  if(!video){return <PageNotFound/>}
  
    return(
      <>
      <ScrollToTopButton/>
        <Header/>
        <Container>
        <section className={Styles.Watch}>
            <h1>Assistir</h1>
            <iframe 
              width="854" height="480" 
              src={`https://www.youtube.com/embed/${video.id}`}
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; 
              autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>

        </Container>
        <Footer/>

      </>
    )
}
export default Wach;