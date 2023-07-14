import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinners from "./Spinners";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=> {
 
  const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  
        const [ articles, setarticles] = useState( [])
        const [loading, setloading] = useState(false)
        const [page, setpage] = useState(1)
        const [totalResults, settotalResults] = useState(0)
     

    
    
  

  const updateNews=async()=> {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}&page=${page}&pageSize=${props.pageSize}`;
    
      setloading(true) 
   
    let data = await fetch(url);
    props.setProgress(30)
    let parsedData = await data.json();
    props.setProgress(60)
    console.log(parsedData);
    
      setarticles(parsedData.articles) 
     settotalResults(parsedData.totalResults)
     setloading(false) 
  
    props.setProgress(100)
  }

  useEffect(() => {
    updateNews()
    document.title = `${capitalizeFirstLetter(
      props.category
    )}-News India`
    // eslint-disable-next-line
  }, [])
  


  // handlePreviousClick = async () => {
  //   this.setState({
  //     page: this.state.page - 1,
  //   });
  //   this.updateNews();
  // };
  // handleNextClick = async () => {
  //   this.setState({
  //     page: this.state.page + 1,
  //   });
  //   this.updateNews();
  // };

 const fetchMoreData=async()=>{
   
     setpage(page+1)
 
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}&page=${page+1   }&pageSize=${props.pageSize}`;
   
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setarticles(articles.concat(parsedData.articles)) 
    settotalResults(parsedData.totalResults)
    setloading(false)
 }

  
    return (
     <>
        <h1 className="text-center" style={{ margin: "38px 0px" ,marginTop:"90px"}}>
          Today's Top {capitalizeFirstLetter(props.category)} News
        </h1>
        {loading && <Spinners />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length<totalResults}
          loader={<Spinners/>}
        > 
         <div className="container my-3">
          <div className="row  my-5">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    content={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between mb-3">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; previous{" "}
          </button>
          <button
            disabled={
              Math.ceil(this.state.totalResults / this.props.pageSize) <
              this.state.page + 1
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            next &rarr;
          </button>
        </div> */}
      </>
    );
  
}

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
