import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinners from './Spinners'
import PropTypes from 'prop-types'


export class News extends Component {
 

  static defaultProps= {
    country:"in",
    pageSize:8,
    category:'general'
  };
 
  static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
};
  
  
  constructor(){
    super()
    this.state={ 
      articles:[],
      loading:false,
      page:1
    }
  }
  
 async updateNews(){
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4f5ab8089d3841b0992f8b7e58d7da0f&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({
      loading:true
    })
    let data=await fetch(url)
    let parsedData=await data.json()
    console.log(parsedData);
    this.setState({
     articles:parsedData.articles,
     totalResults:parsedData.totalResults,
     loading:false
    })
 }

  async componentDidMount(){
    this.updateNews()
  }

   handlePreviousClick=async()=>{
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4f5ab8089d3841b0992f8b7e58d7da0f&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    // this.setState({
    //   loading:true
    // })
    // let data=await fetch(url)
    // let parsedData=await data.json()
    // console.log(parsedData);
 
    // this.setState({
    //   page:this.state.page-1,
    //   articles:parsedData.articles,
    //   loading:false
    // })
    this.setState({
      page:this.state.page-1
    })
    this.updateNews();
  }
  handleNextClick=async()=>{
     
      // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4f5ab8089d3841b0992f8b7e58d7da0f&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
      // this.setState({
      //   loading:true
      // })
      // let data=await fetch(url)
      // let parsedData=await data.json()
      // console.log(parsedData);
      
      // this.setState({
      //   page:this.state.page+1,
      //   articles:parsedData.articles,
      //   loading:false
      // })
      this.setState({
        page:this.state.page+1
      })
      this.updateNews();

  }
 
 
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'style={{margin: "38px 0px"}}>TODAY'S HEADLINE</h1>
               {this.state.loading &&   <Spinners/> }
                <div className="row  my-5">
                            {!this.state.loading && this.state.articles.map((element)=>{
                            return (
                              <div className="col-md-4"  key={element.url}>
                                
                              <NewsItem title={element.title} content={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                              </div>
                            )
                            })}
                    </div>   
                    <div className="container d-flex justify-content-between mb-3">
                    <button  disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; previous  </button>
                    <button disabled={Math.ceil(this.state.totalResults/this.props.pageSize)<this.state.page+1} type="button" className="btn btn-dark" onClick={this.handleNextClick}>next  &rarr;</button>
                      </div>   
      </div>
    )
  }
}

export default News

