'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function FarmingNewsPageComponent() {
  return (
    <div className="bg-white">
      <header className="bg-green-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">कृषिConnect</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>Listings</li>
              <li>Your Contracts</li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <span>5 September 2024</span>
          <span>28°C</span>
          <Button variant="ghost" size="icon">
            <UserIcon className="h-5 w-5" />
          </Button>
        </div>
      </header>
      <main className="container mx-auto p-4 flex">
        <aside className="w-1/4 pr-4">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-bold mb-4">Topics</h2>
              <ul className="space-y-2">
                <li>
                  <details>
                    <summary className="cursor-pointer">Blogs</summary>
                  </details>
                </li>
                <li>
                  <details>
                    <summary className="cursor-pointer">Articles</summary>
                  </details>
                </li>
                <li>
                  <details>
                    <summary className="cursor-pointer">Latest News</summary>
                  </details>
                </li>
                <li>
                  <details>
                    <summary className="cursor-pointer">Prices</summary>
                  </details>
                </li>
              </ul>
            </CardContent>
          </Card>
        </aside>
        <section className="w-3/4">
          <h2 className="text-2xl font-bold mb-4">Farming News and Articles</h2>
          <div className="mb-4">
            <Button variant="ghost" className="mr-2">All</Button>
            <Button variant="ghost" className="mr-2">News</Button>
            <Button variant="ghost" className="mr-2">Blogs</Button>
            <Button variant="ghost">Articles</Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-0">
                <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/orgainc-Ifu8tiwAy0iiTND23J84vPmkRbIHIA.jpeg" alt="Organic Farm" width={400} height={200} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">10 Steps to Start Your Own Organic Farm</h3>
                  <p className="text-sm text-gray-500 mb-2">How-To</p>
                  <p className="text-sm text-gray-500 mb-4">2023-09-04</p>
                  <Button variant="secondary">Read More</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-0">
                <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sucess%20story-TKpCdhbgYXTDgaIM6zPn1pk4J3JCcb.jpg" alt="Success Story" width={400} height={200} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">From City to Farm: A Success Story</h3>
                  <p className="text-sm text-gray-500 mb-2">Success Stories</p>
                  <p className="text-sm text-gray-500 mb-4">2023-09-03</p>
                  <Button variant="secondary">Read More</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-0">
                <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/irrigation-cz1eg2TXLpyQtQj2HOcGVFHrRoKsJU.jpeg" alt="Irrigation Techniques" width={400} height={200} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Advanced Irrigation Techniques for Water Conservation</h3>
                  <p className="text-sm text-gray-500 mb-2">Technology</p>
                  <p className="text-sm text-gray-500 mb-4">2023-09-02</p>
                  <Button variant="secondary">Read More</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-0">
                <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/farm-BHh8QwKjZlG8QIy7c8Ir0xIQMpRY7Q.jpeg" alt="Sustainable Agriculture" width={400} height={200} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">The Future of Sustainable Agriculture in India</h3>
                  <p className="text-sm text-gray-500 mb-2">Trends</p>
                  <p className="text-sm text-gray-500 mb-4">2023-09-01</p>
                  <Button variant="secondary">Read More</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}

// function UserIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
//       <circle cx="12" cy="7" r="4" />
//     </svg>
//   )
// }