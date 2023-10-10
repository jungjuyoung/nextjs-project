export type AuthUser = {
  name: string
  username: string
  email: string
  image?: string
}
export type SimpleUser = Pick<AuthUser, 'username' | 'image'>

export type HomeUser = {
  following: SimpleUser[],
  followers: SimpleUser[],
  bookmarks: string[]
} & AuthUser

export type SearchUser = AuthUser & {
  following: number,
  followers: number,
}

export type ProfileUser = SearchUser & { posts: number }