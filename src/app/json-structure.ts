export interface CatalogJson {
  _embedded: {
    pets: PetJson[];
  };
  _links: {
    self: { href: string };
    profile: { href: string };
  };
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
}

export interface PetJson {
  id: number;
  name: string;
  petKind: string;
  age: number;
  image: string;
  ownerId: number;
}
