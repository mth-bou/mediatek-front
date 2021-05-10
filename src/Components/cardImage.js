import React, { useState, useEffect } from "react";

export default function CardImage(props) {
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

        <div className="col-4">
            {visibility &&
                <div className="card">
                    <img className="card-img-top" src={data.url} alt={data.description} />
                    <div className="card-body">
                        <h5 className="card-text">{data.name}</h5>
                    </div>
                </div>
            }
        </div>

    )
}
