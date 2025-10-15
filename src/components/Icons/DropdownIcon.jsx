

export default function DropDownIcon({rotate}){
    return(
        <svg className="dropdown-icon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none"
        style={{transform: rotate ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
        ><path fill="#2a5389" fillRule="evenodd" d="M13.237 15.32a1.04 1.04 0 0 1-1.474 0l-5.208-5.208a1.042 1.042 0 1 1 1.473-1.474L12.5 13.11l4.472-4.472a1.042 1.042 0 1 1 1.473 1.474z" clipRule="evenodd"/></svg>
    )
}