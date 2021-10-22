import VideoItem from "./VideoItem";

export default function Video(){
   return (
        <div className="container mx-auto px-10 2xl:px-0 pb-16">
            <div className="text-bold text-4xl text-gray-800 mb-5"><b>Videos</b> </div>

            <VideoItem 
                video="https://www.youtube.com/embed/r9jwGansp1E"
            />
        </div>
    );
}