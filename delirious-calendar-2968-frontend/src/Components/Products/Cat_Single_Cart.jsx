import  "../../style/CatAdopt.css";

   export const ProductAddToCart=({image_url,id,cat_name,age ,breed ,gender, adoption_fee, location})=>{
       
       return <div className="singlecatcard">
        <img src={image_url} alt="0" />
        <h1>{id}</h1>

    </div>

   }
//    age ,breed ,gender, adoption_fee, location