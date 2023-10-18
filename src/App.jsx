import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import './app.css';



const APIgato = `http://localhost:3000/videos/gato/1`

export default function App() {

    const [idDoVideo, setIdDoVideo] = useState(1)
    const [video, setVideo] = useState()
    const [videoGato, setVideoGato] = useState()    

    const [videoAtual, setVideoAtual] = useState(`http://localhost:3000/videos/cachorro/${idDoVideo}`)
    const [videoAtualGato, setVideoAtualGato] = useState(`http://localhost:3000/videos/gato/${idDoVideo}`)

    const proximoVideo = () => {
        setIdDoVideo(idDoVideo + 1)
        setVideoAtual(`http://localhost:3000/videos/cachorro/${idDoVideo + 1}`)
    }

    const proximoVideoGato = () => {
        setIdDoVideo(idDoVideo + 1)
        setVideoAtualGato(`http://localhost:3000/videos/gato/${idDoVideo + 1}`)
    }

    useEffect(() => {
        fetch(videoAtual).then(response => response.json())
            .then(data => {
                setVideo(data.video);
                console.log(data.video);
            }).catch(erro => console.log(erro))
    }, [proximoVideo]);

    useEffect(() => {
        fetch(videoAtualGato).then(response => response.json())
            .then(data => {
                setVideoGato(data.video);
                console.log(data.video);
            }).catch(erro => console.log(erro))
    }, [proximoVideoGato]);

    return (
        <div >
        <div style={{ fontFamily: 'Arial, sans-serif', display: 'flex', justifyContent: 'center', marginTop: 70,  border: 10, color: 'white' }}>
            <img src="src/e5d916201366e281798dd69ac5424bc24b495c84df810906db934bae8373798a-fotor-bg-remover-20230918201053.png"></img>
        </div>
        <div>
            <video autoPlay onEnded={proximoVideo} width={500} height={500} src={video} controls></video>
            <video autoPlay onEnded={proximoVideoGato} width={500} height={500} src={videoGato} controls></video>
            {/* <h1>deu certo: {idDoVideo}</h1> */}
        </div>
        </div>
    )
} 

