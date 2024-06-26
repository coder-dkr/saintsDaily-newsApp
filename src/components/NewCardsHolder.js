import React, { Component,useEffect ,useState,useContext} from 'react'
import NewsCard from './NewsCard'
import { CateContext } from '../contexts/CategoryContext'


export default function NewCardsHolder ()  {
    const [newsData, setnewsData] = useState()
        


    const [page, setpage] = useState(1)

    const [pageitemNum, setpageitemNum] = useState(12)

    const [sluglink, setsluglink] = useState('top-headlines?country=in&category=general&pageSize=12&page=1')


    const updateCategory = useContext(CateContext)

    useEffect(()=>{
        async function FetchData(){
        let linkee = `https://newsapi.org/v2/top-headlines?country=in&category=${updateCategory}&pageSize=12&page=${page}&apiKey=952f24549e434ae7a323bee25cfd9399`
          let a = await fetch(linkee).then(
                response => response.json()
            ).then(
                data => {
                    setnewsData(data.articles);
                    setpageitemNum(data.articles.length)
                    
                }
            )
            
            let slugpre = linkee.split('v2/')[1]
            setsluglink(slugpre.split('&apiKey')[0])
            console.log(sluglink)
        }
        FetchData()
    },[page,updateCategory,sluglink]);

 
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
    <div className="container d-flex justify-content-lg-between my-4">
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
