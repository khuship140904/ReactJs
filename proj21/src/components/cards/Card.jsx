



function Card({records}){
    return(
        <div id="rec_box">
            {records.map((next)=>(
                <div className="rec">
                    <strong>{next.name}</strong>
                    <strong>City:</strong><span>{next.address.city}</span>
                </div>
            ))}

        </div>
    )

}

export default Card