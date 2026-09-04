import type React from "react";

export type PopupConfig = {
    title?: string;
    children: React.ReactNode;
};

export interface CardData {
  _id: string;
  name: string;
  link: string;
  owner: string;
  createdAt: string;
  isLiked: boolean;
};

export type CardProps = {
  card: CardData;
  handleOpenPopup: (popup: PopupConfig) => void;
};

export type ImageProps = {
  card: CardData;
};

export type PopupProps = {
    title?: string;
    children: React.ReactNode;
    onClose: () => void;
    isOpen: boolean;
};

export interface UserData {
  name: string;
  about: string;
  avatar: string;
  _id: string;
}

export interface CurrentUserContextType {
  currentUser: UserData | null;
}

export type MainProps = {
  handleOpenPopup: (popup: PopupConfig) => void;
  handleClosePopup: () => void;
  popup: PopupConfig | null;
  cards: CardData[];
}