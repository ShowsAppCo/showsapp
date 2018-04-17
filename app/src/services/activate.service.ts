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
 * Required Services
 */
import { DataService } from './data.service';

/**
 * A service that provides translations
 * @class TranslationService
 */
@Injectable()
export class ActivateService {


  constructor( private _store : Store<fromRoot.State>, private _dataService : DataService ) {

  }

  public activateAccount( activationCode : string ) : void {


  }

}
