import React,{useState,useEffect} from 'react';
import { jsPDF } from "jspdf";
import './App.css';
import Header from './components/Header';
import Items from './components/Items';

function App() {
  const [items,setItems] = useState([])
  useEffect(()=>{
    getData()
  },[])

  const getData = async ()=>{
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`)
    .then(res=>res.json())
    .then(data=>{
      // console.log(data.articles)
      setItems(data.articles)
    })
  }

  const generate = ()=>{
    const doc = new jsPDF();
    doc.text(10,60,`Liste of news`)
    items.forEach(e=>{
      doc.addPage()
      doc.text(10,60,`Title: ${e.title}`)
      doc.text(10,80,`Description: ${e.description}`)
      doc.text(10,100,`Url: ${e.url}`)
      doc.text(10,120,`Image url: ${e.urlToImage}`)
    })
    doc.save("a4.pdf")
  }

  return (
    <div className="App">
      <Header generate={generate} />
      <Items items={items} />
    </div>
  );
}

export default App;
