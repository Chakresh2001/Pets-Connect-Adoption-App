

const DogsCard = ({_id,name,breed,age,location,price,handlePreviousClick,handleNextClick,currentPage}) => {

  


  
  return (
    <div>
      <h1>Dogs Data</h1>
      
        <div key={_id} style={{ border: "1px solid black", marginTop: "10px" }}>
          <p>{name}</p>
          <p>{breed}</p>
          <p>{age}</p>
          <p>{location}</p>
          <p>{price}</p>
          <button>Delete</button>
        </div>
     

      <div>
        <button onClick={handlePreviousClick} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={handleNextClick} disabled={currentPage==4}>
          Next
        </button>
      </div>
    </div>
  );
};

export default DogsCard;
