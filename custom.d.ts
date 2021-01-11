declare namespace NodeJS {
  interface processEvn {
    MYSQL_ROOT_PASSWORD: string
    MYSQL_USER: string
    MYSQL_PASSWORD: string
    MYSQL_DATABASE: string
    NEXT_PUBLIC_API_URL: string
  }
}

interface Post {
  id: number
  title: string
  content: string
}
