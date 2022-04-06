import {AiFillStar} from 'react-icons/ai';
import "./movie.scss"


export default function Movie({img,title,star,date,des}) {
    const truncateString =(title)=>{
        if(title.length > 15){
            return title.slice(0,15)+"...";
        }else{
            return title;
        }
    }
  return (
    <div className="movie">
        <div className="movie__container">
            <img src={img} alt="" />
            <div className="title">
                <h2>{truncateString(title)}</h2>
                <div className="date_and_star">
                    <span className="date">{date}</span>
                    <span className="star">
                        <AiFillStar className='star-icon'/>
                        {star}</span>
                </div>
            </div>
        </div>
        <div className="movie__overlay">
            <p>{des}</p>
        </div>
       
    </div>
  )
}
