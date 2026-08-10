/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import logo from '../../assets/images/logos/logo.png';
import React from "react";
interface ImageProps {
    url: string;
}

export const Images = (props: ImageProps) => {
    const [image, setImage] = useState(logo);
    // const [isLoadingImg, setIsLoadingImage] = useState<boolean>(true);
    useEffect(() => {
        const imageIntanse =new Image;
        if (!imageIntanse) {
            return;
        }

        imageIntanse. = props.url;
        // console.log(imageIntanse.on)
        // @ts-ignore
        imageIntanse?.onLoad((data,) => {
            setImage(props.url);
            // setIsLoadingImage(false)
        })
        // @ts-ignore
        imageIntanse.onError = () => {
            // setIsLoadingImage(false);
        };

        // 4. Cleanup to prevent memory leaks if component unmounts mid-load
        return () => {
            // @ts-ignore

            imageIntanse.onLoad = null;
            // @ts-ignore
            imageIntanse.onError = null;
        };

    }, [props.url, image])

    return <img src={image} alt={props.url} />
}
