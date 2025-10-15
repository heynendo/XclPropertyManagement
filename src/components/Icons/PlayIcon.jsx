

export default function PlayIcon({color = "#FFFFFF", onClick}){
    return(
        <svg onClick={onClick} className="play-icon" xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 32 32">
            <path fill={color} d="M5.92 24.096q0 1.088.928 1.728.512.288 1.088.288.448 0 .896-.224l16.16-8.064q.48-.256.8-.736T26.08 16t-.288-1.056-.8-.736L8.832 6.144q-.448-.224-.896-.224-.544 0-1.088.288-.928.608-.928 1.728z"/>
        </svg>
    )
}