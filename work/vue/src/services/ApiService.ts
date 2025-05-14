const HOST: string = "https://api.koduj.dev";

export abstract class ApiService<T extends { id: number | string | null }> {
  protected abstract resourceLocator: string;
  protected readonly userKey: string = "test2";

  protected async request<R>(endpoint: string, options?: RequestInit): Promise<R> {
    const response: Response = await fetch(`${HOST}${this.resourceLocator}${endpoint}`, options);

    if (!response.ok) {
      throw new Error("Could not fetch API response");
    }

    if (response.status === 204) {
      return null as unknown as R;
    }

    return await response.json();
  }

  public async getAll(): Promise<T[]> {
    return this.request<T[]>("", {
      method: "GET",
      headers: this.getHeaders(),
    });
  }

  public async remove(data: T): Promise<void> {
    return this.request<void>(`/${data.id}`, {
      method: "DELETE",
      headers: this.getHeaders(),
    });
  }

  public async add(data: T): Promise<T> {
    return this.request<T>("", {
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify(this.normalizePayload(data)),
    });
  }

  public async update(data: Partial<T>): Promise<T> {
    return this.request<T>(`/${data.id}`, {
      method: "PATCH",
      headers: this.getHeaders("application/merge-patch+json"),
      body: JSON.stringify(this.normalizePayload(data)),
    });
  }

  protected getHeaders(contentType: string = "application/json"): HeadersInit {
    return {
      "user-key": this.userKey,
      "Accept": "application/json",
      "Content-Type": contentType,
    }
  }

  protected normalizePayload(payload: Partial<T>): Partial<T> {
    return payload as T;
  }
}
