

export default function HomeCard({title, body1, body2}){
    return(
        <div className="home-card">
            <h3 className="title">{title}</h3>
            <div className="body1">{body1}</div>
            <div className="body2">{body2}</div>
        </div>
    )
}