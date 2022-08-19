
export const SubCard = ({text,value}) =>{
    return(
        <div className="sub-card flex-container">
            <div className="title flex-child">{text}</div>
            <div className="content flex-child">{value}</div>
        </div>
    )
} 