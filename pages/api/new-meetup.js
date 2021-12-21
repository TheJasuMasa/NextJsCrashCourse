//api/new-meetup

import MeetupDetail from "../../components/meetups/MeetupDetail";

function handler(req, res) {
    if (req.method === 'POST'){
        const data = req.body;
    }

    const { title, image, address, description } = data
}


export default handler;