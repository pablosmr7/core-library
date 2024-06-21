import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private sampleUrl: string = '';
  private sampleVersion: string = '';

  constructor() {
    this.sampleUrl = process.env['SAMPLEURL'] || '';
    this.sampleVersion = process.env['SAMPLEVERSION'] || '';
  }

  getUrl(): string {
    return this.sampleUrl;
  }

  getVersion(): string {
    return this.sampleVersion;
  }
}
