/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// Astro component module declarations
declare module '*.astro' {
  const Component: any;
  export default Component;
}

// TypeScript module declarations for data files
declare module '../data/navData' {
  const navData: any;
  export default navData;
}

declare module '../data/teamData' {
  const teamData: any;
  export default teamData;
}

declare module '../data/courseData' {
  const courseData: any;
  export default courseData;
}
