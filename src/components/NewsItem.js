import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
        <div className = 'my-3'>
            <div className="card" >
            <span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger' style={{left:"90%", zIndex:"1"}}>{source}</span>
                <img className="card-img-top" src={!imageUrl?"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/CDZ2CTVIGALGFRBKXJO6F5D5DA.jpg&w=1440":imageUrl} alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className='card-text'><small className='text-muted'>By {!author?"Unknown":author} on {date}</small></p>
                <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
            </div>
        </div>
    )
  }
}

export default NewsItem
