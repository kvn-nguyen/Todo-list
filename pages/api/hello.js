// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method == 'GET') {
     res.status(200).json({ person: ['John Doe', 'Jonathan Mai', 'Kevin Nguyen'] })
  } else {
    if (req.body.userInput == '') {
      res.status(400).json({status: 400, message: 'USER INPUT WAS BLANK'})
    }
    res.status(200).json({status: 200, message: 'SUCCESS'});
  }
}
