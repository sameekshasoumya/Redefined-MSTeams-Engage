import { useEffect, useReducer, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getRequest, postRequest } from "./../../api_manager/apiReq";
import {
    BASE_URL,
    GET_CALL_ID,
    SAVE_CALL_ID,
} from "./../../api_manager/apiEndpt";
import io from "socket.io-client";
import Peer from "simple-peer";
import './ActionPage.scss';

import ActionPageHeader from './../Teams_UserInterface/ActionPage_Header';
import ActionPageFooter from './../Teams_UserInterface/ActionPage_Footer';
import Messenger from './../Teams_UserInterface/Messages';
import MeetingInfo from './../Teams_UserInterface/MeetingInfo';
import MessageListReducer from "../../reducer";
import Alert from "../Teams_UserInterface/Alert"; 

let peer = null;
const socket = io.connect("http://localhost:4000");
const initialState = [];

const ActionPage = () => {
    const history = useHistory();
    let { id } = useParams();
    const isAdmin = window.location.hash == "#init" ? true : false;
    const url = `${window.location.origin}${window.location.pathname}`;
    const uniqueid = `${window.location.pathname}`
    let alertTimeout = null;

    const [messageList, messageListReducer] = useReducer(
        MessageListReducer,
        initialState
    );

    const [streamObj, setStreamObj] = useState();
    const [screenCastStream, setScreenCastStream] = useState();
    const [meetInfoPopup, setMeetInfoPopup] = useState(false);
    const [isPresenting, setIsPresenting] = useState(false);
    const [isMessenger, setIsMessenger] = useState(false);
    const [messageAlert, setMessageAlert] = useState({});
    const [isAudio, setIsAudio] = useState(true);
    const [isVideo, setIsVideo] = useState(true);

    useEffect(() => {
        if (isAdmin) {
            setMeetInfoPopup(true);
        }
        initWebRTC();
        socket.on("code", (data) => {
            if (data.url === url) {
                peer.signal(data.code);
            }
        });
    }, []);

    const getRecieverCode = async () => {
        const response = await getRequest(`${BASE_URL}${GET_CALL_ID}/${id}`);
        if (response.code) {
            peer.signal(response.code);
        }
    };

    const initWebRTC = () => {
        navigator.mediaDevices
            .getUserMedia({
                video: true,
                audio: true,
            })
            .then((stream) => {

                let myvideo = document.getElementById("myvideo");
                 
                if("srcObject" in myvideo){
                    myvideo.srcObject = stream;
                } else{
                    myvideo.src = window.URI.createObjectURL(stream);
                }

                myvideo.play();

                setStreamObj(stream);

                peer = new Peer({
                    initiator: isAdmin,
                    trickle: false,
                    stream: stream,
                });

                if (!isAdmin) {
                    getRecieverCode();
                }

                peer.on("signal", async (data) => {
                    if (isAdmin) {
                        let payload = {
                            id,
                            signalData: data,
                        };
                        await postRequest(`${BASE_URL}${SAVE_CALL_ID}`, payload);
                    } else {
                        socket.emit("code", { code: data, url }, (cbData) => {
                            console.log("code sent");
                        });

                    }
                });

                peer.on("connect", () => {
                    // wait for 'connect' event before using the data channel
                });

                peer.on("data", (data) => {
                    clearTimeout(alertTimeout);
                    messageListReducer({
                        type: "addMessage",
                        payload: {
                            user: "Attendee",
                            msg: data.toString(),
                            time: Date.now(),
                        },
                    });

                    setMessageAlert({
                        alert: true,
                        isPopup: true,
                        payload: {
                            user: "Attendee",
                            msg: data.toString(),
                        },
                    });

                    alertTimeout = setTimeout(() => {
                        setMessageAlert({
                            ...messageAlert,
                            isPopup: false,
                            payload: {},
                        });
                    }, 10000);
                });

                peer.on("stream", (stream) => {
                    // got remote video stream, now let's show it in a video tag
                    let video = document.querySelector("video");

                    if ("srcObject" in video) {
                        video.srcObject = stream;
                    } else {
                        video.src = window.URL.createObjectURL(stream); // for older browsers
                    }

                    video.play();
                });

            })
            .catch(() => { });
    };

    const sendMsg = (msg) => {
        peer.send(msg);
        messageListReducer({
            type: "addMessage",
            payload: {
                user: "Yoy",
                msg: msg,
                time: Date.now(),
            },
        });
    };

    const screenShare = () => {
        navigator.mediaDevices
            .getDisplayMedia({ cursor: true })
            .then((screenStream) => {
                peer.replaceTrack(
                    streamObj.getVideoTracks()[0],
                    screenStream.getVideoTracks()[0],
                    streamObj
                );
                setScreenCastStream(screenStream);
                screenStream.getTracks()[0].onended = () => {
                    peer.replaceTrack(
                        screenStream.getVideoTracks()[0],
                        streamObj.getVideoTracks()[0],
                        streamObj
                    );
                };
                setIsPresenting(true);
            });
    };

    const stopScreenShare = () => {
        screenCastStream.getVideoTracks().forEach(function (track) {
            track.stop();
        });
        peer.replaceTrack(
            screenCastStream.getVideoTracks()[0],
            streamObj.getVideoTracks()[0],
            streamObj
        );
        setIsPresenting(false);
    };

    const toggleVideo = (value) => {
        streamObj.getVideoTracks()[0].enabled = value;
        setIsVideo(value);
    };


    const toggleAudio = (value) => {
        streamObj.getAudioTracks()[0].enabled = value;
        setIsAudio(value);
    };

    const disconnectCall = () => {
        peer.destroy();
        history.push("/");
        window.location.reload();
    };

    return (

        <div className="callpage-container">

            <video className="video-container" src="" controls></video>
            <video className="self-video" id="myvideo" src=""></video>

            <ActionPageHeader
                isMessenger={isMessenger}
                setIsMessenger={setIsMessenger}
                messageAlert={messageAlert}
                setMessageAlert={setMessageAlert}
            />

            <ActionPageFooter
                isPresenting={isPresenting}
                stopScreenShare={stopScreenShare}
                screenShare={screenShare}
                isAudio={isAudio}
                isVideo={isVideo}
                toggleAudio={toggleAudio}
                toggleVideo={toggleVideo}
                disconnectCall={disconnectCall}
            />

            {isAdmin && meetInfoPopup && (
                <MeetingInfo setMeetInfoPopup={setMeetInfoPopup} url={url} uniqueid={uniqueid}/>
            )}

            {isMessenger ? (
                <Messenger
                    setIsMessenger={setIsMessenger}
                    sendMsg={sendMsg}
                    messageList={messageList}
                />
            ) : (
                messageAlert.isPopup && <Alert messageAlert={messageAlert} />
            )}




        </div>
    )
}

export default ActionPage;