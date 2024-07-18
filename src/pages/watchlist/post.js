const Posta= (props) => {
    const {review} = props
    return (
        <div className="post">
          <div className="posta">
                <h3 classname="nan" style={{
                    color:"beige",
                    fontFamily:"Times roman",
                    marginBottom:"10px",
                    fontSize:"25px"
                }}>By: @{review.usename}</h3>
                <p>{review.review}</p>
            </div>
        </div>
    );
}
 
export default Posta;