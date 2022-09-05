class ImageUploader {
  async upload(file) {
    // POST에 추가해야 하는 데이터
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'docs_upload_example_us_preset');
    // fetch로 url 만들고 POST할 데이터 전송
    const result = await fetch(
      'https://api.cloudinary.com/v1_1/demo/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    // 완료되면 result 값을 json으로 변환
    return await result.json();
  }
}

export default ImageUploader;