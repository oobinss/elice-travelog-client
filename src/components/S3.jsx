import AWS from 'aws-sdk';
<<<<<<< HEAD
import { useState } from 'react';
=======
>>>>>>> 5d2ae1f9ce382623f3e532551e93d38f94a276e0

const region = process.env.REACT_APP_AWS_BUCKET_REGION;
const bucketName = process.env.REACT_APP_AWS_BUCKET_NAME;
const accessKeyId = process.env.REACT_APP_AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;

<<<<<<< HEAD
//S3에 이미지 업로드 되는지 테스트
function S3(file) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileKey, setFileKey] = useState('');
  AWS.config.update({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  });

  const myBucket = new AWS.S3({
    params: { Bucket: bucketName },
    region: region,
  });

  const handleFileInput = e => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const uploadFile = file => {
    const params = {
      ACL: 'public-read',
      Body: file,
      Bucket: bucketName,
      Key: 'upload/' + file.name,
    };
    myBucket
      .putObject(params)
      .on('httpUploadProgress', () => {
        setTimeout(() => {
          setSelectedFile(null);
        }, 3000);
        setFileKey(`${params.Key}`);
      })
      .send(err => {
        if (err) alert(err);
      });
  };
  const getFile = fileKey => {
    const params = {
      key: fileKey,
      Bucket: bucketName,
    };
    return myBucket.getObject(params);
  };

  return (
    <>
      <input type="file" onChange={handleFileInput} />
      {fileKey}
      {selectedFile ? (
        <button
          onClick={() => {
            uploadFile(selectedFile);
          }}
        >
          업로드
        </button>
      ) : null}
      <img src="img/avatar.jpg" />
      <img src="https://elice-react-project-team1.s3.ap-northeast-2.amazonaws.com/upload/default.png" />
      {console.log(fileKey)}
    </>
  );
}

export default S3;
=======
AWS.config.update({
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
});
const myBucket = new AWS.S3({
  params: { Bucket: bucketName },
  region: region,
});

export function S3Upload(file) {
  const params = {
    ACL: 'public-read',
    Body: file,
    Bucket: bucketName,
    Key: `upload/${file.name}`,
  };
  myBucket
    .putObject(params)
    .on('httpUploadProgress')
    .send((err, data) => {
      if (err) alert(err);
    });
}

export function S3getFileURL(fileKey) {
  const params = {
    Bucket: bucketName,
    Key: fileKey,
  };
  const url = myBucket.getSignedUrl('getObject', params);
  return url;
}

export function S3deleteObject(fileKey) {
  myBucket.deleteObject('deleteObject', {
    Bucket: bucketName,
    Key: fileKey,
  });
}
>>>>>>> 5d2ae1f9ce382623f3e532551e93d38f94a276e0
