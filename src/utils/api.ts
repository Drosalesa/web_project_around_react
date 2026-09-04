import type { CardData } from "../types/types.js";
import type { UserData } from "../types/types.js"

class Api {
  private readonly apiUrl: string;
  private readonly headers: HeadersInit;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;

    this.headers = {
      authorization: "ff6ba0a7-3c3d-4270-8310-5f0e5ff66a4a",
      "Content-Type": "application/json",
    };
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const res = await fetch(`${this.apiUrl}${endpoint}`, {
      headers: this.headers,
      ...options,
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    return res.json() as Promise<T>;
  }

  getUserInfo(): Promise<UserData> {
    return this.request<UserData>("users/me");
  }

  getInitialCards(): Promise<CardData[]> {
    return this.request<CardData[]>("cards");
  }

  patchUser({
    name,
    description,
  }: {
    name: string;
    description: string;
  }): Promise<UserData> {
    return this.request<UserData>("users/me", {
      method: "PATCH",
      body: JSON.stringify({
        name,
        about: description,
      }),
    });
  }

  postNewCard({
    name,
    link,
  }: {
    name: string;
    link: string;
  }): Promise<CardData> {
    return this.request<CardData>("cards", {
      method: "POST",
      body: JSON.stringify({ name, link }),
    });
  }

  toggleLike(cardId: string, isLiked: boolean): Promise<CardData> {
    return isLiked
      ? this.removeLike(cardId)
      : this.addLike(cardId);
  }

  private addLike(cardId: string): Promise<CardData> {
    return this.request<CardData>(`cards/${cardId}/likes`, {
      method: "PUT",
    });
  }

  private removeLike(cardId: string): Promise<CardData> {
    return this.request<CardData>(`cards/${cardId}/likes`, {
      method: "DELETE",
    });
  }

  deleteCard(cardId: string): Promise<void> {
    return this.request<void>(`cards/${cardId}`, {
        method: "DELETE"
    });
  }

  editAvatar(avatar: string): Promise<UserData> {
    return this.request<UserData>("users/me/avatar", {
      method: "PATCH",
      body: JSON.stringify({ avatar }),
    });
  }
}

export const api = new Api("https://around-api.es.tripleten-services.com/v1/");