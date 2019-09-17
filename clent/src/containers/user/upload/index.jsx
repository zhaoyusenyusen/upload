import React, { Component } from 'react'
import { Upload, Icon, message } from 'antd';
import './upload.css';
class Avatar extends Component {
    state = {
        imageUrl:  null,
        loading: false
    };
   beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}
    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
          const {imgUrl} = info.file.response;
            console.log(info.file.response)
          this.setState({
              imageUrl: imgUrl
          })
        }
    };

  render() {
      const uploadButton = (
          <div>
              <Icon type={this.state.loading ? 'loading' : 'plus'} />
              <div className="ant-upload-text">Upload</div>
          </div>
      );
      const { imageUrl } = this.state;
    return (
      <div>
       <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="/user/upload"
        beforeUpload={this.beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
      </div>
    )
  }
}
export default Avatar;