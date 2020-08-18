import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiInterceptor } from './api/api.interceptor';
import { ErrorHandlerInterceptor } from './api/error-handler.interceptor';
import {WINDOW_PROVIDERS} from './configuration/window.provider';
import {ConfigFactoryService} from './configuration/config.factory.service';


@NgModule({
	declarations: [

	],
	imports: [
		CommonModule,
		HttpClientModule,
		ReactiveFormsModule,
		FormsModule,
	],
})

export class CoreModule {}
