import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title, description, imgurl, newsUrl, author, date}= this.props;

        return (
            <div className='container my-3 '>
                {/* style={{width: "18rem"}} */}
                <div className="card" >
                    <img src={imgurl} className="card-img-top " alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Continue to read</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem