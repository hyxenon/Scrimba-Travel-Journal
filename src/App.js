import {Helmet} from 'react-helmet'
import './App.css';
import { Card } from './components/Card';
import {Header} from './components/Header'
import travelData from './data/travelData';

function App() {

  const data = travelData.map((item)=>{
      return <Card key={item.id} items={item}/>
  })
  return (
    <div className="App  flex justify-center">
      <Helmet>
        <title>Travel Journal</title>
        <meta name="description" content="Travel Journal Application" />
      </Helmet>

      <div className='w-[550px] h-[704px]'>
      <Header/>
      

      <div className='flex flex-col'>
          {data}
      </div>

      </div>
      
    </div>
  );
}

export default App;
