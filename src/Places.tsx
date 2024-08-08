import './App.css';
type Tplaces= {
    title : string,
    image: string
};
export default function Places({ title, image }: Tplaces){
    return(
    <>
       <div className="place">
       <h2>
           {title}
        </h2>
        <img className="photo1" src= {image} alt={title}></img>
        </div>
    </>
    )
}