import React, { Component } from 'react';
import $ from 'jquery';

class MainFileUpload extends Component {

    //파일 저장및 이름 폼 변경
    componentDidMount() {
        var fileTarget = $('.filebox');
        let _this = this;
        //file을 변경하거나 삽입했다면 이함수 발생
        fileTarget.on('change', function(){
            // 값이 변경되면 
            if(window.FileReader){ 
                var filename = $(this)[0].childNodes[1].files[0].name;
                var file = $(this)[0].childNodes[1].files[0]
                //파일 저장
                _this.props.saveFile(file);
            }
            // 추출한 파일명 삽입 
            $(".upload-name").val(filename);
        });
    }

    render() {
        return (
            <div className="text-right">
                <input className="upload-name" value="파일선택" disabled="disabled" />
                <span className="filebox">
                    <label htmlFor="ex_file">업로드</label>
                    <input type="file" id="ex_file" />
                </span>
            </div>
        )
    }
}

export default MainFileUpload;