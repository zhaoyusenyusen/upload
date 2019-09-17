'use strict';

const {Controller} = require('egg');
const fs = require('fs');
const path = require('path');
class UserController extends Controller {
    async Upload() {
        console.log(this.ctx.request.files)
        const file = this.ctx.request.files[0];
        const filedata = fs.readFileSync(file.filepath);
        const avatarPath = path.join(process.cwd(), 'app/public/avatar', file.filename);
        const result = fs.writeFileSync(avatarPath, filedata)
        if (result) {
            this.ctx.body = {
                code: 0,
                msg: 'not file'
            }
        } else {
            this.ctx.body = {
                code: 1,
                msg: 'file success',
                imgUrl: `http://localhost:7001/public/avatar/${file.filename}`
            }
        }
    }
}

module.exports = UserController;
