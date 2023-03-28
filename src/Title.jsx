const Title = ({text}) => {
    return (
        <div className="title">
            <h2>{text || 'Default title'}</h2>
            <div className="underline"></div>
        </div>
    )
}

export default Title;