'use client'

import { MessageCircle, Compass, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export function SideNav() {
  return (
    <Sheet>
      <SheetContent side="left" className="w-[300px] p-0">
        <div className="flex flex-col h-full">
          <div className="p-6">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-8">
              <span className="text-2xl">✨</span>
              mindtrip
              <span className="text-xs font-normal px-1.5 py-0.5 rounded-md bg-black/10">BETA</span>
            </Link>
            
            <div className="space-y-2">
              <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
                <MessageCircle size={20} />
                Start chatting
              </Link>
              <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
                <Compass size={20} />
                Get inspired
              </Link>
              <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
                <Sparkles size={20} />
                Personalize
              </Link>
            </div>
          </div>

          <div className="border-t mt-4">
            <div className="p-6">
              <div className="space-y-4">
                <p className="text-sm font-medium italic text-gray-600">for Creators</p>
                <p className="text-sm font-medium italic text-gray-600">for Business</p>
                <Link href="#" className="block text-sm">Partner with us</Link>
                <Link href="#" className="block text-sm">Help</Link>
              </div>
            </div>
          </div>

          <div className="mt-auto p-6 space-y-4">
            <Button variant="outline" className="w-full">Sign in</Button>
            <Button className="w-full">Get started</Button>
          </div>

          <div className="p-6 pt-0 text-sm text-gray-500 space-y-4">
            <div className="flex gap-4">
              <Link href="#" className="hover:underline">Privacy Policy</Link>
              <Link href="#" className="hover:underline">Terms of Service</Link>
            </div>
            <p>© 2024 Mindtrip, Inc.</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

