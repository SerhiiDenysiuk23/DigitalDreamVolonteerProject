import style from './Paginator.module.scss'
type MyProps = {
    Next: () => void;
    Prew: () => void;
    dots: JSX.Element[] | null

}

const Paginator: React.FC<MyProps> = ({ Next, Prew, dots }) => {

    return (
        <div className={style.container}>
            <img onClick={Prew} src="/assets/MiddleSliderImages/arts/Arrow.png" alt="" />
            <ul className={style.dots} >
                {dots}
            </ul>
            <img onClick={Next} className={style.right} src="/assets/MiddleSliderImages/arts/Arrow.png" alt="" />
        </div>

    )
}



export default Paginator;