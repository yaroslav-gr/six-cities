interface reviewsUser {
  userAvatarUrl: string,
  userName: string,
  reviewsRatinStarsWidth: number,
  reviewsText: string,
  reviewsDate: string,
}

interface Offer {
  id: number,
  isPremium: boolean,
  offerCardImg: string,
  type: string,
  name: string,
  ratinStarsWidth: number,
  rating: number,
  feature: {
    bedrooms: number,
    adults: number,
  },
  price: number,
  insideList: string[],
  host: {
    avatarUrl: string,
    name: string,
    description: string,
  },
  reviews: {
    amount: number,
    reviewsList: reviewsUser[],
  },
}

export const FakeOffers: Offer[] = [
  {
    id: 0,
    isPremium: true,
    offerCardImg: `img/apartment-01.jpg`,
    type: `Apartment`,
    name: `Beautiful &amp; luxurious apartment at great location`,
    ratinStarsWidth: 80,
    rating: 4.8,
    feature: {
      bedrooms: 1,
      adults: 2
    },
    price: 120,
    insideList: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      description: ` A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.      `,
    },
    reviews: {
      amount: 1,
      reviewsList: [
        {
          userAvatarUrl: `img/avatar-max.jpg`,
          userName: `Max`,
          reviewsRatinStarsWidth: 80,
          reviewsText: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          reviewsDate: `April 2019`
        },
      ],
    },
  },
  {
    id: 1,
    isPremium: false,
    offerCardImg: `img/room.jpg`,
    type: `Private room`,
    name: `Wood and stone place`,
    ratinStarsWidth: 80,
    rating: 4.8,
    feature: {
      bedrooms: 1,
      adults: 2
    },
    price: 80,
    insideList: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      description: ` A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.      `,
    },
    reviews: {
      amount: 1,
      reviewsList: [
        {
          userAvatarUrl: `img/avatar-max.jpg`,
          userName: `Max`,
          reviewsRatinStarsWidth: 80,
          reviewsText: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          reviewsDate: `April 2019`
        },
      ],
    },
  },
  {
    id: 2,
    isPremium: true,
    offerCardImg: `img/apartment-02.jpg`,
    type: `Apartment`,
    name: `Canal View Prinsengracht`,
    ratinStarsWidth: 80,
    rating: 4.8,
    feature: {
      bedrooms: 1,
      adults: 2
    },
    price: 132,
    insideList: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      description: ` A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.      `,
    },
    reviews: {
      amount: 1,
      reviewsList: [
        {
          userAvatarUrl: `img/avatar-max.jpg`,
          userName: `Max`,
          reviewsRatinStarsWidth: 80,
          reviewsText: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          reviewsDate: `April 2019`
        },
      ],
    },
  },
  {
    id: 3,
    isPremium: true,
    offerCardImg: `img/apartment-03.jpg`,
    type: `Apartment`,
    name: `Nice, cozy, warm big bed apartment`,
    ratinStarsWidth: 100,
    rating: 4.8,
    feature: {
      bedrooms: 1,
      adults: 2
    },
    price: 180,
    insideList: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      description: ` A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.      `,
    },
    reviews: {
      amount: 1,
      reviewsList: [
        {
          userAvatarUrl: `img/avatar-max.jpg`,
          userName: `Max`,
          reviewsRatinStarsWidth: 80,
          reviewsText: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          reviewsDate: `April 2019`
        },
      ],
    },
  },
  {
    id: 4,
    isPremium: false,
    offerCardImg: `img/room.jpg`,
    type: `Private room`,
    name: `Wood and stone place`,
    ratinStarsWidth: 80,
    rating: 4.8,
    feature: {
      bedrooms: 1,
      adults: 2
    },
    price: 80,
    insideList: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      description: ` A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.      `,
    },
    reviews: {
      amount: 1,
      reviewsList: [
        {
          userAvatarUrl: `img/avatar-max.jpg`,
          userName: `Max`,
          reviewsRatinStarsWidth: 80,
          reviewsText: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          reviewsDate: `April 2019`
        },
      ],
    },
  },
  {
    id: 5,
    isPremium: true,
    offerCardImg: `img/apartment-01.jpg`,
    type: `Apartment`,
    name: `Beautiful &amp; luxurious apartment at great location`,
    ratinStarsWidth: 80,
    rating: 4.8,
    feature: {
      bedrooms: 1,
      adults: 2
    },
    price: 120,
    insideList: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      description: ` A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.      `,
    },
    reviews: {
      amount: 1,
      reviewsList: [
        {
          userAvatarUrl: `img/avatar-max.jpg`,
          userName: `Max`,
          reviewsRatinStarsWidth: 80,
          reviewsText: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          reviewsDate: `April 2019`
        },
      ],
    },
  },
  {
    id: 6,
    isPremium: false,
    offerCardImg: `img/room.jpg`,
    type: `Private room`,
    name: `Wood and stone place`,
    ratinStarsWidth: 80,
    rating: 4.8,
    feature: {
      bedrooms: 1,
      adults: 2
    },
    price: 80,
    insideList: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      description: ` A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.      `,
    },
    reviews: {
      amount: 1,
      reviewsList: [
        {
          userAvatarUrl: `img/avatar-max.jpg`,
          userName: `Max`,
          reviewsRatinStarsWidth: 80,
          reviewsText: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          reviewsDate: `April 2019`
        },
      ],
    },
  },
  {
    id: 7,
    isPremium: true,
    offerCardImg: `img/apartment-02.jpg`,
    type: `Apartment`,
    name: `Canal View Prinsengracht`,
    ratinStarsWidth: 80,
    rating: 4.8,
    feature: {
      bedrooms: 1,
      adults: 2
    },
    price: 132,
    insideList: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      description: ` A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.      `,
    },
    reviews: {
      amount: 1,
      reviewsList: [
        {
          userAvatarUrl: `img/avatar-max.jpg`,
          userName: `Max`,
          reviewsRatinStarsWidth: 80,
          reviewsText: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          reviewsDate: `April 2019`
        },
      ],
    },
  },
  {
    id: 8,
    isPremium: true,
    offerCardImg: `img/apartment-03.jpg`,
    type: `Apartment`,
    name: `Nice, cozy, warm big bed apartment`,
    ratinStarsWidth: 100,
    rating: 4.8,
    feature: {
      bedrooms: 1,
      adults: 2
    },
    price: 180,
    insideList: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      description: ` A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.      `,
    },
    reviews: {
      amount: 1,
      reviewsList: [
        {
          userAvatarUrl: `img/avatar-max.jpg`,
          userName: `Max`,
          reviewsRatinStarsWidth: 80,
          reviewsText: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          reviewsDate: `April 2019`
        },
      ],
    },
  },
  {
    id: 9,
    isPremium: false,
    offerCardImg: `img/room.jpg`,
    type: `Private room`,
    name: `Wood and stone place`,
    ratinStarsWidth: 80,
    rating: 4.8,
    feature: {
      bedrooms: 1,
      adults: 2
    },
    price: 80,
    insideList: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      description: ` A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.      `,
    },
    reviews: {
      amount: 1,
      reviewsList: [
        {
          userAvatarUrl: `img/avatar-max.jpg`,
          userName: `Max`,
          reviewsRatinStarsWidth: 80,
          reviewsText: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          reviewsDate: `April 2019`
        },
      ],
    },
  }
];