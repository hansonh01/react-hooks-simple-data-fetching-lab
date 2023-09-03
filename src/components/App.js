// create your App component here
import React,{ useState, useEffect} from 'react';

const url = 'https://dog.ceo/api/breeds/image/random';

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(()=>{
    fetch(url)
      .then(resp=>resp.json())
      .then(data=>{
        setDogImage(data.message)
        setIsLoading(false);
      })
  },[])

  return (
    <div>
      {isLoading ? (<p>Loading...</p>) : (
        <img src={dogImage} alt="A Random Dog"/>
      )}
    </div>
  )
}

export default App;