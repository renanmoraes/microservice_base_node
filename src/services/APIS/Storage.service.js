/* eslint-disable no-console */
import ApiRequest from '../ApiRequest.service';

class StorageService extends ApiRequest {

    constructor() {
        super();
    }

    getSignedUrl(filename, bucket, path, isPublic = false) {
        return this.post(`${this.config.apis.storage}/generate_signed_url`, {
            file    : filename,
            bucket  : bucket,
            path    : path,
            isPublic: isPublic
        }).then(res => {
            return res.data;
        });
    }

    upload(file, name, bucket, path, isPublic = false) {

        console.log(bucket, path);

        let uploadData = null;

        return this.getSignedUrl(name, bucket, path, isPublic)
            .then(res => {
                uploadData = res;

                return this.put(uploadData.uploadUrl, file, uploadData.headers);
            })
            .then(() => {
                return uploadData.publicUrl;
            });
    }
}

export default new StorageService();