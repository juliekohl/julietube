import React from "react";
import config from "../config.json";
import Menu from "../src/components/Menu";
import Timeline from "../src/components/Timeline";
import Header from "../src/components/Header";
import Favorite from "../src/components/Favorite";
import Footer from "../src/components/Footer";
import { videoService } from "../src/services/videoService";

export default function HomePage() {
    const service = videoService();
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    const [playlists, setPlaylists] = React.useState({});

    React.useEffect(() => {
        service
            .getAllVideos()
            .then((dados) => {
                const newPlaylists = { ...playlists };

                dados.data.forEach((video) => {
                    if (!newPlaylists[video.playlist]) newPlaylists[video.playlist] = [];

                    newPlaylists[video.playlist] = [
                        video,
                        ...newPlaylists[video.playlist],
                    ];
                });
                setPlaylists(newPlaylists);
            });
    }, []);

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header />
                <Timeline searchValue={valorDoFiltro} playlists={playlists}>
                    Conteúdo
                </Timeline>
                <Favorite favorites={config.favorites} />
                <Footer />
            </div>
        </>
    );
}
