
import { useSelector } from "react-redux";
import VideoCard from "../../components/videoCard/videoCard";
import './videosList.css'

function VideosList() {
    const currentVideos: [] = useSelector((state: any) => state.videoReducer)    
    return (
        <div className="videos-list-container">
            {
                currentVideos.length > 0 &&
                currentVideos.map((singleVideo: any) => {
                    return (
                        <VideoCard singleVideo={singleVideo} key={singleVideo.id.videoId}></VideoCard>
                    )
                })
            }
        </div>
    )
}
export default VideosList;