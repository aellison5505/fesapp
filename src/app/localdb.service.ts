import { Injectable } from '@angular/core';
import * as PouchDB from 'pouchdb';
//declare var PouchDB:any;

@Injectable()
export class LocalDBService {

  db;
  remoteDB;
  public ival;
  cleari:boolean;
  private dbBuilt:boolean;
  private token: string;
  private key:string;

constructor() {
    this.db = null;
    this.remoteDB = null;
    this.ival = null;
    this.cleari = false;

  }

  private cleanup(): void {
      console.log("clean");
      this.remoteDB.compact().then((res) => {
        console.log("pact");
      }).catch((err) => {
        console.log("errp");
      });
      this.db.compact().then((res1) => {
        console.log("pact2");
      });;
  }

   public sync(): void {
    if(this.cleari){
      console.log("clear");
      clearInterval(this.ival);
      return;
    }else{
      if(!this.ival){
        this.ival = setInterval(() => {
             this.sync();
           }, 10000);
      }
    }
    this.remoteDB = new PouchDB('https://cdb.mobilewebapp.net/lke_db/',
    {
      ajax: {
          headers: {
              'auth': this.token,
              'x-api-key':this.key
            }
          }
    });
    this.db.replicate.from(this.remoteDB).on('complete', () => {
      console.log('syn');
      this.cleari = true;
      this.cleanup();
    }).on('error', (err) => {
      console.log(err);
    });
    this.remoteDB = null;
  }

  public init() {
    this.db = new PouchDB('jbmdl_grid_db', {
      skip_setup: false
    });
    this.db.info().then((info) => {
      console.log(info);
      if(info.doc_count>0){
        console.log('db built');
        this.setDbBuilt = true;
      }else{
        this.setDbBuilt = false;
        console.log('need docs');
      }

    }).catch((err) => {
      console.log('error db setup' + err);
    });

  }

  public get(pull: string): Promise<String> {
    return new Promise((resolve, reject) => {
      this.db.get(pull).then((doc) => {
        console.log(doc);
        resolve(doc);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  set setDbBuilt (tog: boolean){
    this.dbBuilt = tog;
  }

  set setToken(token:string){
    this.token = token;
  }

  set setKey(key:string){
    this.key = key;
  }





}
