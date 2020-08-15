

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SDKBrowserModule, SDKModels, LoopBackAuth, InternalStorage } from '../shared/sdk';
import { HttpClientModule } from '@angular/common/http';
import { SocketDriver } from '../shared/sdk/sockets/socket.driver';

import { EventoApi } from '../shared/sdk';
import { FotoApi } from '../shared/sdk';
import { ProdutoApi } from '../shared/sdk';
import { EventoFotoApi } from '../shared/sdk';
import { EventoProdutoApi } from '../shared/sdk';


@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		SDKBrowserModule.forRoot(),
	],
	providers: [
		SocketDriver,
		SDKModels,
		LoopBackAuth,
		InternalStorage,
		EventoApi,
		FotoApi,
		ProdutoApi,
		EventoFotoApi,
		EventoProdutoApi,
	],
	declarations: 
	[
	]
})
export class ServicoModule { }