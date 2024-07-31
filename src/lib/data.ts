export interface ClientItem {
  id: number;
  image: string;
  name: string;
}

export interface ServiceItem {
  image: string;
  title: string;
}

export const clientList: ClientItem[] = [
  {
    id: 1,
    image: "/wifi-castle-client.jpg",
    name: "wifi-castle",
  },
  {
    id: 2,
    image: "/pfp-client.png",
    name: "pfp",
  },
  {
    id: 3,
    image: "/apexiron-client.png",
    name: "apexiron",
  },
  {
    id: 4,
    image: "/lafiesta-client.png",
    name: "lafiesta",
  },
  {
    id: 5,
    image: "/chr-client.png",
    name: "chr",
  },
];

export const servicesList: ServiceItem[] = [
  {
    image: "/logo-service.svg",
    title: "LOGO DESIGN",
  },
  {
    image: "/web-development-service.svg",
    title: "WEB DEVELOPMENT",
  },
  {
    image: "/web-design-service.svg",
    title: "WEB DESIGN",
  },
  {
    image: "/media-service.svg",
    title: "MEDIA MANAGEMENT",
  },
  {
    image: "/video-service.svg",
    title: "VIDEO EDITING",
  },
  {
    image: "/mobile-service.svg",
    title: "APP DESIGN",
  },
];
