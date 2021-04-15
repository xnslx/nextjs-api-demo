import fs from 'fs';
import path from 'path'

function handler(req, res) {
    if(req.method === 'POST') {
        const email = req.body.email;
        const feedbackText = req.body.text;

        const newFeedback = {
            id: new Date().toISOString(),
            email:email,
            text: feedbackText,
        };
        console.log('newFeedback', newFeedback)
        const filePath = path.join(process.cwd(), 'data', 'feedback.json')
        console.log('filePath', filePath)
        const fileData = fs.readFileSync(filePath);
        console.log('fileData', fileData)
        const data = JSON.parse(fileData);
        console.log('data',data)
        data.push(newFeedback);
        fs.writeFileSync(filePath, JSON.stringify(data))
        res.status(201).json({message:'success', feedback: {}})
    } else {
        res.status(200).json({message: 'This works!'}) 
    }
};

export default handler;