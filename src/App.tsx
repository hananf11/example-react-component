import Post from "./Post"

export interface User {
  name: string,
  profile: string
}

export interface PostAsset {
  type: 'video' | 'picture',
  thumbnail: string,
}

interface Post {
  id: number,
  user: User,
  content: string,
  rating: number,
  assets: PostAsset[]
}

const posts: Post[] = [
  {
    id: 1,
    user: {
      name: "Andrew D. Huberman",
      profile: './profiles/e51b17fe66bd1a43cd3641d696b8e57e.png'
    },
    content: "I've found great assistance in this routine management app dashboard. With its customizable reminder feature, I no longer miss out on important tasks. This app has truly helped me enhance my productivity and work efficiency.",
    rating: 4,
    assets: [
      {
        type: 'video',
        thumbnail: './thumbnails/4b46109e0894ee518b425a3979b6e8b2.jpg'
      },
      {
        type: 'picture',
        thumbnail: './thumbnails/88df0d24829cbefdf2796cbcd125ac25.jpg'
      },
      {
        type: 'picture',
        thumbnail: './thumbnails/f0d82c663bf379be8e64d0242fa8d7f8.jpg'
      }
    ]
  },
  {
    id: 2,
    user: {
      name: 'David Goggins',
      profile: './profiles/b7243911db5434081b515415a5e3b387.png'
    },
    content: "I've found great assistance in this routine management app dashboard. With its customizable reminder feature, I no longer miss out on important tasks. This app has truly helped me enhance my productivity and work efficiency.",
    rating: 4,
    assets: []
  },
  {
    id: 3,
    user: {
      name: 'Tim Ferris',
      profile: './profiles/8eae073e9d7196f0bb767c36c1b2065f.png'
    },
    content: "I've found great assistance in this routine management app dashboard. With its customizable reminder feature, I no longer miss out on important tasks. This app has truly helped me enhance my productivity and work efficiency.",
    rating: 4,
    assets: [
      {
        type: 'picture',
        thumbnail: './thumbnails/3a4d08f7e7237ba0f781d197013295e6.jpg'
      },
      {
        type: 'picture',
        thumbnail: './thumbnails/1526b9d004cb38d9e5d16a9ff3f67df8.jpg'
      },
      {
        type: 'picture',
        thumbnail: './thumbnails/ff657dfb0256d7d1a44049c3153ad0d3.jpg'
      }
    ]
  }
]


function App() {
  return (
    <div className="h-screen bg-neutral-800 p-10">
      <h1 className="text-2xl font-semibold text-white mb-5">Testimonials</h1>
      <div className="flex text-white gap-5">
        {posts.map((post) => <Post key={post.id} user={post.user} body={post.content} assets={post.assets} />)}
      </div>
    </div>
  )
}

export default App
