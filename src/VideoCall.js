import { useState }from "react";
import { config, useClient, useMicrophoneAndCameraTracks, channelName} from "/settings.js"
import { Grid } from "@material-ui/core";
import { useState, useEffect } from "react";

export default function VideoCall(props){
    const{ setInCall } = props;
    const[users, setUsers] = useState([]);
    const[start, useStart] = useState(false);

    const client = useClient();
    const { ready, tracks } = useMicrophoneAndCameraTracks();
    
    useEffect(() => { 
        let init = async(name)=>{
           
        };
    }, [channelName,client,ready,tracks])

}