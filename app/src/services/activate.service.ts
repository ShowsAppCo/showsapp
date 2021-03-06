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
 * Required Actions
 */
import * as base from '../actions/base';

/**
 * Constants Configuration
 */
import { APP_SETUP } from '../configurations/app.configuration';
import { COMMON_CONSTANTS as COMMON_CONST } from '../configurations/constants/common.constant';

/**
 * Required Services
 */
import { DataService } from './data.service';
import { Observable } from 'rxjs/Observable';
import { ToastEvent } from './toastEvent.service';


/**
 * Required Models
 */
import { PasswordModel } from '../models/login/login.model';

/**
 * A service that provides a data abstraction to activate a user.
 * @class ActivateService
 */
@Injectable()
export class ActivateService {


  /**
   * @type {string} _BASE_URL - Provides based url
   */
  private _BASE_URL : string = APP_SETUP.devEnvironment ? 'http://localhost:8888/' : location.origin + '/';
  /**
   * @type {string} _activateURL - Provides activation url url
   */
  private _activateURL : string = this._BASE_URL + 'api/v1/accounts/activate/';
  /**
   * @type {string} _activateURL - Provides activation url url
   */
  private _validateURL : string = this._BASE_URL + 'api/v1/accounts/activate/';
  /**
   * @type {string} _activateURL - Provides activation url url
   */
  private _setNewPasswordURL : string = this._BASE_URL + 'api/v1/accounts/set_new_password/';


  /**
   * @param {DataService} _dataService - Provides data service
   * @param {Store<fromRoot.State>} _store - Provides store provider
   * @param {ToastEvent} _toastEvent - Provides toast event
   */
  constructor( private _dataService : DataService,
               private _store : Store<fromRoot.State>,
               private _toastEvent : ToastEvent ) {

  }

  /**
   * Method to activate a user
   * @param {string} activationCode - activation token
   * @return any
   */
  public activateAccount( activationCode : string ) : any {
    let requestOptions = {
      method: 'POST',
      body: {
        token: activationCode
      },
      withCredentials: true
    }, url = this._activateURL;

    return this._dataService.sendData(url, requestOptions).map(( res : any ) => {

      return res;

    }).catch(( error : any ) => {

      this._toastEvent.fire({
        type: COMMON_CONST.ERROR,
        message: 'There was an error with your request please try again'
      });

      return Observable.throw(error || COMMON_CONST.SERVER_ERROR);

    });

  }

  /**
   * Method to activate a user
   * @param {string} activationCode - activation token
   * @return any
   */
  public validateEmail( activationCode : string ) : any {

    let requestOptions = {
      method: 'POST',
      body: {
        token: activationCode
      },
      withCredentials: true
    }, url = this._validateURL;

    return this._dataService.sendData(url, requestOptions).map(( res : any ) => {

      return res;

    }).catch(( error : any ) => {

      this._toastEvent.fire({
        type: COMMON_CONST.ERROR,
        message: 'There was an error with your request please try again'
      });

      return Observable.throw(error || COMMON_CONST.SERVER_ERROR);

    });

  }

  /**
   * Method to activate a user
   * @param {string} activationCode - activation token
   * @return any
   */
  public setNewPassword( emailObject : PasswordModel ) : any {

    let requestOptions = {
      method: 'POST',
      body: emailObject,
      withCredentials: true
    }, url = this._setNewPasswordURL;

    return this._dataService.sendData(url, requestOptions).map(( res : any ) => {

      return res;

    }).catch(( error : any ) => {

      this._toastEvent.fire({
        type: COMMON_CONST.ERROR,
        message: 'There was an error with your request please try again'
      });

      return Observable.throw(error || COMMON_CONST.SERVER_ERROR);

    });

  }

}
