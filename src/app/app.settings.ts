import { InjectionToken } from "@angular/core";

export interface AppSettings{
    title: string;
    version: string;
    apiUrl: string;
}

export const appSettings: AppSettings={
    title: 'My Bks App',
    version: 'v1.0',
    apiUrl: 'http://localhost:8081/api/v1'
}

export const APP_SETTINGS = new InjectionToken<AppSettings>('app.settings');