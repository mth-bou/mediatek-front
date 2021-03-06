import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function CardImage(props) {
    const [id, setId] = useState(props.image.id);
    const [name, setName] = useState(props.image.name);
    const [image, setImage] = useState(props.image.image);
    const [description, setDescription] = useState(props.image.description);
    const [visibility, setVisibility] = useState(props.image.visibility);
    const [keywords, setKeywords] = useState(props.image.keywords);
    const [publishedAt, setPublishedAt] = useState(props.image.publishedAt);
    const [format, setFormat] = useState(props.image.format);
    const [archived, setArchived] = useState(props.image.archived);
    const [copyright, setCopyright] = useState(props.image.copyright);

    return (

        <div>
            <div style={{textAlign: 'center'}} className="card">
                <div>
                    <img style={{maxHeight: 300}} className="card-img-top" src={`data:image/jpeg;base64,${image}`}
                         alt={description}/>
                </div>

                <div className="card-body">
                    <h5 className="card-text">{name}</h5>
                </div>
                <div>
                    <p>{description}</p>
                </div>
                <Link to={{
                    pathname: "/image/" + id,
                    aboutProps: {
                        image: props.image
                    }
                }}>Voir plus</Link>
            </div>
        </div>

    )
}
