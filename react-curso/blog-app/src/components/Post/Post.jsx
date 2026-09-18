function Post(props) {

    const {title} = props;

    return (
        <article>
            <h2>{title}</h2>

            <small>Leia em {props.readingTime} {props.readingTime === 1 ? "minuto" : "minutos"}</small>

            {props.children}
        </article>
    )
}

export default Post; 