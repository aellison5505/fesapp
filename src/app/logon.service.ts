import { Injectable } from '@angular/core';
import { HttpsPromise } from './httpsPromise'
import { LocalDBService } from './localdb.service'

@Injectable()
export class LogonService {

  private https: HttpsPromise
  private token: string
  private key: string
  private login: boolean
  private user: string
  private passwd: string
  private intval: any

  constructor(private localDB: LocalDBService) {
    this.https = new HttpsPromise();
    this.login = false;

  }

  get: any = (user: string, passwd: string) => {
    return new Promise<any>(async (ret, err) => {
      let body = JSON.stringify({
        'user': user,
        'passwd': passwd
      })
      const options = {
        host: 'api.mobilewebapp.net',
        port: 443,
        path: '/jfdapp/login',
        method: 'POST',
        headers: {
          'x-api-key': 'Rg1zGfCVaO3lCOk9TlPBI3Wal1vvDdAG5iemhe0O',
          'Content-Type': 'application/json'
        }
      }
      try {
        let res = await this.https.send(options, body);
        console.log(res);
        if (res.statusCode < 300) {
          res.body = JSON.parse(res.body)
          console.log(res.body)
          this.token = res.body.token
          this.key = res.body.key
          console.log('toekn: ' + this.token + ' Key: ' + this.key)
          this.setLogged = true;
          this.user = user;
          this.passwd = passwd;
          this.renew();
          this.ckSync();
          ret(true);
        } else {
          err(res.body);
        }
      } catch (e) {
        //err(e);
        err(e.message);
      }

    });
  }

  private ckSync = () => {
    this.localDB.setKey = this.key;
    this.localDB.setToken = this.token;
    this.localDB.sync();
  }

  private renew = () =>{
    if(this.intval === undefined){
    this.intval = setInterval( async ()=> {
      var get = await this.get(this.user, this.passwd);
    }, 3300000);
  }
  }

  get getToken(){
    return this.token;
  }

  get getKey(){
    return this.key;
  }

  get getLoged() {
    return this.login;
  }

  private set setLogged(log: boolean){
    this.login = log;
  }

}
