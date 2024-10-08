import { Storage } from '@google-cloud/storage';
import { Injectable } from '@nestjs/common';
import { IFilesServiceUpload } from './interfaces/files-service.interface';

@Injectable()
export class FilesService {
  async upload({ files }: IFilesServiceUpload): Promise<string[]> {
    const waitedFiles = await Promise.all(files);

    // 1. 파일을 클라우드 스토리지에 저장하는 로직
    // 1-1) 스토리지 셋팅하기
    const storage = new Storage({
      projectId: '',
      keyFilename: '',
    }).bucket('minki-practice-strorage1');

    // 1-2) 스토리지에 파일 올리기
    const bucket = 'minki-practice-strorage1';

    const results = await Promise.all(
      waitedFiles.map((el) => {
        return new Promise<string>((resolve, reject) => {
          el.createReadStream().pipe(
            storage
              .file(el.filename)
              .createWriteStream()
              .on('finish', () => {
                resolve(`${bucket}/${el.filename}`);
              })
              .on('error', () => {
                reject('실패');
              }),
          );
        });
      }),
    );

    console.log('파일 전송이 완료되었습니다');

    return results;
  }
}
