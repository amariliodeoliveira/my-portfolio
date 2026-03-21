export interface Education {
  readonly degree: string;
  readonly institution: string;
  readonly location: string;
  readonly startDate?: string;
  readonly endDate?: string;
  readonly status: string;
}

export interface Language {
  readonly name: string;
  readonly level: string;
  readonly code: string;
}

export interface MyProfileType {
  readonly name: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly brandName: string;
  readonly gender: string;
  readonly nationality: string;
  readonly birthDate: string;
  readonly roles: readonly string[];
  readonly headline: string;
  readonly contact: {
    readonly email: string;
    readonly phone: string;
    readonly url: string;
    readonly location: {
      readonly city: string;
      readonly state: string;
      readonly country: string;
      readonly countryCode: string;
      readonly region: string;
      readonly availability: string;
    };
  };
  readonly socials: {
    readonly github: string;
    readonly linkedin: string;
    readonly instagram?: string;
    readonly twitter?: string;
  };
  readonly about: {
    readonly title: string;
    readonly shortBio: string;
    readonly fullBio: string;
  };
  readonly skills: {
    readonly core: readonly string[];
    readonly uiUx: readonly string[];
    readonly stateManagement: readonly string[];
    readonly backend: readonly string[];
    readonly infrastructure: readonly string[];
    readonly testing: readonly string[];
    readonly tools: readonly string[];
    readonly others: readonly string[];
  };
  readonly education: readonly Education[];
  readonly languages: readonly Language[];
  readonly seo: {
    readonly defaultTitle: string;
    readonly defaultDescription: string;
    readonly author: string;
    readonly keywords: readonly string[];
    readonly openGraph: {
      readonly type: string;
      readonly locale: string;
      readonly image: string;
    };
  };
}
