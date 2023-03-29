import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div>
        <div className="card bg-transparent position-relative shadow text-light my-2">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <span className="position-absolute translate-middle badge rounded bg-success" style={{left: '90%', top: '10px', zIndex: '1'}}>
    {source}
  </span>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}......
            </p>
            <p className="card-text"><small className="text-secondary">By {author?author:'Unknown'} at {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-sm btn-outline-light">
              Read More...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
