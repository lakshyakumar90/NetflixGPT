const InfoVideo = ({infoVideo}) => {
    const firstTrailer = infoVideo?.find(video => video.type === "Trailer");
    if (!firstTrailer) return null;
    return (
        <div className="p-8 rounded-2xl mb-8">
                <div key={firstTrailer.id} className="aspect-video w-full">
                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${firstTrailer.key}?autoplay=1&loop=1&playlist=${firstTrailer.key}`}
                        title={firstTrailer.name}
                        allow="accelerometer; autoplay; loop; muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
        </div>
    )
}

export default InfoVideo;