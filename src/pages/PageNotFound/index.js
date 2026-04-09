import Header from '../../components/Header';
import Footer from '../../components/Footer';
import error404 from './erro404.png';
import Styles from './PageNotFound.module.css';

function PageNotFound() {
  return (
 <>
    <Header />
    <section className={Styles.container}>
      <h2>404 - Page Not Found</h2>
      <img src={error404} alt='Page Not Found'/>
     </section>
    <Footer/>
 </>
  );
}       
export default PageNotFound ;