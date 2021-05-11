import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CardImage(props) {
    const [id, setId] = useState(props.image.id);
    const [name, setName] = useState(props.image.name);
    const [url, setUrl] = useState(props.image.url);
    const [description, setDescription] = useState(props.image.description);
    const [visibility, setVisibility] = useState(props.image.visible);
    const [keywords, setKeywords] = useState(props.image.keywords);
    const [publishedAt, setPublishedAt] = useState(props.image.publishedAt);
    const [format, setFormat] = useState(props.image.format);
    const [archived, setArchived] = useState(props.image.archived);
    const [copyright, setCopyright] = useState(props.image.copyright);

    const data = {
        id: props.image.id,
        name: name,
        url: url,
        description: description,
        visible: visibility,
        keywords: keywords,
        publishedAt: publishedAt,
        format: format,
        archived: archived,
        copyright: copyright
    }

    return (

        <div>
            {visibility &&
                <div className="card">
                    <img className="card-img-top" src={data.url} alt={data.description} />
                    <div className="card-body">
                        <h5 className="card-text">{data.name}</h5>
                    </div>
                    <Link to={{
                        pathname: "/image/" + id,
                        aboutProps: {
                            image: props.image
                        }
                    }}>  Voir plus  </Link>
                </div>
            }
        </div>

    )
}
