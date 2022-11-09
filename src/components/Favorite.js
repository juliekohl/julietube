import styled from "styled-components";

export default function Favorite (props) {
    const favoriteNames = Object.keys(props.favorites);

    return(
        <StyledFavorites>
            {favoriteNames.map((favoriteName) => {
                const videos = props.favorites[favoriteName];
                return (
                    <section>
                        <h2>
                            {favoriteName}
                        </h2>
                        <div>
                            {videos.map( (video)=>{
                                    return(
                                        <a href={video.url}>
                                            <img src={video.thumb}/>
                                            <span>{video.title}</span>
                                        </a>
                                    )
                                }
                            )}
                        </div>
                    </section>
                )
            })}
        </StyledFavorites>
    )
}

export const StyledFavorites = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 105px;
    height: auto;
    border-radius: 50%;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding: 8px 0 0 10px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;
