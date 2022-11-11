import styled from "styled-components";

export default function Timeline({searchValue, ...props}) {
    const playlistNames = Object.keys(props.playlists);

    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos
                                .filter((video) => {
                                    const titleNormalized = video.title.toLowerCase();
                                    const searchValueNormalized = searchValue.toLowerCase();
                                    return titleNormalized.includes(searchValueNormalized)
                                }).map((video) => {
                                    return (
                                        <a key={video.url} href={video.url}>
                                            <img src={video.thumb} />
                                            <span>{video.title}</span>
                                        </a>
                                    );

                                })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}

export const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  h2 {
    margin-bottom: 16px;
    font-size: 16px;
    text-transform: capitalize;
  }
  img {
    width: 100%;
    max-width: 210px;
    height: auto;
    font-weight: 500;
    object-fit: cover;
    aspect-ratio: 16/9;
  }
  section {
    width: 100%;
    padding: 16px;
    overflow: hidden;
    div {
      
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      grid-gap: 16px;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          display: block;
          padding-top: 8px;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;
