import Link from "next/link";
import styled from "styled-components";
import EmbedVideo from "../../src/components/Video/EmbedVideo";
import { useRouter } from "next/router";
import DarkModeSwitch from "../../src/components/Menu/components/DarkModeSwitch";

const StyledVideoContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 5px;
  margin: 8px;
  background-color: ${({ theme }) => theme.backgroundBase};
  .video {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 2px 8px;
    border-radius: 6px;
    background-color: ${({theme}) => theme.backgroundLevel1};
    color: ${({ theme }) => theme.textColorBase};
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px;
      a {
        text-decoration: none;
        color: ${({ theme }) => theme.textColorBase};
      }
    }
    span {
      font-size: 13px;
      text-align: left;
    }
    p {
      text-align: center;
      width: 100px;
      padding: 2px;
      border-radius: 32px;
      background-color: ${({ theme }) => theme.backgroundLevel2};
    }
  }
`;

export default function Video() {
    const router = useRouter();
    const { url, category } = router.query;

    return (
        <StyledVideoContainer>
            <div className="video">
                <header>
                    <Link href="/">Go back</Link>
                    <DarkModeSwitch/>
                </header>
                <EmbedVideo url={url} />

                <span>Category:</span>
                <p>{category}</p>
            </div>
        </StyledVideoContainer>
    );
}
