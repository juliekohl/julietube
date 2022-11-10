export default function IframeVideo({ url }) {
    return (
        <div>
            <iframe
                width="560" height="315"
                src={`https://www.youtube.com/embed/${url}`}
                frameBorder="0"
                allow="accelerometer; autoplay;encrypted-media;"
                title='YouTube video player'
            ></iframe>
        </div>
    );
}
