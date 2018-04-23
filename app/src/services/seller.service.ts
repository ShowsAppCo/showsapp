/**
 * Required Angular Imports
 */
import { Injectable } from '@angular/core';


/**
 * Store
 */
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';


/**
 * Configurations
 */
import { APP_SETUP } from "../configurations/app.configuration";
import { COMMON_CONSTANTS as COMMON_CONST } from "../configurations/constants/common.constant";

/**
 * Required Services
 */
import { DataService } from './data.service';
import { Observable } from "rxjs/Observable";
import { ToastEvent } from '../services/toastEvent.service';

/**
 * A service that provides translations
 * @class TranslationService
 */
@Injectable()
export class SellerService {


  /**
   * @type {string} _BASE_URL - Provides based url
   */
  private _BASE_URL : string = APP_SETUP.devEnvironment ? 'http://staging.aws.showsapp.com:8888/' : location.origin;
  /**
   * @type {string} _activateURL - Provides activation url url
   */
  private _getItems : string = this._BASE_URL + 'api/v1/markets/myitems/';


  constructor( private _dataService : DataService,
               private _store : Store<fromRoot.State>,
               private _toastEvent : ToastEvent ) {

  }

  public getSellerData() : any {


    let requestOptions = {
      method: 'GET',
      body: {},
      withCredentials: true
    }, url = this._getItems;


    return this._dataService.sendData(url, requestOptions).map(( res : any ) => {

      console.log('the response is:::::::::', res);

      return res;

    }).catch(( error : any ) => {

      this._toastEvent.fire({
        type: COMMON_CONST.ERROR,
        message: 'There was an error getting your items please try agin'
      });

      return Observable.throw(error || COMMON_CONST.SERVER_ERROR);

    });

  }

}
