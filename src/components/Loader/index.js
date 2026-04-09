import Styles from './Loader.module.css'


function Loader(){
    return(
        <div className={Styles.container}>
            <div className={Styles.loader}></div>
        </div>
    );
}

export default Loader;