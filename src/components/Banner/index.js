import Styles from './Banner.module.css';

function Banner({image}) {
    return (
        <div
            className={Styles.banner}
            style={{backgroundImage: `url('/images/banner-${image}.png')`}}
        ></div>
    )
}
export default Banner;