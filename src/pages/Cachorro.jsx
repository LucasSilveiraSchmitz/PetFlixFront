import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'

const API = `http://localhost:3000/videos/cachorro/1`

export default function Cachorro() {

    const [idDoVideo, setIdDoVideo] = useState(0)
    const [video, setVideo] = useState()

    useEffect(() => {
        fetch(API).then(response => response.json())
            .then(data => {
                setVideo(data.video);
            }).catch(erro => console.log(erro))
    }, []);

    return (
        <div>
            <video width={500} height={500} src={video}></video>
            {/* <h1>deu certo: {idDoVideo}</h1> */}
        </div>
    )
} 