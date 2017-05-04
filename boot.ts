/* Import the Bootstrap Dependency from Angular Core [for browser device app] */
import {bootstrap}  from 'angular2/platform/browser'

/* Import the created RootComponent [actual application] Dependency from App.component file */
import {AppComponent} from './app.component'

import {bind} from 'angular2/core';
/* Bootstrap the root component without any module dependencies */
 bootstrap(AppComponent,[]);