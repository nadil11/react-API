import Card from 'react-bootstrap/Card';

function CardUI({data}) {

  const {strMeal,strCategoryThumb,strMealThumb} = data

  return (
        <Card style={{ width: '18rem',padding:"10px",}}>
          <Card.Img variant="top" src={strCategoryThumb || strMealThumb}/>
          <Card.Body>
            <Card.Title>{strMeal}</Card.Title>
          </Card.Body>
        </Card>
  );
}

export default CardUI;