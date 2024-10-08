import { Storage } from '@google-cloud/storage';
import { Injectable } from '@nestjs/common';
import { IFilesServiceUpload } from './interfaces/files-service.interface';

@Injectable()
export class FilesService {
  async upload({ files }: IFilesServiceUpload): Promise<string[]> {
    console.log(files);
    const waitedFiles = [];
    waitedFiles[0] = await files[0];
    waitedFiles[1] = await files[1];

    console.log(waitedFiles);
    // 1. 파일을 클라우드 스토리지에 저장하는 로직
    // 1-1) 스토리지 셋팅하기
    const storage = new Storage({
      projectId: '',
      keyFilename: '',
    }).bucket('minki-practice-strorage1');

    // 1-2) 스토리지에 파일 올리기
    const result = await new Promise((resolve, reject) => {
      waitedFiles[0].createReadStream().pipe(
        storage
          .file(waitedFiles[0].filename)
          .createWriteStream()
          .on('finish', () => {
            resolve('성공');
          })
          .on('error', () => {
            reject('실패');
          }),
      );
    });

    console.log('파일 전송이 완료되었습니다');

    return ['끝', '끝'];
  }
}
