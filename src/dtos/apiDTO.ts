interface IGamesApiDTO {
  id?: any;
  name: string;
  rating?: number;
  background_image?: string;
  released?: any;

  dominant_color?: string;

  esrb_rating?: {
    id: number;
    name: string;
  };

  genres?: [
    {
      id: number;
      name: string;
    },
  ];

  parent_platforms?: [
    {
      platform: {
        id: number;
        name: string;
      };
    },
  ];

  short_screenshots?: [
    {
      id: number;
      image: string;
    },
  ];

  stores?: [
    {
      id: number;
      store: {
        id: number;
        name: string;
        domain: string;
      };
    },
  ];
}

export default IGamesApiDTO;
