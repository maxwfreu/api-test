// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { SteamshipMaxTest } from '../client';

export abstract class APIResource {
  protected _client: SteamshipMaxTest;

  constructor(client: SteamshipMaxTest) {
    this._client = client;
  }
}
