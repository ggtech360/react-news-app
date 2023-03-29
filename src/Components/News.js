import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  apiKey = '3Kxwavgz31XWVHujMSAXhbq3eg65J8x2dt';

  static defaultProps = {
    category: "general",
    country: "us",
  };

  // Constructor/Base of News Item
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    };
  }

  // Fetch all the news from api

  async update() {
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await (await fetch(url)).json();
    this.setState({
      articles: data.articles,
      totalResults: data.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.update();
  }

  fetchMoreData = async ()=>{
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await (await fetch(url)).json();
    this.setState({
      articles: this.state.articles.concat(data.articles),
      totalResults: data.totalResults,
      loading: false
    });
  }


  // html render
  render() {
    return (
      // News Container
      <>
        {/* Heading */}
        <h2 className="text-center text-light" style={{ margin: "30px 0" }}>
          G-News24 - {this.props.title}
        </h2>

        {/* Loading Component */}
        {/* {this.state.loading && <Loading />} */}

        {/* NewsItems */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={!(this.state.articles.length > this.state.totalResults)}
          loader={<Loading/>}
        >
          <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title?element.title:""}
                      description={
                        element.description
                          ? element.description.slice(0, 56)
                          : ""
                      }
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://www.oyorooms.com/officialoyoblog/wp-content/themes/inframe/assets/images/no-thumbnail-medium.png"
                      }
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
      </>
    );
  }
}

export default News;
