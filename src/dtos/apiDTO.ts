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
  // parent_platforms?: [
  //   platform: {
  //     id: number;
  //     name: string;
  //   },
  // ];

  parent_platforms?: any;

  short_screenshots?: [
    {
      id: number;
      name: string;
    },
  ];
  stores?: [
    {
      store: {
        id: number;
        name: string;
      };
    },
  ];
}

export default IGamesApiDTO;
