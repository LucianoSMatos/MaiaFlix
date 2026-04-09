import Styles from './Container.module.css';

function Container({ children }) {
    return (
        <section className={Styles.container}>
            {children}
        </section>
    );
}
export default Container;
