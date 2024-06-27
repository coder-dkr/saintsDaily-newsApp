import React, { Component,useEffect ,useState,useContext} from 'react'
import NewsCard from './NewsCard'
import { CateContext } from '../contexts/CategoryContext'
import { ApiKeyContext } from '../contexts/ApiKeyContext'


export default function NewCardsHolder ()  {
    const [newsData, setnewsData] = useState()
        
    const [page, setpage] = useState(1)
    
    const [pageitemNum, setpageitemNum] = useState(12)
    
    const ApiKeyed = useContext(ApiKeyContext)
    const updateCategory = useContext(CateContext) || 'null'

    useEffect(()=>{
        async function FetchData(){
        let linkee = `https://newsapi.org/v2/top-headlines?country=in&category=${updateCategory}&pageSize=12&page=${page}&apiKey=${ApiKeyed}`
          let a = await fetch(linkee).then(
                response => response.json()
            ).then(
                data => {
                    setnewsData(data.articles);
                  
                    
                }
            )
            
        }
        FetchData()
    },[page,updateCategory,ApiKeyed]);

 
    return (
      <>
    <div className=" d-flex justify-content-center flex-wrap">

      {typeof newsData!=="undefined" ?
       newsData.map((news,i)=>(
          <NewsCard key={i} tonewsurl={news.url} newsimagesrc={news.urlToImage} newstitle={news.title} newstext={news.description} />
      )) : <>
        <img src="loading.gif" className='my-4 '/>
        

            </> 
         }

    </div>
    <div className="container w-100 d-flex gap-4 justify-content-lg-between my-4">
    <button onClick={()=>{
        setpage(page-1)
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
          });
    }} type="button" class="btn btn-dark" disabled={page === 0}>Previous</button>
    <button onClick={()=>{
        setpage(page+1);
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
          });
        }} type="button" class="btn btn-dark" disabled={pageitemNum === 1} >Next</button>
    </div>

      </>
    )
  
}
