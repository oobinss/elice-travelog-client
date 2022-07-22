import AWS from 'aws-sdk'
import { useState } from 'react'

const region = process.env.REACT_APP_AWS_BUCKET_REGION
const bucketName = process.env.REACT_APP_AWS_BUCKET_NAME
const accessKeyId = process.env.REACT_APP_AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY

function S3(file) {
  const [progress, setProgress] = useState(0)
  const [selectedFile, setSelectedFile] = useState(null)
  const [showAlert, setShowAlert] = useState(false)
  AWS.config.update({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  })

  const myBucket = new AWS.S3({
    params: { Bucket: bucketName },
    region: region,
  })

  // const params = {
  //   Bucket: bucketName,
  //   key: 'upload/' + file.name,
  //   body: file,
  // }
  // return s3.putObject(params).promise()
  const handleFileInput = e => {
    const file = e.target.files[0]

    setProgress(0)
    setSelectedFile(e.target.files[0])
  }

  const uploadFile = file => {
    const params = {
      ACL: 'public-read',
      Body: file,
      Bucket: bucketName,
      Key: 'upload/' + file.name,
    }
    myBucket
      .putObject(params)
      .on('httpUploadProgress', evt => {
        setProgress(Math.round((evt.loaded / evt.total) * 100))
        setShowAlert(true)
        setTimeout(() => {
          setShowAlert(false)
          setSelectedFile(null)
        }, 3000)
      })
      .send(err => {
        if (err) console.log(err)
      })
  }

  return (
    <>
      <input type="file" onChange={handleFileInput} />
      {selectedFile ? (
        <button
          onClick={() => {
            uploadFile(selectedFile)
          }}
        >
          업로드
        </button>
      ) : null}
    </>
  )
}

export default S3
// require('dotenv').config();

// const buncketName = process.env.AWS_BUCKET_NAME;
// const region = process.env.AWS_BUCKET_REGION;
// const accessKeyId = process.env.AWS_ACCESS_KEY;
// const secretAccessKey = process.env.AWS_SECRET_KEY;

// const s3 = new S3({
//   region,
//   accessKeyId,
//   secretAccessKey,
// });

// // uplads a file to s3
// function uploadFile(file) {
//   const fileStream = fs.createReadStream(file.path);

//   const uploadParams = {
//     Bucket: buncketName,
//     Body: fileStream,
//     Key: file.filename,
//   };

//   return s3.upload(uploadParams).promise();
// }
// exports.uploadFile = uploadFile;
// // downloads a file from s3
// function getFileStream(fileKey) {
//   const downloadParmas = {
//     key: fileKey,
//     Bucket: buncketName,
//   };
//   return s3.getObject(downloadParmas).createReadStream();
// }
// exports.getFileStream = getFileStream;

// const s3 = new aws.S3({
//   region,
//   accessKeyId,
//   secretAccessKey,
// })
