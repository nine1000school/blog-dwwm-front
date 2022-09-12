const config = {
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_BASEURL,
  },
  view: {
    results: {
      minLimit: 1,
      maxLimit: 20,
      defaultLimit: 10,
    },
  },
}

export default config
