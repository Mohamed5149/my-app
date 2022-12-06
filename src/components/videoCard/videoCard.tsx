import './videoCard.css'

function VideoCard(singleVideo: any) {    
    return (
        <div className="video-card-container">
            <div className="video-card-container-preview">
                <img className="video-card-container-preview-img" src={singleVideo.singleVideo.snippet.thumbnails.default.url} alt="video-preview" />
            </div>
            <div className="video-card-container-text">
                <label className="video-card-container-text-header">{singleVideo.singleVideo.snippet.title}</label>
                <label className="video-card-container-text-details">{singleVideo.singleVideo.snippet.channelTitle} . 54M views . 1 year ago</label>
                <p className="video-card-container-text-desc">{singleVideo.singleVideo.snippet.description}</p>
            </div>
        </div>
    )

}
export default VideoCard;