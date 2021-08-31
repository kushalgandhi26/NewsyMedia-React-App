import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, sourceName } = props;
    return (
        <div className="my-3">
            <div className="card">
                <img src={imageUrl ? imageUrl : "https://rundellconstruction.com/wp-content/themes/realestate-7/images/no-image.png"}
                    className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}<span className="badge rounded-pill bg-danger mx-1">{sourceName}</span></h5>
                    <p className="card-text">{description}</p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    <p className="card-text my-1"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
