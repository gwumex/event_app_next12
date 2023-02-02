import path from 'path'
import fs from 'fs'

function buildPath (){
    console.log(process.cwd())
    return path.join(process.cwd(), 'data', 'data.json')
}

function extractData (filePath) {
    const jsonData = fs.readFileSync(filePath)
    const data = JSON.parse(jsonData)
    return data;
}


export default function handler (req, res) {
    const {method} = req;
    const filePath = buildPath();
    const {events_categories, allEvents} = extractData(filePath)
    if(!allEvents){
        return res.json({
            status: 404,
            message: 'Events data not Found'
        })
    }

    if(method === 'POST'){
        const {email, eventId } = req.body
        const newAllEvents = allEvents.map(ev => {
            if(ev.id === eventId) {
                if(ev.emails_registered.includes(email)){
                    res.status(409).json({
                        message: 'This email has been registered'
                    })
                    return ev;
                    }
                    return{
                        ...ev, emails_registered:[...ev.emails_registered, email]
                    }
                }
                return ev;
        });
         
        fs.writeFileSync(filePath, JSON.stringify({events_categories, allEvents: newAllEvents}))
        res.status(200).json({
            message: `You has been registered Email: ${email} in evnt ${eventId}`
        })
    }
} 