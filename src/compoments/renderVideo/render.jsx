import ReactPlayer from 'react-player';

export default function RenderVideo({ url }) {
    return (
        <div className="h-110 w-full overflow-hidden rounded-lg bg-black shadow-lg">
            <ReactPlayer 
                src={url} 
                width='100%' 
                height='100%' 
                controls={true} 
            />
        </div>
    );
}