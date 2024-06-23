import React, { Component,useEffect ,useState,useContext} from 'react'
import NewsCard from './NewsCard'
import { CateContext } from '../contexts/CategoryContext'


export default function NewCardsHolder ()  {
    const [newsData, setnewsData] = useState([
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": "CHIP Online Deutschland",
        "title": "Sparkasse verrät den Termin: Neues deutsches Bezahlsystem startet in wenigen Tagen - CHIP Online Deutschland",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiZ2h0dHBzOi8vd3d3LmNoaXAuZGUvbmV3cy9OZXVlcy1kZXV0c2NoZXMtQmV6YWhsc3lzdGVtLVNwYXJrYXNzZS12ZXJyYWV0LWRlbi1TdGFydC1UZXJtaW5fMTg1MzAxMjI4Lmh0bWzSAQA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-06-22T10:23:40Z",
        "content": null
        },
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": "inside digital",
        "title": "80 Euro Strafgebühr? Jetzt müssen Bankkunden aufpassen - inside digital",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiWmh0dHBzOi8vd3d3Lmluc2lkZS1kaWdpdGFsLmRlL25ld3MvODAtZXVyby1zdHJhZmdlYnVlaHItamV0enQtbXVlc3Nlbi1iYW5ra3VuZGVuLWF1ZnBhc3NlbtIBXmh0dHBzOi8vd3d3Lmluc2lkZS1kaWdpdGFsLmRlL25ld3MvODAtZXVyby1zdHJhZmdlYnVlaHItamV0enQtbXVlc3Nlbi1iYW5ra3VuZGVuLWF1ZnBhc3Nlbi9hbXA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-06-22T09:58:00Z",
        "content": null
        },
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": "WELT Nachrichtensender",
        "title": "WAR IN UKRAINE: Mega ammunition order for Rheinmetall! \"Enormous scope!\" Artillery shells - WELT Nachrichtensender",
        "description": null,
        "url": "https://news.google.com/rss/articles/CCAiC3hUdzhBaC04WU9JmAEB?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-06-22T07:45:02Z",
        "content": null
        },
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": "WELT",
        "title": "Der Börsen-Podcast: Trouble bei Trade Republic – der Chef Christian Hecker stellt sich eurem Ärger - WELT",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMipQFodHRwczovL3d3dy53ZWx0LmRlL3BvZGNhc3RzL2FsbGVzLWF1Zi1ha3RpZW4vYXJ0aWNsZTI1MjE0MTkzOC9EZXItQm9lcnNlbi1Qb2RjYXN0LVRyb3VibGUtYmVpLVRyYWRlLVJlcHVibGljLWRlci1DaGVmLUNocmlzdGlhbi1IZWNrZXItc3RlbGx0LXNpY2gtZXVyZW0tQWVyZ2VyLmh0bWzSAQA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-06-22T07:24:32Z",
        "content": null
        },
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": "Handelsblatt ",
        "title": "Chipkonzern: Nvidia verliert Spitzenplatz an der Börse – Aktie verliert über drei Prozent - Handelsblatt ",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMinAFodHRwczovL3d3dy5oYW5kZWxzYmxhdHQuY29tL2ZpbmFuemVuL21hZXJrdGUvYWt0aWVuL2NoaXBrb256ZXJuLW52aWRpYS12ZXJsaWVydC1zcGl0emVucGxhdHotYW4tZGVyLWJvZXJzZS1ha3RpZS12ZXJsaWVydC11ZWJlci1kcmVpLXByb3plbnQvMTAwMDQ3MDUwLmh0bWzSAQA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-06-22T07:17:17Z",
        "content": null
        },
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": "CHIP Online Deutschland",
        "title": "Günstige E-Bike-Schnäppchen: Restbestände werden wegen Insolvenz verkauft - CHIP Online Deutschland",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiYmh0dHBzOi8vd3d3LmNoaXAuZGUvbmV3cy9TY2huYWVwcGNoZW4tbmFjaC1JbnNvbHZlbnotdm9uLUUtQmlrZS1IZXJzdGVsbGVyLW1vZWdsaWNoXzE4NTMxODgwOS5odG1s0gEA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-06-22T07:11:22Z",
        "content": null
        },
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": "Business Insider Deutschland",
        "title": "BMW storniert Batteriezellen-Auftrag in Milliardenhöhe bei Northvolt - Business Insider Deutschland",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMifmh0dHBzOi8vd3d3LmJ1c2luZXNzaW5zaWRlci5kZS93aXJ0c2NoYWZ0LzItbWlsbGlhcmRlbi1hdWZ0cmFnLWdlcGxhdHp0LWJtdy1zdG9ybmllcnQtYmF0dGVyaWV6ZWxsZW4tcHJvZHVrdGlvbi1iZWktbm9ydGh2b2x0L9IBAA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-06-22T06:37:38Z",
        "content": null
        },
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": "CHIP Online Deutschland",
        "title": "McDonald's neue KI wird zur Lachnummer: 26 mal Chicken Nuggets für zwei Frauen - CHIP Online Deutschland",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMipgFodHRwczovL3d3dy5jaGlwLmRlL25ld3Mva3VlbnN0bGljaGUtaW50ZWxsaWdlbnovbWNkb25hbGQtcy1uZXVlLWtpLXdpcmQtenVyLWxhY2hudW1tZXItMjYtbWFsLWNoaWNrZW4tbnVnZ2V0cy1mdWVyLTItZnJhdWVuX2M4ZDMxNWIyLWNkMmQtNDcwZi04MDViLWQ3OWNkMmIxMjk5ZC5odG1s0gEA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-06-22T06:32:00Z",
        "content": null
        },
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": "WirtschaftsWoche",
        "title": "SMA Solar: Bilanzkosmetik ist immer ein Warnsignal - WirtschaftsWoche",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMihwFodHRwczovL3d3dy53aXdvLmRlL215L3VudGVybmVobWVuL2VuZXJnaWUvc29sYXJicmFuY2hlLWRlci1mYWxsLXNtYS1zb2xhci16ZWlndC1iaWxhbnprb3NtZXRpay1pc3QtaW1tZXItZWluLXdhcm5zaWduYWwtLzI5ODYxMjgyLmh0bWzSAQA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-06-22T06:25:08Z",
        "content": null
        },
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": "WELT",
        "title": "Hugo Boss holt wegen „geopolitischer Spannungen“ Produktion nach Europa zurück - WELT",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiggFodHRwczovL3d3dy53ZWx0LmRlL3dpcnRzY2hhZnQvYXJ0aWNsZTI1MjE0ODY4Ni9IdWdvLUJvc3MtaG9sdC13ZWdlbi1nZW9wb2xpdGlzY2hlci1TcGFubnVuZ2VuLVByb2R1a3Rpb24tbmFjaC1FdXJvcGEtenVydWVjay5odG1s0gEA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-06-22T06:02:37Z",
        "content": null
        },
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": "CHIP Online Deutschland",
        "title": "Regale bei Aldi bleiben leer: Beliebtes Mineralwasser aktuell kaum noch verfügbar - CHIP Online Deutschland",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMib2h0dHBzOi8vd3d3LmNoaXAuZGUvbmV3cy9BbGRpLUt1bmRlbi12b3ItbGVlcmVuLVJlZ2FsZW4tQmVsaWVidGVzLU1pbmVyYWx3YXNzZXItZmVobHQtaW0tQW5nZWJvdF8xODUzMzIwMzcuaHRtbNIBAA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-06-22T04:51:00Z",
        "content": null
        },
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": "hna.de",
        "title": "Fisch-Rückruf ausgeweitet: Durchfall und Erbrechen drohen - hna.de",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMigwFodHRwczovL3d3dy5obmEuZGUvdmVyYnJhdWNoZXIvbGlzdGVyaWVuLWR1cmNoZmFsbC1lcmJyZWNoZW4td2FybnVuZy11bGFuLWZpc2NoLXJ1ZWNrcnVmLWF1c2dld2VpdGV0LXNhaWJsaW5nLXByb2R1a3QtOTMxNDEwODguaHRtbNIBAA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-06-22T02:51:00Z",
        "content": null
        },
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": "Merkur.de",
        "title": "Deutsches Mode-Unternehmen ist insolvent: 290 Mitarbeiter betroffen - Merkur.de",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMic2h0dHBzOi8vd3d3Lm1lcmt1ci5kZS93aXJ0c2NoYWZ0L3VudGVybmVobWVuLWluc29sdmVudC1pbnNvbHZlbnotcGxlaXRld2VsbGUtcGxlaXRlLWRldXRzY2hlcy1tb2RlLXpyLTkzMTM5NDU2Lmh0bWzSAQA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-06-22T02:50:00Z",
        "content": null
        },
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": "t-online",
        "title": "Tesla-Herausforderer Tisker wohl nicht mehr zu retten – Liquidation droht - t-online",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMijwFodHRwczovL3d3dy50LW9ubGluZS5kZS9maW5hbnplbi9ha3R1ZWxsZXMvd2lydHNjaGFmdC9pZF8xMDA0MzI0MjIvdGVzbGEtaGVyYXVzZm9yZGVyZXItdGlza2VyLXdvaGwtbmljaHQtbWVoci16dS1yZXR0ZW4tbGlxdWlkYXRpb24tZHJvaHQuaHRtbNIBAA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-06-22T00:42:32Z",
        "content": null
        },
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": "Telepolis",
        "title": "Preiskrieg mit China: Verliert Europa auch bei E-Auto-Batterien den Anschluss? - Telepolis",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMie2h0dHBzOi8vd3d3LnRlbGVwb2xpcy5kZS9mZWF0dXJlcy9QcmVpc2tyaWVnLW1pdC1DaGluYS1WZXJsaWVydC1FdXJvcGEtYXVjaC1iZWktRS1BdXRvLUJhdHRlcmllbi1kZW4tQW5zY2hsdXNzLTk3NzMwODUuaHRtbNIBAA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-06-21T22:00:00Z",
        "content": null
        },
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": "Karlsruhe Insider",
        "title": "Weltweit größter Versandhändler aus Baden-Württemberg insolvent - Karlsruhe Insider",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMifmh0dHBzOi8vd3d3LmthcmxzcnVoZS1pbnNpZGVyLmRlL2JhZGVuLXd1ZXJ0dGVtYmVyZy93ZWx0d2VpdC1ncm9lc3N0ZXItdmVyc2FuZGhhZW5kbGVyLWF1cy1iYWRlbi13dWVydHRlbWJlcmctaW5zb2x2ZW50LTE5NTQ0NNIBAA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-06-21T20:50:27Z",
        "content": null
        },
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": "finanzen.net",
        "title": "NVIDIA-Aktie & Co. ziehen weiter an: Jim Cramer rät zu Gewinnmitnahmen bei KI-Aktien - finanzen.net",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMilwFodHRwczovL3d3dy5maW5hbnplbi5uZXQvbmFjaHJpY2h0L2FrdGllbi9raS1yYXVzY2gtaGFlbHQtYW4tbnZpZGlhLWFrdGllLWNvLXppZWhlbi13ZWl0ZXItYW4tamltLWNyYW1lci1yYWV0LXp1LWdld2lubm1pdG5haG1lbi1iZWkta2ktYWt0aWVuLTEzNjExNjg10gGKAWh0dHBzOi8vd3d3LmZpbmFuemVuLm5ldC9hbXAva2ktcmF1c2NoLWhhZWx0LWFuLW52aWRpYS1ha3RpZS1jby16aWVoZW4td2VpdGVyLWFuLWppbS1jcmFtZXItcmFldC16dS1nZXdpbm5taXRuYWhtZW4tYmVpLWtpLWFrdGllbi0xMzYxMTY4NQ?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-06-21T20:36:00Z",
        "content": null
        },
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": "n-tv NACHRICHTEN",
        "title": "Sorgen um Tech-Sektor wachsen: Wall Street lässt zum Hexensabbat Federn - n-tv.de - n-tv NACHRICHTEN",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiXWh0dHBzOi8vd3d3Lm4tdHYuZGUvd2lydHNjaGFmdC9XYWxsLVN0cmVldC1sYWVzc3QtenVtLUhleGVuc2FiYmF0LUZlZGVybi1hcnRpY2xlMjUwMzQxNzYuaHRtbNIBAA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-06-21T20:35:00Z",
        "content": null
        },
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": "GIGA",
        "title": "Preiswert bei Amazon: Wer bei Aldi einkauft, der benötigt bald dieses Gerät - GIGA",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiZWh0dHBzOi8vd3d3LmdpZ2EuZGUvbmV3cy9wcmVpc3dlcnQtYmVpLWFtYXpvbi13ZXItYmVpLWFsZGktZWlua2F1ZnQtZGVyLWJlbm9ldGlndC1iYWxkLWRpZXNlcy1nZXJhZXQv0gEA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-06-21T19:00:42Z",
        "content": null
        },
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": "Notebookcheck.com",
        "title": "Weder Apple Intelligence noch Screen Sharing oder iPhone Mirroring in der EU - Notebookcheck.com",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMieGh0dHBzOi8vd3d3Lm5vdGVib29rY2hlY2suY29tL1dlZGVyLUFwcGxlLUludGVsbGlnZW5jZS1ub2NoLVNjcmVlbi1TaGFyaW5nLW9kZXItaVBob25lLU1pcnJvcmluZy1pbi1kZXItRVUuODUwNzQyLjAuaHRtbNIBAA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-06-21T18:16:00Z",
        "content": null
        }
        ]
        )


    const [page, setpage] = useState(1)

    const [pageitemNum, setpageitemNum] = useState(12)

    const [sluglink, setsluglink] = useState('top-headlines?country=in&category=general&pageSize=12&page=1')


    const updateCategory = useContext(CateContext)

    // useEffect(()=>{
    //     async function FetchData(){
    //     let linkee = `https://newsapi.org/v2/top-headlines?country=in&category=${updateCategory}&pageSize=12&page=${page}&apiKey=952f24549e434ae7a323bee25cfd9399`
    //       let a = await fetch(linkee).then(
    //             response => response.json()
    //         ).then(
    //             data => {
    //                 setnewsData(data.articles);
    //                 setpageitemNum(data.articles.length)
                    
    //             }
    //         )
            
    //         let slugpre = linkee.split('v2/')[1]
    //         setsluglink(slugpre.split('&apiKey')[0])
    //         console.log(sluglink)
    //     }
    //     FetchData()
    // },[page,updateCategory,sluglink]);

 
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
